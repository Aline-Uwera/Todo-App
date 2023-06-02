import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  useCreateTodoMutation,
  CreateTodoMutation,
  CreateTodoMutationVariables,
} from '../../src/generated/graphql'
import { client } from '@/utils/graphql-client'
import { queryClient } from '@/utils/react-query-client'
import { TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import createTodoSchema from '@/validation/createTodoSchema'

interface User {
  id: string
}
type CreateTodoInput = TypeOf<typeof createTodoSchema>

export const useAddTask = (setShowAddTask: any, refetch: any, user: User) => {
  const methods = useForm<CreateTodoInput>({
    resolver: zodResolver(createTodoSchema),
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods

  const { mutate, isLoading, data } = useCreateTodoMutation<Error>(client, {
    onSuccess: (
      data: CreateTodoMutation,
      variables: CreateTodoMutationVariables,
      context: unknown
    ) => {
      queryClient.invalidateQueries(['getTodos'])
      refetch()
    },
  })

  const submit: SubmitHandler<Record<string, unknown>> = (data) => {
    mutate({
      title: data.title as string,
      description: data.description as string,
      is_completed: false,
      user_id: user ? user.id : '',
    })
    if (errors!== null) {
      setTimeout(() => {
        setShowAddTask(false)
      }, 1000)
    }
  }

  useEffect(() => {
    if (data && data.insert_todos_one) {
      reset()
    }
  }, [data, reset])

  return { register, handleSubmit, errors, submit, isLoading, mutate }
}
