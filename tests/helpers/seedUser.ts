import { getPayload } from 'payload'
import config from '../../src/payload.config.js'

export const testUser = {
  email: 'e2e-admin@zgcllm.invalid',
  password: 'zgcllm-test-only-password-2026',
}

function assertSafeTestDatabase(): void {
  const databaseUrl = process.env.DATABASE_URL
  const testDatabaseUrl = process.env.TEST_DATABASE_URL

  if (process.env.PAYLOAD_TEST_MODE !== 'true' || !databaseUrl || databaseUrl !== testDatabaseUrl) {
    throw new Error('Refusing to seed users outside the explicitly configured test database')
  }

  const parsedUrl = new URL(databaseUrl)
  const isLocalHost = ['127.0.0.1', 'localhost', 'postgres'].includes(parsedUrl.hostname)
  const isTestDatabase = parsedUrl.pathname.endsWith('_test')

  if (!isLocalHost || !isTestDatabase) {
    throw new Error('TEST_DATABASE_URL must target a local database whose name ends with _test')
  }
}

/**
 * Seeds a test user for e2e admin tests.
 */
export async function seedTestUser(): Promise<void> {
  assertSafeTestDatabase()
  const payload = await getPayload({ config })

  // Delete existing test user if any
  await payload.delete({
    collection: 'users',
    where: {
      email: {
        equals: testUser.email,
      },
    },
  })

  // Create fresh test user
  await payload.create({
    collection: 'users',
    data: testUser,
  })
}

/**
 * Cleans up test user after tests
 */
export async function cleanupTestUser(): Promise<void> {
  assertSafeTestDatabase()
  const payload = await getPayload({ config })

  await payload.delete({
    collection: 'users',
    where: {
      email: {
        equals: testUser.email,
      },
    },
  })
}
