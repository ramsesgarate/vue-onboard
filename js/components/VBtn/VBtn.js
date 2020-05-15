export default {
  inheritAttrs: false,
  name: 'v-btn',
  props: {
    bgColor: {
      type: String,
      default: 'blue'
    },
    color: {
      type: String,
      default: 'white'
    },
    disabled: Boolean
  },
  computed: {
    setBgColor() {
      return `bg-${this.bgColor}`
    },
    setColor() {
      return `text-${this.color}`
    }
  },
  methods: {
    getDefaultData() {
      const data = {
        class: {
          'button': true
        },
        attrs: {
          disabled: this.disabled,
          ...this.$attrs
        },
        on: {
          ...this.$listeners
        }
      }

      return data
    },
    applyColors(data) {
      data.class[this.setBgColor] = true;
      data.class[this.setColor] = true;
    }
  },
  render(h) {
    const data = this.getDefaultData();
    this.applyColors(data);

    return h('button', data, this.$slots.default);
  }
}