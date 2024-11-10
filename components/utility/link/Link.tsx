import NextLink from "next/link"
import type { LinkProps as NextLinkProps } from "next/link"
import type { UrlObject } from "url"
import React, { forwardRef, useMemo } from "react"
import cn from "clsx"

type Url = string | UrlObject

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> &
  NextLinkProps & {
    className?: string
    scroll?: boolean
    ariaLabel?: string
    children: React.ReactNode
    href: Url
  }

const Link: React.ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = (
  { href, children, className, scroll = true, ariaLabel = "go to page", ...props },
  ref
) => {
  const isProtocol = useMemo(
    () => typeof href === "string" && (href.startsWith("mailto:") || href.startsWith("tel:")),
    [href]
  )
  const isAnchor = useMemo(() => typeof href === "string" && href.startsWith("#"), [href])
  const isExternal = useMemo(() => typeof href === "string" && href.startsWith("http"), [href])

  if (typeof href === "object") {
    return (
      <NextLink ref={ref} href={href} aria-label={ariaLabel} className={className} scroll={scroll} {...props}>
        {children}
      </NextLink>
    )
  }

  if (isProtocol || isExternal) {
    return (
      <a ref={ref} href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <NextLink
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      className={cn("cursor-pointer", className)}
      passHref={isAnchor}
      scroll={scroll}
      {...props}
    >
      {children}
    </NextLink>
  )
}

const ForwardedLink = forwardRef(Link)

ForwardedLink.displayName = "Link"

export default ForwardedLink
