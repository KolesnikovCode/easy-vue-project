<template>
  <div class="modal" @mousedown.self.once="toggleModal">
    <div class="modal-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleModal() {
      this.$store.commit('TOGGLE_MODAL');
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  @supports ( not ( (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) ) ) {
    background: rgba(0, 0, 0, 0.9);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  &-body {
    border-radius: 10px;
    transition: all .2s ease;
    background: none;
    padding: 15px;
    margin: 20px;
    z-index: 70;
  }
}
</style>
