import type { NewsEntry } from '@/types/content'

// 只发布已经联盟确认的公开内容，不使用示例新闻填充正式页面。
export const NEWS_ENTRIES: readonly NewsEntry[] = [
  {
    body: [
      {
        text: '即日起，中关村自主大模型产业联盟正式发起“网络安全人员开放计划”，面向可信安全伙伴受邀、受控开放自主大模型在网络安全场景中的能力。计划以合法授权、防御优先、过程可审计为原则，不面向公众开放，而是面向可信防御者提供受控访问机制。',
        type: 'paragraph',
      },
      {
        text: '联盟希望帮助可信安全伙伴在合法授权与防御优先的前提下，提升漏洞挖掘、代码审计、补丁验证、安全测试、代码修复与安全研发效率，让先进大模型能力真正服务于网络安全防御体系建设。由联盟成员模型厂商提供模型能力与技术支持，联盟伙伴负责使用场景合规、目标授权、结果复核与漏洞处置。',
        type: 'paragraph',
      },
      { text: '开放对象', type: 'heading' },
      {
        items: [
          '有关网络安全部门及相关支撑单位',
          '安全研究机构、重点实验室与高校安全团队',
          '网络安全企业、软件安全服务商与基础设施安全团队',
          '经联盟审核通过的安全研究人员与开源基础设施维护者',
        ],
        type: 'list',
      },
      { text: '伙伴权益', type: 'heading' },
      {
        items: [
          '自主大模型能力与企业级技术接入支持，含额度与并发保障、接入与场景适配',
          '联盟闭门交流、联合评测与场景共创机会',
          '优秀成果的联合发布与行业传播支持',
        ],
        type: 'list',
      },
      { text: '准入原则', type: 'heading' },
      {
        items: [
          '受邀与验证：提交防御性使用场景说明，经联盟审核通过后开放访问',
          '合法授权、防御优先：仅限用于授权场景，异常调用与疑似违规通过审计和访问控制治理',
          '人工复核：模型输出为专家辅助而非最终结论，须经人工复核与工程验证后方可用于生产处置或对外披露；漏洞遵循负责任披露流程',
        ],
        type: 'list',
      },
      {
        text: '有意参与的企业、机构或个人，可通过下方申请表提交申请与防御性使用场景说明。提交后进入人工审核流程，通常在 3 个工作日内完成审核，结果将通过邮箱通知。',
        type: 'paragraph',
      },
    ],
    category: 'news',
    ctaHref: 'https://clouditera.feishu.cn/share/base/form/shrcnXSRHvrWPehplPdvFuB0juc',
    ctaLabel: '填写申请',
    date: '2026-07-03',
    description:
      '中关村自主大模型产业联盟发起“网络安全人员开放计划”，面向可信防御者受控开放自主大模型在网络安全场景的能力，坚持合法授权、防御优先、过程可审计。',
    published: true,
    slug: 'cybersecurity-open-program',
    title: '联盟发起“网络安全人员开放计划”',
  },
  {
    body: [
      {
        text: '中关村自主大模型产业联盟官方网站正式上线。网站围绕联盟“汇聚自主大模型力量，共建开放、安全、协同的产业生态”的定位，集中呈现联盟介绍、工作组、网络安全生态、成员伙伴与最新动态等内容。',
        type: 'paragraph',
      },
      { text: '网站提供的内容', type: 'heading' },
      {
        items: [
          '联盟介绍与发展定位',
          '工作组与网络安全生态的重点方向',
          '面向机构的生态共建与合作入口',
          '联盟动态与阶段进展的持续发布',
        ],
        type: 'list',
      },
      {
        text: '联盟持续发布经确认可公开的信息，成员与阶段成果内容将在完成公开授权后陆续更新。',
        type: 'paragraph',
      },
      {
        text: '欢迎相关机构通过官网“机构合作申请”了解参与方式，与联盟共建自主大模型产业生态。',
        type: 'paragraph',
      },
    ],
    category: 'news',
    date: '2026-07-17',
    description:
      '中关村自主大模型产业联盟官方网站正式上线，集中呈现联盟定位、重点工作、网络安全生态与机构合作入口。',
    featured: true,
    published: true,
    slug: 'alliance-website-launch',
    title: '联盟官方网站正式上线',
  },
]

export function getPublishedNews(entries: readonly NewsEntry[] = NEWS_ENTRIES): readonly NewsEntry[] {
  return entries
    .filter((entry) => entry.published)
    .sort((left: NewsEntry, right: NewsEntry) => right.date.localeCompare(left.date))
}

export function getPublishedNewsBySlug(slug: string): NewsEntry | undefined {
  return getPublishedNews().find((entry) => entry.slug === slug)
}
