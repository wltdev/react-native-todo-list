import database from '../index.native'

export type TODO = {
  title: string
  description: string | undefined
  destroyPermanently: () => void
}

const todosTable = database.get('todos')

export const observeTodos = () => todosTable.query().observe()

export const saveTodo = async ({ title, description }: TODO) => {
  await database.write(async () => {
    await todosTable.create(({ entry: TODO }) => {
      entry.title = title
      entry.description = description
    })
  })
}

export const removeTodo = async (todo: TODO) => {
  await database.write(async () => {
    todo.destroyPermanently()
  })
}
