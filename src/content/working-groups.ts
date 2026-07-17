import type { WorkingGroupSummary } from '@/types/content'

export const WORKING_GROUPS: readonly WorkingGroupSummary[] = [
  {
    description: '联盟下设的网络安全工作组，连接专业用户、真实场景、深度任务与能力验证，依托工作组持续推进安全大模型与网络安全智能体的重点项目。',
    href: '/cybersecurity',
    id: 'cybersecurity-ecosystem',
    kind: 'working-group',
    title: '网络安全生态',
  },
] as const
