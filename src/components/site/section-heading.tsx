import type { ReactElement, ReactNode } from 'react'

interface SectionHeadingProps {
  action?: ReactNode
  description?: string
  eyebrow?: string
  title: string
}

export function SectionHeading({
  action,
  description,
  eyebrow,
  title,
}: SectionHeadingProps): ReactElement {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--alliance-text-title)] sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-8 text-[var(--alliance-text-secondary)]">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
