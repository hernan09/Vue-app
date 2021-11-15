<template>
  <div class="form-group">
    <form @submit="onSubmit">
      <input
        class="form-control input__custom"
        type="text"
        v-model="nuevaentrada"
      />
      <br />
      <button
        class="btn btn-primary btn-sm btn-lg"
        style="outline:none"
        type="submit"
      >
        ADD TODO
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormTodo',

  data() {
    return {
      arrayTodos: [],
      nuevaentrada: '',
    };
  },

  mounted() {},

  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.arrayTodos.push(this.nuevaentrada);
      this.$emit('sendarray', this.arrayTodos);
      console.log(this.arrayTodos);
    },
  },
};
</script>

<style>
.input__custom {
  width: 400px;
  margin: auto;
  margin-top: 10px;
}
</style>
