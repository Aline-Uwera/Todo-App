'use client'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import DeleteDialog from '@/components/DeleteTask/DeleteTask'
import Loading from './Loader'
import { useState } from 'react'
import { client } from '@/utils/graphql-client'
import {
  MarkAsCompleteMutation,
  MarkAsCompleteMutationVariables,
  useMarkAsCompleteMutation,
} from '@/src/generated/graphql'
import TodoEditForm from './updateTodo/UpdateTodo'
import { getUserInfo } from '@/utils/userInfo'

interface Todo {
  id: string
  is_completed: boolean
  title: string
  description: string
}
interface Task {
  data: Todo
  refetch: string
}

const TaskList = ({ data, refetch }: any) => {
  const [taskCompletion, setTaskCompletion] = useState<Todo[]>([])
  const [update, setUpdate] = useState(false)
  const [loadingTasks, setLoadingTasks] = useState<string[]>([])

  const session: string | null =
    typeof window != 'undefined' ? window.sessionStorage.getItem('session') : ''
  const user = getUserInfo(session)
  console.log(user.id)

  const { mutate, isLoading } = useMarkAsCompleteMutation(client, {
    onSuccess: (
      data: MarkAsCompleteMutation,
      variables: MarkAsCompleteMutationVariables
    ) => {
      setLoadingTasks((prevLoadingTasks) =>
        prevLoadingTasks.filter((taskId) => taskId !== variables.id)
      )
      refetch()
    },
  })

  const handleTaskClick = async (taskId: string) => {
    setUpdate(!update)
    setLoadingTasks((prevLoadingTasks) => [...prevLoadingTasks, taskId])
    const updatedTasks = taskCompletion.map((task) => {
      if (task.id === taskId) {
        return { ...task, is_completed: !task.is_completed }
      }
      return task
    })
    setTaskCompletion(updatedTasks)
    mutate({ id: taskId, is_completed: !update })
    refetch()
  }

  return (
    <div className="mx-[25px] pb-[20px] sm:mx-[70px]">
      {data?.todos.map((task: Todo) => (
        <div
          key={task.id}
          className="flex px-3 justify-between h-[70px] border m-3 shadow rounded-lg"
        >
          <div className="flex flex-col">
            <label key={task.id} className="flex items-center py-1">
              <Checkbox.Root
                value={task.id}
                className={`CheckboxRoot shadow-sm border border-black dark:text-black dark:bg-[#757e8e] dark:hover:bg-slate-300`}
                onClick={() => {
                  handleTaskClick(task.id)
                }}
                checked={task.is_completed}
              >
                {isLoading && loadingTasks.includes(task.id) ? (
                  <Loading />
                ) : (
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                )}
              </Checkbox.Root>
              <span
                className={`ml-2 font-[400] ${
                  task.is_completed ? 'line-through' : ''
                } `}
              >
                {task.title}
              </span>
            </label>
            <small className={`ml-3 text-center text-slate-500 pl-5`}>
              {task.description}
            </small>
          </div>
          <div className='flex gap-3'>
            <TodoEditForm refetch={refetch} id={task.id} status={task.is_completed} />
          <DeleteDialog id={task.id} refetch={refetch} />
          </div>
          
        </div>
      ))}
    </div>
  )
}
export default TaskList
