'use client'
import * as Form from '@radix-ui/react-form'
import { useForm } from 'react-hook-form'
import { supabase } from '@/utils/client'
import loginSchema from '@/validation/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

interface FormData {
  email: string
  password: string
}

const UpdatePassword = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  })

  const handleUpdatePassword = async (formData: FormData) => {
     await supabase.auth.updateUser({
      email: formData.email,
      password: formData.password,
    })
    toast('Password Reset Successfully!', {
      type: 'success',
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
    })
    router.push('/auth/login')
  }

  return (
    <div className="w-[600px] m-2 flex flex-col justify-center bg-[#f8fdfc] shadow-black  border-t-[8px] border-t-[#c8e6e3]">
      <div className="flex  justify-center pt-[20px]">
        <h1>Password Reset</h1>
      </div>
      <Form.Root
        className="pt-[30px] px-[20px]"
        onSubmit={handleSubmit(handleUpdatePassword)}
      >
        <Form.Field className="grid mb-[10px]" name="email">
          <div className="flex items-baseline justify-between">
            <Form.Label className="font-medium leading-[35px] text-black">
              Email
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="valueMissing"
            >
              Enter your email
            </Form.Message>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="typeMismatch"
            >
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="email"
              placeholder="Your email"
              {...register('email')}
              className="border border-gray-300 w-full m-auto h-8"
              required
            />
          </Form.Control>
          <p
            className={`text-red-500 text-xs italic mb-2 ${
              errors.email ? 'visible' : 'hidden'
            }`}
          >
            {errors.email ? errors.email.message : ''}
          </p>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="password">
          <div className="flex items-baseline justify-between">
            <Form.Label className="font-medium leading-[35px] text-black">
              Password
            </Form.Label>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="valueMissing"
            >
              Enter Password
            </Form.Message>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="typeMismatch"
            >
              Please provide a valid password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="password"
              placeholder="Your password"
              {...register('password')}
              className="border border-gray-300 w-full m-auto h-8"
              required
            />
          </Form.Control>
          <p
            className={`text-red-500 text-xs italic mb-2 ${
              errors.password ? 'visible' : 'hidden'
            }`}
          >
            {errors.password ? errors.password.message : ''}
          </p>
        </Form.Field>
        <Form.Submit asChild>
          <button className="w-full h-8 bg-[#c8e6e3] hover:bg-slate-300 px-[15px] font-medium leading-none shadow-lg  mt-[30px] mb-[30px]">
            Reset Password
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  )
}

export default UpdatePassword
