export function createSimpleFunctional(c, el = 'div', name) {
  return Vue.extend({
    name: name || c.replace(/__/g, '-'),
    functional: true,
    render (h, { data, children }) {
      data.staticClass = (`${c} ${data.staticClass || ''}`).trim()

      return h(el, data, children)
    },

  })
}