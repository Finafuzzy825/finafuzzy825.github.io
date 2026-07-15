import { config } from 'dotenv'

config({ path: 'test.env', override: true })

if (process.env.TEST_DATABASE_URL) {
  process.env.DATABASE_URL = process.env.TEST_DATABASE_URL
}
