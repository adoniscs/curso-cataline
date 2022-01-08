<template>
  <p v-for="todo in doneTodos" :key="todo.text">
    {{ todo.text }}
  </p>
  <button @click="checkAlltodos">Concluir</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Todo {
  text: string;
  done: boolean;
}

export default defineComponent({
  data() {
    return {
      todos: [] as Todo[]
    };
  },
  computed: {
    doneTodos(): Todo[] {
      return this.todos.filter((todo) => todo.done);
    }
  },
  watch: {
    todos(newValue: Todo[]) {
      const isFinished = !newValue.some(({ done }) => {
        !done;
      });

      if (isFinished) {
        alert('Yuuuuuuuppppp!!!');
      }
    }
  },
  created() {
    this.todos = [
      { text: 'Estudar typescript', done: true },
      { text: 'Lavar a louça', done: false },
      { text: 'Aprender Vue.js', done: true }
    ];
  },
  methods: {
    checkAlltodos() {
      this.todos = this.todos.map(({ text }) => {
        return { text, done: true };
      });
    }
  }
});
</script>
