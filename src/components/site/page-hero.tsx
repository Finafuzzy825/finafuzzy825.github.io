import type { ReactElement, ReactNode } from 'react'

interface PageHeroProps {
  actions?: ReactNode
  description: string
  eyebrow?: string
  title: string
}

export function PageHero({ actions, description, eyebrow, title }: PageHeroProps): ReactElement {
  return (
    <section className="page-hero">
      <div aria-hidden="true" className="page-hero__glow" />
      <div className="site-container relative py-20 sm:py-24 lg:py-28">
        {eyebrow ? <p className="eyebrow text-[var(--alliance-accent-soft)]">{eyebrow}</p> : null}
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--alliance-text-inverse-muted)] sm:text-lg">
          {description}
        </p>
        {actions ? <div className="mt-9 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  )
}
