export default {
  name: 'v-icon-dot',
  props: {
    index: {
      type: Number,
      required: true
    },
    indexCurrent: {
      type: Number,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.index === this.indexCurrent ? true : false;
    },
    classes() {
      const classes = {
        'active': this.isActive,
        'dot': true
      }
      return classes;
    },
  },
  methods:{
    getDefaultData() {
      const data = {
        statisClass: 'dot',
        class: {
          ...this.classes
        },
      }
      return data
    }
  },
  render(h) {
    const data = this.getDefaultData();

    return h('i', data, this.$slots.default)
  }
}