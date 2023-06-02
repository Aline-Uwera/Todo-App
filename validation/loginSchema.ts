import { object, string } from 'zod'

const loginSchema = object({
  email: string(),
  password: string().min(4, { message: 'Password must have 4 or more characters' }),
})

export default loginSchema
