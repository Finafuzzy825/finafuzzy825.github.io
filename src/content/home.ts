import type { ValueProposition } from '@/types/content'

export const HOME_VALUE_PROPOSITIONS: readonly ValueProposition[] = [
  {
    description: '连接基础模型厂商、科研机构、产业伙伴与专业用户，形成开放协作网络。',
    id: 'connect',
    title: '连接产业力量',
  },
  {
    description: '围绕真实场景组织联合研究、能力验证、标准探索与成果发布。',
    id: 'collaborate',
    title: '推动联合创新',
  },
  {
    description: '以可验证、可复制的实践促进自主大模型在重点行业持续落地。',
    id: 'deliver',
    title: '促进产业落地',
  },
] as const

export const HOME_DIRECTIONS = [
  '基础模型技术与产业协同',
  '重点行业场景共建',
  '能力验证与标准研究',
  '人才、活动与成果交流',
] as const
