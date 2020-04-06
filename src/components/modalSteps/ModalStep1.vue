<template>
  <div class="modal-step">
    <h3>Пол</h3>
    <button type="button" @click.once="goToNextStep">Следующий шаг</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToNextStep() {
      this.$store.commit('GO_TO_NEXT_STEP');
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-step {
  h3 {
    text-align: center;
  }
}
</style>
