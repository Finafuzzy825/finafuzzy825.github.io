import type { WorkingGroupSummary } from '@/types/content'

export const WORKING_GROUPS: readonly WorkingGroupSummary[] = [
  {
    description:
      '联盟下设的网络安全工作组，连接专业用户、真实场景、深度任务与能力验证，持续推进安全大模型与网络安全智能体建设。',
    ecosystemHref: '/cybersecurity',
    ecosystemLabel: '网络安全生态 · 重点专项',
    id: 'cybersecurity',
    kind: 'working-group',
    leads: [
      { name: '中关村自主大模型产业联盟', named: true, role: '统筹' },
      { name: '智谱', named: true, role: '模型与技术牵引' },
      { name: '清华大学', named: true, role: '学术指导' },
      { name: '数说安全 · 云起无垠', named: true, role: '联合运营' },
      {
        name: '安全企业 / 高校 / 实验室 / 专业研究人员（按角色参与）',
        named: false,
        role: '生态伙伴',
      },
    ],
    outcomes: [],
    responsibilities: [
      '统筹网络安全大模型与智能体重点专项，明确阶段目标与推进节奏',
      '组织先锋验证与发布机制，衔接模型能力测试、专业传播与场景落地',
      '沉淀深度数据与任务体系，推动真实攻防、赛事与靶场资源持续汇入',
      '推动阶段性成果的对外发布与产业推广',
    ],
    researchDirections: ['安全大模型', '网络安全智能体', '深度数据与任务体系', '能力评测与动态靶场'],
    slug: 'cybersecurity',
    title: '网络安全工作组',
  },
] as const

export function getWorkingGroupSlugs(): string[] {
  return WORKING_GROUPS.map(({ slug }) => slug)
}

export function getWorkingGroupBySlug(slug: string): WorkingGroupSummary | undefined {
  return WORKING_GROUPS.find((group) => group.slug === slug)
}
