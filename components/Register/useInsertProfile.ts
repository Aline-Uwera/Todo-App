import {
  useInsertProfileMutation,
  InsertProfileMutation,
  InsertProfileMutationVariables,
} from '@/src/generated/graphql'
import { client } from '@/utils/graphql-client'

export const useInsertProfile = () => {
    const { mutate} = useInsertProfileMutation<Error>(client, {
    onSuccess: (
      data: InsertProfileMutation,
      variables: InsertProfileMutationVariables,
      context: unknown
    ) => {},
  })

  return { mutate }
}

