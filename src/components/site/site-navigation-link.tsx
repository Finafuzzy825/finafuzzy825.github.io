'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactElement } from 'react'

import type { NavigationItem } from '@/types/content'

export function SiteNavigationLink({ href, label }: NavigationItem): ReactElement {
  const pathname = usePathname()
  const isCurrent = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link aria-current={isCurrent ? 'page' : undefined} className="site-nav-link" href={href}>
      {label}
    </Link>
  )
}
