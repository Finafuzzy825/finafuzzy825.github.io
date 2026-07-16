import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactElement } from 'react'

import { SectionHeading } from '@/components/site/section-heading'
import { HOME_DIRECTIONS, HOME_VALUE_PROPOSITIONS } from '@/content/home'
import { MEMBERS } from '@/content/members'
import { getPublishedNews } from '@/content/news'
import { SITE_NAME } from '@/config/site'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  description: '汇聚自主大模型产业力量，连接技术、场景、人才与生态资源，面向机构伙伴开展生态共建。',
  title: { absolute: `首页｜${SITE_NAME}` },
}

export default function HomePage(): ReactElement {
  const publishedNews = getPublishedNews()

  return (
    <main id="main-content">
      <section className="relative isolate overflow-hidden bg-[var(--alliance-bg-hero)] text-white">
        <div
          aria-hidden="true"
          className="absolute -right-48 -top-56 size-[38rem] rounded-full bg-[var(--alliance-accent)]/20 blur-3xl"
        />
        <div className="site-container relative grid gap-14 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-32">
          <div>
            <p className="eyebrow text-[var(--alliance-accent-soft)]">{SITE_NAME}</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
              汇聚自主大模型产业力量，连接开放协作生态
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--alliance-text-inverse-muted)] sm:text-lg">
              连接基础模型厂商、科研机构、产业伙伴与专业用户，围绕真实场景推动联合创新、能力验证与产业落地。
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link className="button-primary" href="/join">
                申请生态共建
              </Link>
              <Link className="button-secondary" href="/professionals">
                专业用户加入
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[var(--alliance-accent-soft)]">联盟定位</p>
              <p className="mt-3 text-lg leading-8 text-white">
                面向自主大模型产业的开放协作与生态连接平台
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[var(--alliance-accent-soft)]">重点行动</p>
              <p className="mt-3 text-lg leading-8 text-white">
                组织联合研究、场景共建、能力验证与成果交流
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-16 sm:py-20 lg:py-24">
        <SectionHeading
          description="以开放连接形成协作网络，以真实需求组织联合创新，以可验证实践推动成果落地。"
          eyebrow="联盟价值"
          title="让产业力量更好地协同"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {HOME_VALUE_PROPOSITIONS.map((item, index) => (
            <article className="surface-card p-6 sm:p-7" key={item.id}>
              <p className="text-sm font-semibold text-[var(--alliance-brand-primary)]">
                0{index + 1}
              </p>
              <h3 className="mt-5 text-xl font-semibold text-[var(--alliance-text-title)]">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-[var(--alliance-text-secondary)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--alliance-bg-subtle)]">
        <div className="site-container grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:py-24">
          <SectionHeading
            description="从技术协同到行业实践，持续连接可参与、可验证、可分享的产业议题。"
            eyebrow="重点方向"
            title="围绕产业共同需求展开协作"
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {HOME_DIRECTIONS.map((direction, index) => (
              <li className="surface-card flex min-h-28 items-start gap-4 p-5" key={direction}>
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-lg bg-[var(--alliance-brand-primary)] text-sm font-semibold text-white"
                >
                  {index + 1}
                </span>
                <span className="pt-1 font-semibold leading-7 text-[var(--alliance-text-title)]">
                  {direction}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="overflow-hidden rounded-3xl bg-[var(--alliance-brand-ink)] px-6 py-10 text-white sm:px-10 sm:py-12 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:px-14">
          <div>
            <p className="eyebrow text-[var(--alliance-accent-soft)]">重点专项</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">网络安全生态</h2>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--alliance-text-inverse-muted)]">
              连接专业用户、真实场景、深度任务与能力验证，推动不同基础模型厂商、科研机构和产业伙伴共同参与网络安全生态建设。
            </p>
          </div>
          <Link className="button-primary mt-8 shrink-0 lg:mt-0" href="/cybersecurity">
            了解网络安全生态
          </Link>
        </div>
      </section>

      <section className="bg-[var(--alliance-bg-subtle)]">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              description="仅展示已经确认公开授权的成员信息，不使用示例名称或标识代替。"
              eyebrow="生态伙伴"
              title="连接多元产业力量"
            />
            <Link className="text-link shrink-0" href="/members">
              查看成员伙伴
            </Link>
          </div>
          {MEMBERS.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {MEMBERS.slice(0, 4).map((member) => (
                <article className="surface-card p-6" key={member.id}>
                  <h3 className="font-semibold text-[var(--alliance-text-title)]">{member.name}</h3>
                  {member.description ? (
                    <p className="mt-3 leading-7 text-[var(--alliance-text-secondary)]">
                      {member.description}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          ) : (
            <div className="surface-card mt-10 p-7 sm:p-9">
              <h3 className="text-xl font-semibold text-[var(--alliance-text-title)]">
                成员信息整理中
              </h3>
              <p className="mt-3 leading-7 text-[var(--alliance-text-secondary)]">
                联盟将在完成公开授权确认后发布成员信息。
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="site-container py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            description="发布联盟动态、活动通知、行业观察与经确认的阶段成果。"
            eyebrow="最新动态"
            title="关注联盟进展"
          />
          <Link className="text-link shrink-0" href="/news">
            查看新闻动态
          </Link>
        </div>
        {publishedNews.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {publishedNews.slice(0, 3).map((entry) => (
              <article className="surface-card p-6" key={entry.slug}>
                <p className="text-sm text-[var(--alliance-text-secondary)]">{entry.date}</p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--alliance-text-title)]">
                  <Link href={`/news/${entry.slug}`}>{entry.title}</Link>
                </h3>
                <p className="mt-3 leading-7 text-[var(--alliance-text-secondary)]">
                  {entry.description}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="surface-card mt-10 p-7 sm:p-9">
            <h3 className="text-xl font-semibold text-[var(--alliance-text-title)]">
              最新动态即将发布
            </h3>
            <p className="mt-3 leading-7 text-[var(--alliance-text-secondary)]">
              经联盟确认的新闻、活动与成果将在这里持续更新。
            </p>
          </div>
        )}
      </section>

      <section className="border-t border-[var(--alliance-border)] bg-[var(--alliance-bg-surface)]">
        <div className="site-container flex flex-col gap-7 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--alliance-text-title)]">
              共建自主大模型产业生态
            </h2>
            <p className="mt-3 leading-7 text-[var(--alliance-text-secondary)]">
              了解联盟参与方式，选择适合机构或专业用户的参与路径。
            </p>
          </div>
          <Link className="button-primary shrink-0" href="/join">
            了解生态共建
          </Link>
        </div>
      </section>
    </main>
  )
}
