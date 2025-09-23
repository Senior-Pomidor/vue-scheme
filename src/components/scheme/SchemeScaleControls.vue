<script setup>
  import IconFullScreen from '@/components/icons/IconFullScreen.vue'
  import IconScaleMinus from '@/components/icons/IconScaleMinus.vue'
  import IconScalePlus from '@/components/icons/IconScalePlus.vue'
  import IconScaleReset from '@/components/icons/IconScaleReset.vue'

  const emit = defineEmits([
    'clickZoomIn',
    'clickZoomOut',
    'clickZoomReset',
    'clickFullScreen',
  ])
</script>

<template>
  <div class="SchemeScaleControls">
    <button
      class="btn"
      title="увеличить"
      @click="emit('clickZoomIn')"
    >
      <IconScalePlus class="btn__icon" />
    </button>

    <button
      class="btn"
      title="уменьшить"
      @click="emit('clickZoomOut')"
    >
      <IconScaleMinus class="btn__icon" />
    </button>

    <button
      class="btn"
      title="полноэкранный режим"
      @click="emit('clickFullScreen')"
    >
      <IconFullScreen class="btn__icon" />
    </button>

    <button
      class="btn"
      title="сбросить"
      @click="emit('clickZoomReset')"
    >
      <IconScaleReset class="btn__icon" />
    </button>
  </div>
</template>

<style lang="less" scoped>
  .SchemeScaleControls {
    display: flex;
    flex-direction: column;
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

      .hov {
        background-color: #000;
        color: #fff;
      }

      &._active {
        .hov;
      }

      .hover ({
        .hov;
      });
    }

    .btn__icon {
      width: 16px;
      height: 16px;
    }
  }
</style>
