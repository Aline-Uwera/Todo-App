import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/client'
import { toast } from 'react-toastify'
import loginSchema from '@/validation/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'

interface FormData {
  email: string
  password: string
}
export const useLogin = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  })

  const handleLogin = async (formData: FormData) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      if (error) throw error
      
      if (data) {
        sessionStorage.setItem('session', JSON.stringify(data))
        router.push('/todos')
      }
      toast('Successfully logged in', {
        type: 'success',
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
      })
    } catch (error:any) {
      toast(error.message, {
        type: 'error',
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
      })
    }
    }
    return {handleLogin, handleSubmit, register, errors}
}
