<template>
    <div>
      <h1>Todo List</h1>
      <router-link :to="{name: 'app.modules.todolist.form'}">Novo </router-link>
      <ul>
        <li v-for="(todo, index) of todoList" :key="index">
            <span>{{ todo }}</span> <button @click="deleteTodo(index)">Remover</button>
        </li>
      </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'login',
  signature: 'app.modules.todolist.show',
  computed: {
    ...mapGetters('Feature1', ['todoList'])
  },
  methods: {
    ...mapActions('Feature1', ['deleteTodo']),
    DeleteTodoFromState (index) {
      this.deleteTodo(index)
    }
  }
}
</script>
