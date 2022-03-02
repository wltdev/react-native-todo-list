import { Model } from '@nozbe/watermelondb'
import { field, readonly, date } from '@nozbe/watermelondb/decorators'

export default class Todo extends Model {
  static table = 'todos'

  @field('title') title!: string
  @field('description') description?: string
  @readonly @date('created_at') createdAt!: string
}
