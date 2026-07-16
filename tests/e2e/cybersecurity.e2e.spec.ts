import { expect, test } from '@playwright/test'

const ecosystemCycle = [
  '模型发布',
  '专业验证',
  '场景落地',
  '数据沉淀',
  '模型增强',
  '行业推广',
] as const

test.describe('网络安全生态专题', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/cybersecurity')
  })

  test('呈现独立专题 metadata 和六阶段闭环', async ({ page }) => {
    await expect(page).toHaveTitle(/网络安全生态/)
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /专业用户.*场景.*产业/,
    )

    const main = page.locator('main#main-content')
    await expect(main.getByRole('heading', { level: 1, name: '网络安全生态' })).toBeVisible()

    const cycle = main.getByTestId('ecosystem-cycle')
    await expect(cycle.getByRole('listitem')).toHaveCount(6)
    await expect(cycle.getByRole('listitem')).toHaveText(
      ecosystemCycle.map((stage, index) => `${String(index + 1).padStart(2, '0')}${stage}`),
    )
  })

  test('说明参与角色、共建方向与治理边界', async ({ page }) => {
    const main = page.locator('main#main-content')

    await expect(main.getByRole('heading', { name: '参与角色' })).toBeVisible()
    await expect(main.getByText('联盟', { exact: true })).toBeVisible()
    await expect(main.getByText('基础模型厂商', { exact: true })).toBeVisible()
    await expect(main.getByText('高校与实验室', { exact: true })).toBeVisible()

    await expect(main.getByRole('heading', { name: '共建方向' })).toBeVisible()
    await expect(main.getByRole('heading', { level: 3, name: '数据与任务' })).toBeVisible()
    await expect(main.getByRole('heading', { level: 3, name: '环境与工具' })).toBeVisible()
    await expect(main.getByRole('heading', { level: 3, name: '专家与评测' })).toBeVisible()
    await expect(main.getByRole('heading', { level: 3, name: '产品与场景' })).toBeVisible()

    await expect(main.getByRole('heading', { name: '治理边界' })).toBeVisible()
    await expect(main.getByText('不强制交付原始数据。', { exact: false })).toBeVisible()
    await expect(main.getByText('最小公开和专家复核原则', { exact: false })).toBeVisible()
  })

  test('保持厂商中立并提供主次参与入口', async ({ page }) => {
    const main = page.locator('main#main-content')

    await expect(
      main.getByText('欢迎不同基础模型厂商与技术生态参与', { exact: false }),
    ).toBeVisible()
    await expect(main.getByText('厂商中立', { exact: true })).toBeVisible()

    const institutionCta = main.getByRole('link', { name: '申请生态共建' }).last()
    const professionalCta = main.getByRole('link', { name: '专业用户加入' }).last()

    await expect(institutionCta).toHaveAttribute('href', '/join')
    await expect(institutionCta).toHaveClass(/button-primary/)
    await expect(professionalCta).toHaveAttribute('href', '/professionals')
    await expect(professionalCta).toHaveClass(/button-secondary/)
  })
})
