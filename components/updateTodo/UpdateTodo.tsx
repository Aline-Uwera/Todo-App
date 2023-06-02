import React, { useEffect, useState } from 'react'
import { useUpdateTask } from './useUpdateTask'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon, Pencil2Icon, UpdateIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import loader from '../../public/assets/icons/loader.svg'
import { GetAllTodosQuery, GetTodoByIdQuery, useGetAllTodosQuery, useGetTodoByIdQuery } from '@/src/generated/graphql'
import { client } from '@/utils/graphql-client'


interface User {
  id: string
}

interface AddTaskProps {
  refetch: any
  id: string
  status: boolean
}


const TodoEditForm = ({ refetch, id, status }: AddTaskProps) => {
  const [showAddTask, setShowAddTask] = useState(true)
  const [initialData, setInitialData] = useState<{
    title: string | undefined
    description: string | undefined
  }>({ title: '', description: '' })

  const { data } = useGetTodoByIdQuery<GetTodoByIdQuery, Error>(client, {
    id: id,
  })
  useEffect(() => {
    if (data) {
      setInitialData({
        title: data?.todos_by_pk?.title,
        description: data?.todos_by_pk?.description,
      })
    }
  }, [data])

  const { register, handleSubmit, isLoading, errors, submit, mutate } =
    useUpdateTask(refetch, setShowAddTask, id, status)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="dark:bg-[#1f2937]">
        <button
          onClick={() => {
            setShowAddTask(true)
          }}
          className=""
        >
          <Pencil2Icon className="w-6 h-6 text-primary hover:cursor-pointer hover:scale-110" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className={`${
            showAddTask ? '' : 'hidden'
          } dark:bg-[#1f2937] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none`}
        >
          <form onSubmit={handleSubmit(submit)} className="m-3 flex flex-col">
            <div className="h-[70px] my-1">
              <fieldset className="mb-[15px] flex items-center gap-5">
                <input
                  className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                  id="title"
                  type="text"
                  placeholder="Task name"
                  defaultValue={initialData.title}
                  {...register('title')}
                />
              </fieldset>
              <p
                className={`text-red-500 text-xs italic mb-2 ${
                  errors.title ? 'visible' : 'hidden'
                }`}
              >
                {errors.title ? errors.title.message : ''}
              </p>
            </div>
            <div className="h-[100px]">
              <fieldset className="mb-[15px] flex items-center gap-5">
                <textarea
                  {...register('description')}
                  id="description"
                  className="inline-flex h-[65px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] border"
                  placeholder="Description"
                  defaultValue={initialData.description}
                  cols={10}
                  rows={3}
                ></textarea>
              </fieldset>
              {errors.description ? (
                <p className={`text-red-500 text-xs italic mb-1`}>
                  {errors.description.message}{' '}
                </p>
              ) : (
                ''
              )}
            </div>
            <div className=" flex justify-end">
              <button
                className="w-full border dark:bg-[#1f2937] hover:bg-slate-600  inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] text-black bg-[#c8e6e3]  font-bold py-2 mt-3"
                disabled={isLoading}
              >
                {!isLoading ? (
                  'Update'
                ) : (
                  <Image src={loader} alt={'loading'} width={25} height={25} />
                )}
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button
              className="hover:bg-slate-600 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default TodoEditForm
