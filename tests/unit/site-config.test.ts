import { CORE_MODULES, resolveSiteUrl, SITE_NAME } from '@/config/site'
import { describe, expect, it } from 'vitest'

describe('site configuration', () => {
  it('uses the alliance brand and canonical production domain', () => {
    expect(SITE_NAME).toBe('中关村自主大模型产业联盟')
    expect(resolveSiteUrl()).toBe('https://www.zgcllm.org.cn')
    expect(resolveSiteUrl('http://localhost:3000')).toBe('http://localhost:3000')
  })

  it('defines the six agreed website modules with unique slugs', () => {
    expect(CORE_MODULES).toHaveLength(6)
    expect(new Set(CORE_MODULES.map(({ slug }) => slug)).size).toBe(CORE_MODULES.length)
  })
})
