import loader from '../../public/assets/icons/loader.svg'
import Image from "next/image"
import { useClearCompletedTasks } from '@/components/ClearCompletedTasks/useClearCompletedTasks'

const ClearCompletedTasks = ({refetch}:any ) => {

  const {handleDelete,isLoading} = useClearCompletedTasks(refetch)
  
  return (
    <div className="flex justify-center">
      {!isLoading ? (
        <button
          onClick={handleDelete}
          className="bg-slate-300 dark:bg-[#1f2937] h-8 hover:bg-red-300 dark:hover:bg-red-300 px-[15px] font-medium leading-none shadow-lg  mt-[30px] mb-[20px]"
        >
          Clear Tasks
        </button>
      ) : (
        <button
          onClick={handleDelete}
          disabled={isLoading}
          className="bg-slate-300 dark:bg-[#19202b] h-8 w-[100px] px-[15px] font-medium leading-none shadow-lg  mt-[30px] mb-[20px]"
        >
          <Image src={loader} alt={'loading'} width={25} height={25} />
        </button>
      )}
    </div>
  )
}

export default ClearCompletedTasks