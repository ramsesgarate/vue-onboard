export default {
  inheritAttrs: false,
  name: 'v-icon',
  props: {
    color: {
      type: String,
      default: 'gray'
    },
    tag: {
      type: String,
      required: false,
      default: 'i'
    },
    disabled: Boolean
  },
  computed: {
    hasClickListener() {
      return Boolean(this.$listeners.click)
    },
    setColor() {
      return `text-${this.color}`
    }
  },
  methods: {
    getDefaultData() {
      const data = {
        class: {
          'material-icons': true,
        },
        attrs: {
          disabled: this.disabled,
          type: this.hasClickListener ? 'button' : undefined,
          ...this.$attrs
        },
        on: this.$listeners,
      }

      return data;
    },
    applyColors(data) {
      data.class[this.setColor] = true
    }
  },
  render(h) {
    const data = this.getDefaultData();
    this.applyColors(data);

    return h(this.hasClickListener ? 'button' : this.tag , 
      data, 
      this.$slots.default)
  }
}