import { object, string } from 'zod'

const createTodoSchema = object({
  title: string().min(2, { message: 'Title is required' }),
  description: string().min(1, { message: 'description is required' }),
})

export default createTodoSchema
