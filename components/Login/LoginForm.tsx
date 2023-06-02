'use client'

import * as Form from '@radix-ui/react-form'
import Link from 'next/link'
import { useLogin } from './useLogin'

const LoginForm = () => {
  const { handleLogin, handleSubmit, register, errors } = useLogin()
  return (
    <div className="w-[600px] m-2 flex flex-col justify-center bg-[#f8fdfc] shadow-black  border-t-[8px] border-t-[#c8e6e3]">
      <div className="flex  justify-center pt-[20px]">
        <h1>Login</h1>
      </div>
      <Form.Root
        className="pt-[30px] px-[20px]"
        onSubmit={handleSubmit(handleLogin)}
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
          <div className="flex justify-end pt-2">
            <Link href={'/auth/forgot-password'} className="text-[#39d0bc] font-thin">
              Forgot password?
            </Link>
          </div>
        </Form.Field>
        <Form.Submit asChild>
          <button className="w-full h-8 bg-[#c8e6e3] hover:bg-slate-300 px-[15px] font-medium leading-none shadow-lg  mt-[10px] mb-[20px]">
            Login
          </button>
        </Form.Submit>
      </Form.Root>
      <div className="px-[20px] pb-[30px]">
        <p>
          Don&apos;t have account? &nbsp;
          <Link
            href={'/auth/register'}
            className="text-[#39d0bc] font-extrabold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
