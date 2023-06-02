'use client'

import { useEffect } from 'react'
import { client } from '@/utils/graphql-client'
import {
  useGetActiveTodoQuery,
  GetActiveTodoQuery,
} from '@/src/generated/graphql'
import TaskList from '@/components/TaskList'
import PageLoading from '../../../components/PageLoader'
import { getUserInfo } from '@/utils/userInfo'
import { toast } from 'react-toastify'

const ActiveTask =(): JSX.Element=> {
  const session: string | null =
    typeof window !== 'undefined'
      ? window.sessionStorage.getItem('session')
      : ''
  const user = getUserInfo(session)

  const { isLoading, error, refetch, data } = useGetActiveTodoQuery<
    GetActiveTodoQuery,
    Error
  >(client, {
    userId: user.id,
  })

  useEffect(() => {
    if (error) {
      toast(error.toString, {
        type: 'error',
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
      })
    }
  }, [error])

  if (isLoading) return <PageLoading />

  return (
    <div className="h-full w-full dark:bg-[#293548]">
      <h1 className="text-2xl mx-[70px] font-bold my-4">Active Tasks </h1>
      {data?.todos.length !== 0 ? (
        <TaskList data={data} refetch={refetch} />
      ) : (
        <p className="flex justify-center">
          There are currently no active tasks.
        </p>
      )}
    </div>
  )
}

export default ActiveTask
