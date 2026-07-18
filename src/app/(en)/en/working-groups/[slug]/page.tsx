import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { ReactElement } from 'react'

import {
  createWorkingGroupMetadata,
  generateStaticParams,
  WorkingGroupOverviewView,
} from '@/app/(frontend)/working-groups/[slug]/page'
import { getWorkingGroupBySlug } from '@/content/working-groups'

interface EnPageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export { generateStaticParams }

export async function generateMetadata({ params }: EnPageProps): Promise<Metadata> {
  const { slug } = await params
  const group = getWorkingGroupBySlug(slug)

  if (!group) notFound()

  return createWorkingGroupMetadata(group, 'en')
}

export default async function EnWorkingGroupPage({ params }: EnPageProps): Promise<ReactElement> {
  const { slug } = await params

  return <WorkingGroupOverviewView locale="en" slug={slug} />
}
