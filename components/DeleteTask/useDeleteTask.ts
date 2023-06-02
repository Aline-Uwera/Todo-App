import {
  useDeleteTodoMutation,
  DeleteTodoMutation,
  DeleteTodoMutationVariables,
} from '@/src/generated/graphql'
import { client } from '@/utils/graphql-client'

export const useDeleteTask = (refetch: any, id: string) => {
  const { mutate, isLoading } = useDeleteTodoMutation<Error>(client, {
    onSuccess: (
      data: DeleteTodoMutation,
      variables: DeleteTodoMutationVariables,
      context: unknown
    ) => {
      refetch()
    },
  })
  const handleDelete = () => {
    mutate({ id })
  }
  return { handleDelete, isLoading }
}
