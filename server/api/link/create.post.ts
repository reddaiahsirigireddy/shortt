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
  
  // Check if link already exists
  const existingLink = await KV.get(`link:${link.slug}`)
  if (existingLink) {
    throw createError({
      status: 409, // Conflict
      statusText: 'Link already exists',
    })
  }

  // For public access (no auth), enforce 4-hour expiration if not already set
  const token = getHeader(event, 'Authorization')?.replace(/^Bearer\s+/, '')
  const isPublicRequest = !token || token !== useRuntimeConfig(event).siteToken
  
  if (isPublicRequest) {
    // Enforce 4-hour expiration for public links
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
```

---

## 📋 **All 3 Files You Need to Update**

Here's the complete list with full paths:

### **1. Hero Component**
```
app/components/home/Hero.vue
```
👉 Use the code from artifact `hero_component`

### **2. Auth Middleware**
```
server/middleware/2.auth.ts
```
👉 Use the code from artifact `auth_middleware`

### **3. Create API (This One!)**
```
server/api/link/create.post.ts
