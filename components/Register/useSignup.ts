import { useForm } from 'react-hook-form'
import { supabase } from '@/utils/client'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import registerSchema from '@/validation/registerValidation'
import { useInsertProfile } from './useInsertProfile'
interface FormData {
  name: string
  email: string
  password: string
}

export const useSignup = () => {
  const router = useRouter()
  const { mutate } = useInsertProfile()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  })

  const handleSignup = async (formData: FormData) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
          },
        },
      })

      if (error) throw error
      if (!error && data.user?.identities?.length !== 0) {
        mutate({
          id: data.user?.id,
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
        toast('Check your email for verification', {
          type: 'success',
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
        })
        router.push('/auth/login')
      } else {
        throw new Error('User already exists') 
      }
    } catch (error: any) {
      toast(error.message, {
        type: 'error',
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
      })
    }
  }
  return { handleSignup, handleSubmit, register, errors }
}
