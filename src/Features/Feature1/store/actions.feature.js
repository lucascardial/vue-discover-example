const addTodo = ({commit}, data) => {
  commit('ADD_TODO', data)
}

const deleteTodo = ({commit}, index) => {
  commit('DELETE_TODO', index)
}

export default {
  addTodo,
  deleteTodo
}
