import {
  useClearCompletedMutation,
  ClearCompletedMutation,
  ClearCompletedMutationVariables,
} from '@/src/generated/graphql'
import { client } from '@/utils/graphql-client'
import { queryClient } from '@/utils/react-query-client'

export const useClearCompletedTasks = (refetch:any) => {
  const { mutate, isLoading } = useClearCompletedMutation<Error>(client, {
    onSuccess: (
      data: ClearCompletedMutation,
      variables: ClearCompletedMutationVariables,
      context: unknown
    ) => {
      queryClient.invalidateQueries(['tasks'])
      refetch()
    },
  })
  const handleDelete = () => {
    mutate({})
  }
    return {handleDelete, isLoading}
}
