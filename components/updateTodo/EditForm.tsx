import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { useUpdateTodoMutation } from '@/src/generated/graphql'
import { client } from '@/utils/graphql-client'

interface User {
  id: string
}

interface Task {
  id: string
  title: string
  description: string
}

interface EditTaskDialogProps {
  task: Task
  refetch: () => void
}

const EditTaskDialog: React.FC<EditTaskDialogProps> = ({ task, refetch }) => {
 

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="dark:bg-[#1f2937]">
        <button
          onClick={() => {
            setShowEditTask(true)
          }}
          className="hover:bg-slate-600 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] focus:shadow-black focus:outline-none"
        >
          Edit
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`data-[state=open]:animate-overlayShow fixed inset-0`}
        />
        <Dialog.Content
          className={`${
            showEditTask ? '' : 'hidden'
          } dark:bg-[#1f2937] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none`}
        >
          <form onSubmit={handleSave} className="m-3 flex flex-col">
            <div className="h-[70px] my-1">
              <fieldset className="mb-[15px] flex items-center gap-5">
                <input
                  className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                  id="title"
                  type="text"
                  name="title"
                  value={updatedTask.title}
                  onChange={handleChange}
                  placeholder="Task name"
                />
              </fieldset>
            </div>
            <div className="h-[100px]">
              <fieldset className="mb-[15px] flex items-center gap-5">
                <textarea
                  id="description"
                  name="description"
                  value={updatedTask.description}
                  onChange={handleChange}
                  className="inline-flex h-[65px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] border"
                  placeholder="Description"
                  cols={10}
                  rows={3}
                ></textarea>
              </fieldset>
            </div>
            <div className=" flex justify-end">
              <button
                type="submit"
                className="w-full border dark:bg-[#1f2937] hover:bg-slate-600  inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] text-black bg-[#c8e6e3]  font-bold py-2 mt-3"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Image src={loader} alt={'loading'} width={25} height={25} />
                ) : (
                  'Save'
                )}
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button
              className="hover:bg-slate-600 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
              aria-label="Close"
              onClick={() => setShowEditTask(false)}
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default EditTaskDialog
