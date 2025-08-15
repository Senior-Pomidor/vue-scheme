<script setup>
  import IconCursor from '@/components/icons/IconCursor.vue';
  import IconGrab from '@/components/icons/IconGrab.vue';

  const props = defineProps({
    isGrabMode: {
      type: Boolean,
      default: false
    },

    isCursorMode: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['clickGrab', 'clickCursor'])
</script>

<template>
  <div class="SchemeModesControls">
    <button
      class="btn"
      :class="{ '_active': isGrabMode }"
      @click="emit('clickGrab')"
    >
      <IconGrab
        class="btn__icon"
      />
    </button>

    <button
      class="btn"
      :class="{ '_active': isCursorMode }"
      @click="emit('clickCursor')"
    >
      <IconCursor
        class="btn__icon"
      />
    </button>
  </div>
</template>

<style lang="less">
  .SchemeModesControls {
    position: absolute;
    left: 16px;
    top: 60px;
    display: flex;
    flex-direction: column;
    width: initial !important;
    height: initial !important;
    border: 1px solid #E5E5E5;
    border-radius: 6px;
    overflow: hidden;
    box-sizing: border-box;

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 36px;
      border: none;
      background-color: #fff;
      color: #000;
      transition:
        color .15s ease,
        background-color .15s ease;

      & + .btn {
        border-top: 1px solid #E5E5E5;
      }

      &._active,
      &:hover {
        background-color: #000;
        color: #fff;
      }
    }

    .btn__icon {
      width: 16px;
      height: 16px;
    }
  }
</style>
