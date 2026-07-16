import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import type { ReactElement } from 'react'

import { PageHero } from '@/components/site/page-hero'
import { SectionHeading } from '@/components/site/section-heading'
import { MEMBERS } from '@/content/members'
import type { MemberSummary } from '@/types/content'

export const metadata: Metadata = {
  alternates: { canonical: '/members' },
  description: '按公开授权范围展示联盟成员与生态伙伴，连接产业、科研与生态协作力量。',
  title: '成员伙伴',
}

const MEMBER_GROUPS: readonly {
  description: string
  label: string
  type: MemberSummary['type']
}[] = [
  { description: '参与联盟发起与长期建设的成员单位。', label: '发起成员', type: 'founding' },
  { description: '参与产业协作与场景共建的机构成员。', label: '机构成员', type: 'institution' },
  { description: '参与研究、人才与技术交流的科研伙伴。', label: '科研伙伴', type: 'research' },
  { description: '共同连接技术、服务与产业资源的生态伙伴。', label: '生态伙伴', type: 'ecosystem' },
] as const

interface MembersDirectoryProps {
  members: readonly MemberSummary[]
}

export function MembersDirectory({ members }: MembersDirectoryProps): ReactElement {
  if (members.length === 0) {
    return (
      <div className="surface-card px-6 py-12 text-center sm:px-10">
        <h2 className="text-2xl font-semibold text-[var(--alliance-text-title)]">
          成员信息整理中
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-[var(--alliance-text-secondary)]">
          成员名称与品牌标识将在完成公开授权确认后发布。我们不会使用未获授权的名单或标识填充页面。
        </p>
        <Link className="button-primary mt-8" href="/join">
          了解生态共建
        </Link>
      </div>
    )
  }

  return (
    <div className="grid gap-14">
      {MEMBER_GROUPS.map((group) => {
        const groupMembers = members.filter((member) => member.type === group.type)

        if (groupMembers.length === 0) return null

        return (
          <section key={group.type}>
            <SectionHeading description={group.description} title={group.label} />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {groupMembers.map((member) => (
                <article className="surface-card min-w-0 p-6" key={member.id}>
                  {member.logo ? (
                    <div className="mb-5 flex min-h-20 items-center justify-center rounded-xl bg-[var(--alliance-bg-subtle)] p-4">
                      <Image
                        alt={`${member.name}标识`}
                        className="max-h-14 w-auto object-contain"
                        height={56}
                        src={member.logo}
                        width={180}
                      />
                    </div>
                  ) : null}
                  <h3 className="text-lg font-semibold text-[var(--alliance-text-title)]">
                    {member.name}
                  </h3>
                  {member.description ? (
                    <p className="mt-3 leading-7 text-[var(--alliance-text-secondary)]">
                      {member.description}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default function MembersPage(): ReactElement {
  return (
    <main id="main-content">
      <PageHero
        description="在获得公开授权的前提下，展示参与联盟建设的产业、科研与生态协作力量。"
        eyebrow="MEMBERS & PARTNERS"
        title="成员伙伴"
      />
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <MembersDirectory members={MEMBERS} />
      </div>
    </main>
  )
}
