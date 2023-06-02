import { object, string } from 'zod'

const registerSchema = object({
  name: string().min(3, { message: 'Name must have 3 or more characters' }),
  email: string(),
  password: string().min(6, {
    message: 'Password must have 6 or more characters',
  }),
})

export default registerSchema
