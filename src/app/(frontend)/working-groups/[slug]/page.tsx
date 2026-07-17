import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { ReactElement } from 'react'

import { PageHero } from '@/components/site/page-hero'
import { SectionHeading } from '@/components/site/section-heading'
import { getWorkingGroupBySlug, getWorkingGroupSlugs } from '@/content/working-groups'
import type { WorkingGroupSummary } from '@/types/content'

interface WorkingGroupPageProps {
  params: Promise<{ slug: string }>
}

// 仅预渲染 generateStaticParams 返回的 slug；未知 slug 一律 404。
export const dynamicParams = false

export function generateStaticParams(): { slug: string }[] {
  return getWorkingGroupSlugs().map((slug) => ({ slug }))
}

export function createWorkingGroupMetadata(group: WorkingGroupSummary): Metadata {
  return {
    alternates: { canonical: `/working-groups/${group.slug}` },
    description: group.description,
    openGraph: {
      description: group.description,
      title: group.title,
      type: 'website',
      url: `/working-groups/${group.slug}`,
    },
    title: group.title,
  }
}

export async function generateMetadata({ params }: WorkingGroupPageProps): Promise<Metadata> {
  const { slug } = await params
  const group = getWorkingGroupBySlug(slug)

  if (!group) notFound()

  return createWorkingGroupMetadata(group)
}

interface WorkingGroupOverviewProps {
  group: WorkingGroupSummary
}

export function WorkingGroupOverview({ group }: WorkingGroupOverviewProps): ReactElement {
  const eyebrow = group.kind === 'initiative' ? '重点专项' : '工作组'

  return (
    <>
      <PageHero description={group.description} eyebrow={eyebrow} title={group.title} />

      <section className="block">
        <div className="site-container">
          <SectionHeading eyebrow="工作职责" title="持续推进的核心职责" />
          <ul>
            {group.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block">
        <div className="site-container">
          <SectionHeading eyebrow="研究方向" title="聚焦的研究与验证方向" />
          <div className="grid-2">
            {group.researchDirections.map((direction) => (
              <article className="card" key={direction}>
                <h3 style={{ fontSize: '20px' }}>{direction}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="site-container">
          <SectionHeading
            description="仅公开已获授权具名的负责单位，其余按参与角色描述，不以未经确认的名称作为公开内容。"
            eyebrow="负责人"
            title="统筹与共建单位"
          />
          <div className="grid-2">
            {group.leads.map((lead) => (
              <article className="card" key={`${lead.role}-${lead.name}`}>
                <p className="eyebrow">{lead.role}</p>
                {lead.named ? (
                  <h3 style={{ fontSize: '20px' }}>{lead.name}</h3>
                ) : (
                  <p>{lead.name}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="site-container">
          <SectionHeading eyebrow="阶段成果" title="对外发布的阶段性成果" />
          {group.outcomes.length === 0 ? (
            <div className="empty">
              <h3>成果整理中</h3>
              <p>阶段性成果将在对外发布后陆续公开，我们不会以未经确认的成果填充页面。</p>
            </div>
          ) : (
            <ul>
              {group.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="block">
        <div className="site-container">
          <SectionHeading eyebrow="进一步了解" title="成员、参与与生态专题" />
          <div className="grid-2">
            <article className="card">
              <h3 style={{ fontSize: '20px' }}>成员名单</h3>
              <p>查看该工作组已获公开授权的共建成员。</p>
              <div style={{ marginTop: '24px' }}>
                <Link
                  className="button-primary"
                  href={`/working-groups/${group.slug}/members`}
                >
                  查看成员名单
                </Link>
              </div>
            </article>

            <article className="card">
              <h3 style={{ fontSize: '20px' }}>加入工作组</h3>
              <p>面向专业用户开放，了解参与价值与加入路径。</p>
              <div style={{ marginTop: '24px' }}>
                <Link className="button-primary" href={`/working-groups/${group.slug}/join`}>
                  加入{group.title}
                </Link>
              </div>
            </article>

            {group.ecosystemHref ? (
              <article className="card">
                <h3 style={{ fontSize: '20px' }}>{group.ecosystemLabel ?? '生态专题'}</h3>
                <p>前往关联的业务专题，了解具体场景与进展。</p>
                <div style={{ marginTop: '24px' }}>
                  <Link className="button-secondary" href={group.ecosystemHref}>
                    查看生态专题
                  </Link>
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}

export default async function WorkingGroupPage({
  params,
}: WorkingGroupPageProps): Promise<ReactElement> {
  const { slug } = await params
  const group = getWorkingGroupBySlug(slug)

  if (!group) notFound()

  return (
    <main id="main-content">
      <WorkingGroupOverview group={group} />
    </main>
  )
}
