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
      status: 409,
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

## 📁 File Location
```
server/api/link/create.post.ts
```

---

## 🔍 What Happened?

When I provided the code earlier, I included markdown documentation text at the bottom of the file. You likely copied everything including the documentation markers like:
```
```typescript
👉 Use the code from artifact `hero_component`
```

These markdown artifacts got pasted into your actual TypeScript file, causing a syntax error.

---

## ✅ Quick Checklist

Make sure these 3 files are clean (no markdown/documentation text):

1. ✅ `app/components/home/Hero.vue` - Use the full code I provided earlier
2. ✅ `server/middleware/2.auth.ts` - Should be clean
3. ✅ `server/api/link/create.post.ts` - Use the code above ☝️

---

## 🚀 Next Steps

1. Replace `server/api/link/create.post.ts` with the clean code above
2. Commit and push
3. Your build should now succeed!

The error should be resolved now. Let me know if you see any other issues! 💪
