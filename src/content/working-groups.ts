import type { WorkingGroupSummary } from '@/types/content'

export const WORKING_GROUPS: readonly WorkingGroupSummary[] = [
  {
    description: '连接专业用户、真实场景、深度任务与能力验证，推动多元基础模型在网络安全领域协同发展。',
    href: '/cybersecurity',
    id: 'cybersecurity-ecosystem',
    kind: 'initiative',
    title: '网络安全生态',
  },
] as const
