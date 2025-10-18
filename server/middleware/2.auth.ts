export default eventHandler((event) => {
  const token = getHeader(event, 'Authorization')?.replace(/^Bearer\s+/, '')
  
  // Allow public access to upsert endpoint
  if (event.path === '/api/link/upsert') {
    return
  }
  
  if (event.path.startsWith('/api/') && !event.path.startsWith('/api/_') && token !== useRuntimeConfig(event).siteToken) {
    throw createError({
      status: 401,
      statusText: 'Unauthorized',
    })
  }
  if (token && token.length < 8) {
    throw createError({
      status: 401,
      statusText: 'Token is too short',
    })
  }
})
