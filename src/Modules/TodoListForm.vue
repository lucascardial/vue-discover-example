<template>
    <div>
      <h1>Todo List Form</h1>
      <form>
        <input type="text" v-model="name">
        <input type="button" @click.prevent="addTodoToState" value="Add ">
      </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  signature: 'app.modules.todolist.form',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions('Feature1', ['addTodo']),
    addTodoToState () {
      this.addTodo(this.name)
      this.$router.push({name: 'app.modules.todolist.show'})
    }
  }
}
</script>
