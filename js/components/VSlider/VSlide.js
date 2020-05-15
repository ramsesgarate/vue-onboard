export default {
  name: 'v-slide',
  props: {
    slide: {
      type: Object,
      default: []
    },
    indexCurrent: {
      type: Number,
      required: true,
      default: 1
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.index === this.indexCurrent? true : false
    },
    classes() {
      return {
        'active': this.isActive
      }
    }
  },
  render(h) {
    const data = {
      staticClass : "slide",
      class: this.classes,
      isActive: this.isActive,
      attrs: {
        ...this.$attrs,
      }
    }
        
    return h('div', data, this.$slots.default)
  }
}