const rawBase = import.meta.env.BASE_URL.replace(/\/$/, '')

export const basePath = rawBase

/** Prefix an in-app path ("/about", "/#playground") with the deploy base. */
export function withBase(path: string): string {
  return `${rawBase}${path.startsWith('/') ? path : `/${path}`}`
}

/** Remove the deploy base from a location pathname. */
export function stripBase(pathname: string): string {
  if (rawBase && (pathname === rawBase || pathname.startsWith(`${rawBase}/`))) {
    return pathname.slice(rawBase.length) || '/'
  }
  return pathname
}
