import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactElement } from 'react'

import { PageHero } from '@/components/site/page-hero'
import { SectionHeading } from '@/components/site/section-heading'
import { WORKING_GROUPS } from '@/content/working-groups'

export const metadata: Metadata = {
  alternates: { canonical: '/working-groups' },
  description: '了解联盟工作组与重点专项，查看已经确认并公开的协作方向及参与入口。',
  title: '工作组与专项',
}

export default function WorkingGroupsPage(): ReactElement {
  return (
    <main id="main-content">
      <PageHero
        description="围绕产业共同议题组织持续协作，通过工作组和重点专项连接研究、验证、场景与成果交流。"
        eyebrow="协作网络"
        title="工作组与专项"
      />

      <section className="site-container py-16 sm:py-20 lg:py-24">
        <SectionHeading
          description="以下仅展示已经确认并可公开的重点专项；其余方向将在信息确认后陆续发布。"
          eyebrow="公开专项"
          title="聚焦真实议题，形成持续协作"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {WORKING_GROUPS.map((group) => (
            <article className="surface-card flex flex-col p-6 sm:p-8" key={group.id}>
              <p className="eyebrow">{group.kind === 'initiative' ? '重点专项' : '工作组'}</p>
              <h2 className="mt-4 text-2xl font-semibold text-[var(--alliance-text-title)] sm:text-3xl">
                {group.title}
              </h2>
              <p className="mt-4 flex-1 leading-8 text-[var(--alliance-text-secondary)]">
                {group.description}
              </p>
              <div className="mt-7">
                <Link className="button-primary" href={group.href}>
                  查看{group.title}
                </Link>
              </div>
            </article>
          ))}

          <aside className="rounded-2xl border border-dashed border-[var(--alliance-border)] bg-[var(--alliance-bg-subtle)] p-6 sm:p-8">
            <p className="text-lg font-semibold text-[var(--alliance-text-title)]">
              持续开放协作方向
            </p>
            <p className="mt-4 leading-8 text-[var(--alliance-text-secondary)]">
              其余工作组信息将在确认后发布，不以未经确认的名称、负责人或成果作为公开内容。
            </p>
            <Link className="button-secondary mt-7" href="/join">
              了解联盟参与方式
            </Link>
          </aside>
        </div>
      </section>
    </main>
  )
}
