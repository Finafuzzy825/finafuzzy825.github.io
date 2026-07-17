import {
  APPLICATION_TARGETS,
  isSafeExternalUrl,
  PUBLIC_STATIC_ROUTES,
  resolveApplicationTarget,
  resolveSiteUrl,
  SITE_NAME,
  SITE_NAVIGATION,
} from '@/config/site'
import { describe, expect, it } from 'vitest'

describe('site configuration', () => {
  it('uses the alliance brand and canonical production domain', () => {
    expect(SITE_NAME).toBe('中关村自主大模型产业联盟')
    expect(resolveSiteUrl()).toBe('https://www.zgc-llm.org.cn')
    expect(resolveSiteUrl('http://localhost:3000')).toBe('http://localhost:3000')
    expect(resolveSiteUrl('not-a-url')).toBe('https://www.zgc-llm.org.cn')
    expect(resolveSiteUrl('javascript:alert(1)')).toBe('https://www.zgc-llm.org.cn')
  })

  it('defines unique public navigation destinations', () => {
    const destinations = SITE_NAVIGATION.map(({ href }) => href)

    expect(destinations).toContain('/cybersecurity')
    expect(new Set(destinations).size).toBe(destinations.length)
    expect(PUBLIC_STATIC_ROUTES).toContain('/privacy')
    expect(PUBLIC_STATIC_ROUTES).not.toContain('/admin')
    expect(PUBLIC_STATIC_ROUTES).not.toContain('/professionals')
  })

  it('derives working-group sub-routes from WORKING_GROUPS', () => {
    expect(PUBLIC_STATIC_ROUTES).toContain('/working-groups/cybersecurity')
    expect(PUBLIC_STATIC_ROUTES).toContain('/working-groups/cybersecurity/members')
    expect(PUBLIC_STATIC_ROUTES).toContain('/working-groups/cybersecurity/join')
  })

  it('keeps institution and reintroduces professional as application targets', () => {
    expect(APPLICATION_TARGETS.institution.internalHref).toBe('/join')
    expect(APPLICATION_TARGETS.institution.label).toBe('机构合作申请')
    expect(APPLICATION_TARGETS.professional.href).toBe(
      process.env.NEXT_PUBLIC_PROFESSIONAL_APPLICATION_URL,
    )
    expect(APPLICATION_TARGETS.professional.internalHref).toBe('/working-groups/cybersecurity/join')
    expect(APPLICATION_TARGETS.professional.label).toBe('专业用户申请')
  })

  it.each([
    ['https://example.feishu.cn/share/base/form/example', true],
    ['http://example.feishu.cn/share/base/form/example', false],
    ['javascript:alert(1)', false],
    ['data:text/html,unsafe', false],
    ['', false],
    [undefined, false],
  ])('validates external application URL %s', (value, expected) => {
    expect(isSafeExternalUrl(value)).toBe(expected)
  })

  it('returns an unavailable state for a missing application URL', () => {
    const target = resolveApplicationTarget('institution', undefined)

    expect(target.href).toBeUndefined()
    expect(target.isAvailable).toBe(false)
    expect(target.unavailableMessage).toContain('联系')
  })
})
