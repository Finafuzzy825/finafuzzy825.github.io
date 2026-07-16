import type { ValueProposition } from '@/types/content'

export const ALLIANCE_MISSION =
  '汇聚自主大模型产业创新力量，促进技术、场景、人才与生态资源协同，推动可信、开放、可持续的产业发展。'

export const ALLIANCE_VALUES: readonly ValueProposition[] = [
  {
    description: '尊重不同技术路线与参与方式，以开放合作扩大产业共同价值。',
    id: 'open',
    title: '开放协同',
  },
  {
    description: '从真实需求出发，以可验证成果衡量研究与共建价值。',
    id: 'practical',
    title: '务实创新',
  },
  {
    description: '重视安全、合规、授权与责任边界，推动产业健康发展。',
    id: 'responsible',
    title: '可信负责',
  },
] as const

export const ALLIANCE_MECHANISM = [
  '联盟统筹重点方向与生态合作机制',
  '工作组和专项围绕具体议题持续推进',
  '成员伙伴按能力与意愿参与联合项目',
  '阶段成果通过活动、报告与案例公开发布',
] as const

export const ALLIANCE_DIRECTIONS = [
  ['技术与产业协同', '连接不同技术路线与产业需求，促进基础模型能力和工程实践交流。'],
  ['重点场景共建', '围绕真实行业问题组织需求梳理、联合验证与可复用经验沉淀。'],
  ['标准与可信治理', '推动能力评测、合规治理、安全边界与行业共识研究。'],
  ['人才与成果交流', '通过公开活动、专题研究和成果传播连接专业人才与生态伙伴。'],
] as const
