'use client'
import { useEffect } from 'react'
import { client } from '@/utils/graphql-client'
import {
  useGetCompletedTodoQuery,
  GetCompletedTodoQuery,
} from '@/src/generated/graphql'
import ClearCompletedTasks from '@/components/ClearCompletedTasks/ClearCompletedTasks'
import TaskList from '@/components/TaskList'
import PageLoading from '@/components/PageLoader'
import { getUserInfo } from '@/utils/userInfo'
import { toast } from 'react-toastify'

const CompletedTodos = (): JSX.Element => {
  const session: string | null =
    typeof window !== 'undefined'
      ? window.sessionStorage.getItem('session')
      : ''

  const user = getUserInfo(session)

  const { isLoading, data, error, refetch } = useGetCompletedTodoQuery<
    GetCompletedTodoQuery,
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
    <div className="h-full w-full pb-[70px] dark:bg-[#293548]">
      <h1 className="text-2xl mx-[70px]  font-bold my-4">Completed Tasks</h1>
      <TaskList data={data} refetch={refetch} />
      <div>
        {data?.todos.length !== 0 ? (
          <ClearCompletedTasks refetch={refetch} />
        ) : (
          <p className="flex justify-center">No tasks have been completed</p>
        )}
      </div>
    </div>
  )
}

export default CompletedTodos
