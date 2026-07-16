import type { ParticipationPath } from '@/types/content'

export const CYBERSECURITY_ECOSYSTEM = {
  cycle: ['模型发布', '专业验证', '场景落地', '数据沉淀', '模型增强', '行业推广'],
  principles: ['厂商中立', '授权与脱敏', '风险分级', '专家复核', '监管协同'],
  roles: ['专业用户', '安全企业', '基础模型厂商', '高校与实验室', '行业客户', '生态运营伙伴'],
  summary:
    '面向不同基础模型和技术路线，连接专业用户、真实场景、深度任务、能力验证与产业落地，构建持续演进的网络安全生态。',
  title: '网络安全生态',
} as const

export const CYBERSECURITY_PARTICIPATION_PATHS: readonly ParticipationPath[] = [
  { description: '贡献经过授权与脱敏的数据结构、任务样例或评测集。', id: 'data', title: '数据与任务' },
  { description: '提供靶场、工具链、验证流程或可复现的专业环境。', id: 'environment', title: '环境与工具' },
  { description: '参与任务定义、结果判定、能力评测与专家复核。', id: 'expertise', title: '专家与评测' },
  { description: '开放真实业务需求，推动模型能力进入产品和行业流程。', id: 'scenario', title: '产品与场景' },
] as const

export const CYBERSECURITY_GOVERNANCE = [
  '不统一要求成员交付数据，不强制交付原始数据。',
  '数据、环境和成果须具有清晰授权，并按需要完成脱敏与分级。',
  '高风险能力、攻防成果与敏感任务遵循最小公开和专家复核原则。',
  '主动接受监管部门、行业专家与合作单位的指导。',
] as const
