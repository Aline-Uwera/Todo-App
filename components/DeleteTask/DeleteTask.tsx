import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { TrashIcon } from '@radix-ui/react-icons'
import Loading from '../Loader'
import { useDeleteTask } from './useDeleteTask';

const DeleteDialog = ({ id, refetch }: { id: string; refetch: void }) => {
 const {handleDelete, isLoading} = useDeleteTask(refetch,id)

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild className="mx-1">
        <button>
          <TrashIcon className="w-6 h-6 text-primary hover:cursor-pointer hover:scale-110"></TrashIcon>
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-20">
          <AlertDialog.Title className="text-gray-900 m-0 font-bold pb-5">
            Are you sure you want to delete the task?
          </AlertDialog.Title>
          <div className="flex">
            <AlertDialog.Cancel>
              <button
                className={`text-gray-500 bg-gray-200 hover:bg-gray-300 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none mx-[15px]`}
              >
                cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Description>
              <button
                className="text-red-500 bg-red-200 hover:bg-red-300 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none"
                onClick={handleDelete}
              >
                {isLoading ? <Loading /> : 'Delete'}
              </button>
            </AlertDialog.Description>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export default DeleteDialog
