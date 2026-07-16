import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactElement } from 'react'

import { PageHero } from '@/components/site/page-hero'
import { SectionHeading } from '@/components/site/section-heading'
import {
  ALLIANCE_DIRECTIONS,
  ALLIANCE_MECHANISM,
  ALLIANCE_MISSION,
  ALLIANCE_VALUES,
} from '@/content/alliance'

export const metadata: Metadata = {
  alternates: { canonical: '/alliance' },
  description: '了解联盟宗旨、共同价值与协作机制，以及联盟如何连接产业力量、推动开放协同。',
  title: '联盟介绍',
}

export default function AlliancePage(): ReactElement {
  return (
    <main id="main-content">
      <PageHero
        actions={
          <Link className="button-primary" href="/join">
            了解参与方式
          </Link>
        }
        description="连接自主大模型产业中的技术、场景、人才与生态资源，以开放协作推动可信、可持续的产业发展。"
        eyebrow="关于联盟"
        title="联盟介绍"
      />

      <section className="site-container py-16 sm:py-20 lg:py-24">
        <SectionHeading eyebrow="使命" title="联盟宗旨" />
        <p className="mt-8 max-w-4xl text-xl leading-9 text-[var(--alliance-text-primary)] sm:text-2xl sm:leading-10">
          {ALLIANCE_MISSION}
        </p>
      </section>

      <section className="bg-[var(--alliance-bg-subtle)]">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            description="以共同原则连接不同技术路线、机构能力与专业经验。"
            eyebrow="价值主张"
            title="共同价值"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ALLIANCE_VALUES.map((value) => (
              <article className="surface-card p-6 sm:p-7" key={value.id}>
                <h3 className="text-xl font-semibold text-[var(--alliance-text-title)]">
                  {value.title}
                </h3>
                <p className="mt-4 leading-7 text-[var(--alliance-text-secondary)]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
        <SectionHeading
          description="联盟统筹方向，工作组和专项聚焦议题，成员伙伴根据能力与意愿参与。"
          eyebrow="组织方式"
          title="协作机制"
        />
        <ol className="grid gap-4">
          {ALLIANCE_MECHANISM.map((item, index) => (
            <li className="surface-card flex gap-5 p-5 sm:p-6" key={item}>
              <span className="text-lg font-semibold text-[var(--alliance-brand-primary)]">
                0{index + 1}
              </span>
              <span className="leading-8 text-[var(--alliance-text-primary)]">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[var(--alliance-bg-subtle)]">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            description="从共同议题出发，持续形成可参与、可验证、可传播的产业协作。"
            eyebrow="发展方向"
            title="面向长期价值持续行动"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {ALLIANCE_DIRECTIONS.map(([title, description]) => (
              <article className="surface-card p-6 sm:p-7" key={title}>
                <h3 className="text-xl font-semibold text-[var(--alliance-text-title)]">{title}</h3>
                <p className="mt-4 leading-7 text-[var(--alliance-text-secondary)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--alliance-border)] bg-[var(--alliance-bg-surface)]">
        <div className="site-container grid gap-8 py-14 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--alliance-text-title)]">联系与参与</h2>
            <p className="mt-3 leading-7 text-[var(--alliance-text-secondary)]">
              正式联系信息将在发布前补充；机构伙伴可先了解联盟的生态共建方式。
            </p>
          </div>
          <Link className="button-primary" href="/join">
            查看生态共建方式
          </Link>
        </div>
      </section>
    </main>
  )
}
