<template>
  <div class="content__box__todo shadow p-3 mb-5 bg-white rounded">
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    text: String,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.content__box__todo {
  width: 100%;
  height: 120px;
  background-color: white;
  opacity: 0.8;
  margin: 0 0 10px 0;
}
</style>
