'use client'
import * as Form from '@radix-ui/react-form'
import Link from 'next/link'
import { useSignup } from './useSignup'

const SignupForm = () => {
  const {handleSignup, handleSubmit, register, errors} = useSignup()
 
  return (
    <div className="w-[600px] m-2 flex flex-col justify-center bg-[#f8fdfc] shadow-black  border-t-[8px] border-t-[#c8e6e3]">
      <div className="flex  justify-center pt-[20px]">
        <h1>Register Here!</h1>
      </div>
      <Form.Root
        onSubmit={handleSubmit(handleSignup)}
        className="pt-[30px] px-[20px]"
      >
        <Form.Field className="grid mb-[10px]" name="name">
          <div className="flex items-baseline justify-between">
            <Form.Label className=" font-medium leading-[35px] text-black">
              Name
            </Form.Label>
            <Form.Message
              className="text-[13px] text-red opacity-[0.8]"
              match="valueMissing"
            >
              Enter your Name
            </Form.Message>
            <Form.Message
              className="text-[13px] text-black opacity-[0.8]"
              match="typeMismatch"
            >
              Please provide your name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="text"
              placeholder="Your Name"
              {...register('name')}
              className="border border-gray-300 w-full m-auto h-8"
              required
            />
          </Form.Control>
          <p
            className={`text-red-500 text-xs italic mb-2 ${
              errors.name ? 'visible' : 'hidden'
            }`}
          >
            {errors.name ? errors.name.message : ''}
          </p>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="email">
          <div className="flex items-baseline justify-between">
            <Form.Label className=" font-medium leading-[35px] text-black">
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
              className="border w-full m-auto h-8 border-gray-300"
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
              className=" border w-full m-auto h-8 border-gray-300"
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
          <button className="w-full h-8 bg-[#c8e6e3] hover:bg-slate-300 px-[15px] font-medium leading-none shadow-lg  mt-[30px] mb-[20px]">
            Register
          </button>
        </Form.Submit>
      </Form.Root>
      <div className="px-[20px] pb-[30px]">
        <p>
          Have account &nbsp;
          <Link href={'/auth/login'} className="text-[#39d0bc] font-extrabold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignupForm
