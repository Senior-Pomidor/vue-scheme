<template>
  <div
    class="tooltip-dynamic"
    :class="classes"
    :style="style"
  >

    <!-- {{ parentSelector }} -->
    <!-- {{ parentEl }} -->
    <!-- {{ 'parent : ' + parentEl }} -->
    <!-- {{ document.querySelector(rootSelector) }} -->

    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Vtooltip',
    props: {
      show: {
        type: Boolean,
        default: false,
      },

      parentSelector: {
        type: String,
        default: '',
      },

      rootSelector: {
        type: String,
        default: '',
      },

      scrollSelector: {
        type: String,
        default: '',
      },

      /**
       * vertical or horizontal
       */
      position: {
        type: String,
        default: 'vertical',
      },

      align: {
        type: String,
        default: 'center',
      },

      /** Отступ между элементом и тултипом */
      gap: {
        type: Number,
        default: 0,
      },

      classes: {
        type: String,
        default: '',
      },

      isDynamicContent: {
        type: Boolean,
        default: false,
      },

      inModal: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        style: {
          top: 0,
          left: 0,
        },

        parent: null,
      }
    },

    computed: {
      parentEl() {
        if (this.rootSelector && document.querySelector(this.rootSelector) && this.parentSelector) {
          return document.querySelector(this.rootSelector).querySelector(this.parentSelector)
        } else if (this.parentSelector) {
          return document.querySelector(this.parentSelector)
        }

        return this.$el.parentElement
      },
    },

    watch: {
      show() {
        this.changePosition()
      },
    },

    mounted() {
      if (this.scrollSelector && document.querySelector(this.scrollSelector)) {
        document.querySelector(this.scrollSelector).addEventListener('scroll', this.changePosition)
      } else {
        window.addEventListener('scroll', this.changePosition)
      }
    },

    beforeUnmount() {
      window.removeEventListener('scroll', this.changePosition)

      if (this.scrollSelector && document.querySelector(this.scrollSelector)) {
        document.querySelector(this.scrollSelector).removeEventListener('scroll', this.changePosition)
      }
    },

    methods: {
      changePosition() {
        if (!this.show) {
          return
        }

        const target = this.$el.getBoundingClientRect()
        let parent = this.parentEl.getBoundingClientRect()

        if (this.inModal && this.parentEl) {
          const { top, right, bottom, left, width, height, x, y } = parent

          const root = document.querySelector(this.rootSelector)?.getBoundingClientRect()
          parent = { top: top - root?.top || top, right, bottom: bottom - root?.top || bottom, left, width, height, x, y }
        }

        /**
         * При обновлении текста не сбрасываются стили с позиционированием,
         * может возникнуть проблема со смещением т.е текст будет ужиматься из-за отсутствия
         * фиксированной ширины, в этом случае высота у тултипа может отличаться.
         */
        if (this.parent && parent.left !== this.parent?.left) {
          this.style = {
            top: this.style?.top || '',
            left: '0px',
          }

          this.$nextTick(() => {
            this.calcPosition(this.$el.getBoundingClientRect(), parent)
          })
        } else {
          this.calcPosition(target, parent)
        }
      },

      calcPosition(target, parent) {
        let top = 0
        let left = 0

        const offsets = {
          x: '',
          y: '',
        }

        if (this.position === 'vertical') {
          let scrollTop = 0

          if (this.rootSelector) {
            scrollTop = document.querySelector(this.rootSelector)?.scrollTop || 0
          }

          /** Логика вертикальных тултипов */
          if (target.height < parent.top) {
            top = parent.top - target.height - this.gap + scrollTop
            offsets.y = 'top'
          } else {
            top = parent.bottom + this.gap
            offsets.y = 'bottom'
          }

          if (this.align === 'center') {
            left = parent.left - (target.width - parent.width) / 2
            offsets.x = 'center'
          }

          if (this.align === 'right' || target.width / 2 - parent.width / 2 > window.innerWidth - parent.right) {
            left = parent.right - target.width
            offsets.x = 'right'
          }

          if (this.align === 'left' || target.width / 2 - parent.width / 2 > parent.left) {
            left = parent.right - parent.width
            offsets.x = 'left'
          }
        } else if (this.position === 'horizontal') {
          /** Логика горизонтальных тултипов */
          if (target.width < parent.left) {
            left = parent.left - target.width - this.gap
          } else {
            left = parent.right + this.gap
          }

          if (this.align === 'center') {
            top = parent.top - (target.height - parent.height) / 2
          }
        }

        if (this.isDynamicContent) {
          this.parent = parent
        }

        this.style = {
          top: `${top}px`,
          left: `${left}px`,
        }

        this.$emit('change-position', offsets)
      },
    },
  }
</script>

<style lang="less">
.tooltip-dynamic {
  position: fixed;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
}
</style>
