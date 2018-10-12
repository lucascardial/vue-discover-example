const modules = [
  {
    name: 'app.modules.todolist.show',
    router: {
      path: 'todolist',
      component: '$name'
    },
    nav: {
      label: 'Todo List'
    }
  },
  {
    name: 'app.modules.todolist.form',
    router: {
      path: 'createtodolist',
      component: '$name'
    },
    nav: {
      label: 'Create Todo List'
    }
  }
]
export default {
  name: 'app.features.auth',
  modules: modules,
  router: {
    path: 'feature1'
  },
  nav: {
    label: 'Feature1',
    group: 'group1'
  }
}
