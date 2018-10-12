const ADD_TODO = (state, data) => {
  state.todoList.push(data)
}

const DELETE_TODO = (state, index) => {
  state.todoList.splice(index, 1)
}

export default {
  ADD_TODO,
  DELETE_TODO
}
