import { expect, test } from '@playwright/test'

test.describe('conversion and privacy pages', () => {
  test('institution and professional visitors see distinct participation routes', async ({ page }) => {
    await page.goto('/join')
    const institutionMain = page.getByRole('main')
    await expect(institutionMain.getByRole('heading', { level: 1, name: '机构生态共建' })).toBeVisible()
    await expect(institutionMain.getByRole('heading', { level: 2, name: '参与流程' })).toBeVisible()
    await expect(institutionMain).toContainText('申请通道准备中，请通过官网联系方式与联盟联系。')

    await page.goto('/professionals')
    const professionalMain = page.getByRole('main')
    await expect(professionalMain.getByRole('heading', { level: 1, name: '专业用户加入' })).toBeVisible()
    await expect(professionalMain.getByRole('heading', { level: 2, name: '适用人群' })).toBeVisible()
    await expect(professionalMain).toContainText('申请通道准备中，请通过官网联系方式与联盟联系。')
  })

  test('privacy page explains the external service boundary', async ({ page }) => {
    await page.goto('/privacy')

    const main = page.getByRole('main')
    await expect(main.getByRole('heading', { level: 1, name: '隐私说明' })).toBeVisible()
    await expect(main).toContainText('官网不接收、代理或存储申请数据')
    await expect(main).toContainText('飞书表单为外部服务')
    await expect(main).toContainText('以表单内的隐私告知为准')
  })
})
