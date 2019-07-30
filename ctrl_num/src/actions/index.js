let nextTodoId = 0
export const addTodo = () => ({
  type: 'INCREASE',
  id: nextTodoId++,
})

export const rmTodo = () => ({
    type: 'DECREASE',
    id: nextTodoId++,
  })
  