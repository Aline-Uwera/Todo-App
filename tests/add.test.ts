import { describe, it, expect, vi } from 'vitest'
import { useAddTask } from "@/components/AddTask/useAddTask";
describe('add', () => {
  const user = {
    id: '1'
  }
  const refetch = vi.fn()
  const setShowAddTask = !false
  const { mutate } = useAddTask(setShowAddTask, refetch, user)
  const result = mutate({
    title: 'data.title as string',
    description: 'data.description as string',
    is_completed: false,
    user_id: user ? user.id : '',
  })
  it('returns right result ', () => {
    expect(result).toBeDefined()
  })
})


