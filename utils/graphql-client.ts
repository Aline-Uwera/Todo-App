import { GraphQLClient } from 'graphql-request'

const endpoint: string = process.env.NEXT_PUBLIC_HASURA || ''
const adminSecret: string | undefined =
  process.env.NEXT_PUBLIC_ADMIN_SECRET || ''

export const client = new GraphQLClient(endpoint, {
  headers: {
    'x-hasura-admin-secret': adminSecret,
  },
})
