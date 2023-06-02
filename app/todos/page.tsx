'use client'
import {
  GetAllTodosQuery,
  useGetAllTodosQuery,
} from '@/src/generated/graphql'
import { client } from '@/utils/graphql-client'
import TaskList from '@/components/TaskList'
import PageLoading from '@/components/PageLoader'
import { getUserInfo } from '@/utils/userInfo'
import AddTaskDialog from '@/components/AddTask/AddTask'


const TodoList: React.FC = () => {
  const session: string | null =
    typeof window != 'undefined' ? window.sessionStorage.getItem('session') : ''
  const user = getUserInfo(session)
  console.log(user.id)
  
  const { data, refetch, error } = useGetAllTodosQuery<GetAllTodosQuery, Error>(
    client,
    {
      userId: user.id,
    }
  )

  if (!data) return <PageLoading />
  if (error) return <div>error</div>

  return (
    <div className="h-full w-full pb-[74px] dark:bg-[#293548]">
      <h1 className="text-2xl mx-[70px] font-bold my-4">All Tasks</h1>
      <TaskList
        data={data}
        refetch={refetch}
      />
      <div className="flex xs:mx-[40px] mx-[90px] ">
        <AddTaskDialog refetch={refetch} user={user} />
      </div>
    </div>
  )
}

export default TodoList
