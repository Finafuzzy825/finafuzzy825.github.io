import type { ValueProposition } from '@/types/content'

export const HOME_VALUE_PROPOSITIONS: readonly ValueProposition[] = [
  {
    description: '连接模型、芯片、算力、数据、平台及行业应用力量，形成开放协作网络。',
    id: 'open',
    title: '开放协作',
  },
  {
    description: '围绕安全大模型、网络安全智能体、能力评测与治理，构建自主可控、可信可靠的安全能力体系。',
    id: 'trustworthy',
    title: '安全可信',
  },
  {
    description: '推动产业链上下游协同，围绕真实场景推进联合创新与产业落地。',
    id: 'synergy',
    title: '产业协同',
  },
] as const

export const HOME_DIRECTIONS = [
  '自主大模型核心技术创新',
  '产业链上下游协同发展',
  '行业场景与高质量数据共建',
  '模型与智能体联合评测',
  '安全大模型与可信智能体建设',
  '人工智能企业国际化发展',
] as const

export const HOME_ACTION_SLOGANS = [
  '从技术创新走向产业协同',
  '从模型能力走向真实场景',
  '从安全大模型走向可信应用',
  '从本土生态走向全球合作',
] as const
