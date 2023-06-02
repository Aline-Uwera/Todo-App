import {
  useUpdateTodoMutation,
  UpdateTodoMutation,
  UpdateTodoMutationVariables,
} from '@/src/generated/graphql'

import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { client } from '@/utils/graphql-client'
import { queryClient } from '@/utils/react-query-client'
import { TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import createTodoSchema from '@/validation/createTodoSchema'

interface User {
  id: string
}
type CreateTodoInput = TypeOf<typeof createTodoSchema>


export const useUpdateTask = (
  setShowAddTask: any,
  refetch: any,
  id: string,
  status: boolean
) => {
  const methods = useForm<CreateTodoInput>({
    resolver: zodResolver(createTodoSchema),
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods

  const { data, mutate, isLoading } = useUpdateTodoMutation<Error>(client, {
    onSuccess: (
      data: UpdateTodoMutation,
      variables: UpdateTodoMutationVariables,
      context: unknown
    ) => {
      refetch()
    },
  })

  const submit: SubmitHandler<Record<string, unknown>> = (data) => {
    mutate({
      title: data.title as string,
      description: data.description as string,
      is_completed: status,
      id: id,
    })
    if (errors !== null) {
      setTimeout(() => {
        setShowAddTask(false)
      }, 1000)
    }
  }
  useEffect(() => {
    if (data && data.update_todos_by_pk) {
      reset()
    }
  }, [data, reset])

  //     const { id, description, is_completed, title } = payload
  //   const handleUpdate = () => {
  //     mutate({ id, description, is_completed, title })
  //   }
  return { register, handleSubmit, isLoading, errors, submit, mutate }
}
