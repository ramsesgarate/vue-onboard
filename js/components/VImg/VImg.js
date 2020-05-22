export default {
    inheritAttrs: false,
    name: 'v-img',
    props: {
        height: {
            type: String,
            default: '100'
        },
        width: {
            type: String,
            required: false,
            default: 'i'
        },
    },
    computed: {},
    methods: {
        getDefaultData() {
            const data = {
                class: {
                    'material-icons': true,
                },
                attrs: {
                    ...this.$attrs
                },
                style: {
                    width: this.width,
                    height: this.height
                }
            }

            return data;
        },
    },
    render(h) {
        const data = this.getDefaultData();

        return h('img', data, )
    }
}