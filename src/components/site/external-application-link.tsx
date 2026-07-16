import type { ReactElement, ReactNode } from 'react'

import { resolveApplicationTarget } from '@/config/site'
import type { ApplicationKind } from '@/types/content'

interface ExternalApplicationLinkProps {
  children?: ReactNode
  className?: string
  configuredUrl?: string
  kind: ApplicationKind
}

export function ExternalApplicationLink({
  children,
  className,
  configuredUrl,
  kind,
}: ExternalApplicationLinkProps): ReactElement {
  const target = resolveApplicationTarget(kind, configuredUrl)

  if (!target.isAvailable || !target.href) {
    return (
      <span aria-disabled="true" className={className} title={target.unavailableMessage}>
        {target.unavailableMessage}
      </span>
    )
  }

  return (
    <a
      aria-label={`${target.label}（打开外部表单）`}
      className={className}
      href={target.href}
      rel="noreferrer noopener"
      target="_blank"
    >
      {children ?? target.label}
    </a>
  )
}
