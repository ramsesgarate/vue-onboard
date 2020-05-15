import VDot from '../VDot.js'

export default {
  name: 'v-onboard-pagination',
  components: {
    VDot
  },
  props: {
    counter: {
      type: Number,
      default: 1
    },
    indexCurrent: {
      type: Number,
      default: 0
    }
  },
  template: `
  <div class='onboard-pagination'>
    <v-dot 
      v-for="(count,index) in counter" 
      :key="index"
      :index="index"
      :index-current="indexCurrent"
    />
  </div>
  `
}