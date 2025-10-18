import { LinkSchema } from '@@/schemas/link'

defineRouteMeta({
  openAPI: {
    description: 'Create a new short link',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['url'],
            properties: {
              url: {
                type: 'string',
                description: 'The URL to shorten',
              },
            },
          },
        },
      },
    },
  },
})

export default eventHandler(async (event) => {
  const link = await readValidatedBody(event, LinkSchema.parse)

  const { caseSensitive } = useRuntimeConfig(event)

  if (!caseSensitive) {
    link.slug = link.slug.toLowerCase()
  }

  const { cloudflare } = event.context
  const { KV } = cloudflare.env
  
  const existingLink = await KV.get(`link:${link.slug}`)
  if (existingLink) {
    throw createError({
      status: 409,
      statusText: 'Link already exists',
    })
  }

  const token = getHeader(event, 'Authorization')?.replace(/^Bearer\s+/, '')
  const isPublicRequest = !token || token !== useRuntimeConfig(event).siteToken
  
  if (isPublicRequest) {
    const fourHoursFromNow = Math.floor(Date.now() / 1000) + (4 * 60 * 60)
    if (!link.expiration || link.expiration > fourHoursFromNow) {
      link.expiration = fourHoursFromNow
    }
  }

  const expiration = getExpiration(event, link.expiration)

  await KV.put(`link:${link.slug}`, JSON.stringify(link), {
    expiration,
    metadata: {
      expiration,
      url: link.url,
      comment: link.comment,
    },
  })
  
  setResponseStatus(event, 201)
  const shortLink = `${getRequestProtocol(event)}://${getRequestHost(event)}/${link.slug}`
  return { link, shortLink }
})
