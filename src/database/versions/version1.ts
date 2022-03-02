import { createTable } from '@nozbe/watermelondb/Schema/migrations'

export const version1 = [
  createTable({
    name: 'todos',
    columns: [
      { name: 'title', type: 'string' },
      { name: 'description', type: 'string', isOptional: true },
      { name: 'created_at', type: 'number' },
      { name: 'updated_at', type: 'number' }
    ]
  })
]
