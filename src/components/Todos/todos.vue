<template>
  <div class="container">
    <FormTodo @sendarray="arrayTodos = $event" />
    <br />
    <div class="content__todos">
      <Todo :text="tarea" v-for="(tarea, index) in arrayTodos" :key="index" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todos',
  components: {
    Todo: () => import('./Todo/todo.vue'),
    FormTodo: () => import('./FormTodo/formtodo.vue'),
  },

  data() {
    return {
      arrayTodos: [],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.content__todos {
  max-height: 600px;
  overflow-y: auto;
}
.content__todos::-webkit-scrollbar {
  width: 6px; /* Tamaño del scroll en vertical */
  height: 6px; /* Tamaño del scroll en horizontal */
}
.content__todos::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}
</style>
