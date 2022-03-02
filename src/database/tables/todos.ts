import { tableSchema } from '@nozbe/watermelondb'

export default tableSchema({
  name: 'todos',
  columns: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'string', isOptional: true },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' }
  ]
})
