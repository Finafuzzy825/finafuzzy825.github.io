import type { MemberSummary } from '@/types/content'

// 来源：中关村自主大模型产业联盟第一次会员大会公示（zhipuai.cn/zh/news/97）。
// 联盟共 32 家单位会员，此处仅收录已公开具名的理事会与监事会成员单位；
// 其余会员单位在获得公开授权后再补充，未授权前不以名单填充页面。
// 治理角色（理事长/秘书长/监事长等）写入 description；type 按机构性质映射
// （高校/科研院所→research，企业→institution）。品牌标识须获授权后再加。
export const MEMBERS: readonly MemberSummary[] = [
  // 理事会成员
  {
    description: '理事长单位（理事长：计算机科学与技术系教授唐杰）。',
    id: 'tsinghua',
    name: '清华大学',
    type: 'research',
  },
  {
    description: '理事单位。',
    id: 'baai',
    name: '北京智源人工智能研究院',
    type: 'research',
  },
  {
    description: '理事单位。',
    id: 'ict-cas',
    name: '中国科学院计算技术研究所',
    type: 'research',
  },
  {
    description: '秘书长单位（秘书长、法定代表人：刘德兵）。',
    id: 'zhipu',
    name: '北京智谱华章科技股份有限公司',
    type: 'institution',
  },
  {
    description: '理事单位。',
    id: 'didi',
    name: '北京嘀嘀无限科技发展有限公司',
    type: 'institution',
  },
  {
    description: '理事单位。',
    id: 'jingneng-digital',
    name: '京能数字产业有限公司',
    type: 'institution',
  },
  {
    description: '理事单位。',
    id: 'moore-threads',
    name: '摩尔线程智能科技（北京）股份有限公司',
    type: 'institution',
  },
  // 监事会成员
  {
    description: '监事长单位（监事长：陈健）。',
    id: 'paratera',
    name: '北京并行科技股份有限公司',
    type: 'institution',
  },
  {
    description: '监事单位。',
    id: 'shengshu',
    name: '北京生数科技有限公司',
    type: 'institution',
  },
  {
    description: '监事单位。',
    id: 'caizhi',
    name: '北京彩智科技有限公司',
    type: 'institution',
  },
] as const
