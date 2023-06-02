'use client'
import * as Form from '@radix-ui/react-form'
import { useForm } from 'react-hook-form'
import { supabase } from '@/utils/client'
import { toast } from 'react-toastify'


interface FormData {
    email: string
}

const ResetPassword = () => {
    const {
      register,
      handleSubmit
  } = useForm<FormData>()
  

    const handleForgotPassword = async (formData: FormData) => {
      await supabase.auth.resetPasswordForEmail(formData.email, {
        redirectTo: process.env.NEXT_PUBLIC_RESET_LINK,
      })
        toast('Reset Password Email Sent, Check your email', {
          type: 'success',
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
        })
    }
  
  return (
    <div className="w-[400px] m-2 flex flex-col justify-center bg-[#f8fdfc] shadow-black  border-t-[8px] border-t-[#c8e6e3]">
      <div className="flex  justify-center pt-[20px]">
        <h1>Forgot Password</h1>
      </div>
      <Form.Root
        className="pt-[30px] px-[20px]"
        onSubmit={handleSubmit(handleForgotPassword)}
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
        <Form.Submit asChild>
          <button className="w-full h-8 bg-[#c8e6e3] hover:bg-slate-300 px-[15px] font-medium leading-none shadow-lg  mt-[30px] mb-[30px]">
            Send
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  )
}

export default ResetPassword
