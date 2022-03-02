import { appSchema } from '@nozbe/watermelondb'

import { todos } from './tables'

const schema = appSchema({
  version: 2,
  tables: [todos]
})

export default schema
