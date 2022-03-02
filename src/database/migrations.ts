import { schemaMigrations } from '@nozbe/watermelondb/Schema/migrations'

import { version1 } from './versions'

export default schemaMigrations({
  migrations: [
    {
      // ⚠️ Set this to a number one larger than the current schema version
      toVersion: 2,
      steps: [...version1]
    }
  ]
})
