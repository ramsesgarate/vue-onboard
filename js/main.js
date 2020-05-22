import {
  VOnboard,
  VOnboardBody,
  VOnboardPagination,
  VOnboardFooter
} from './components/VOnboard/index.js'
import { VIcon, VIconDot } from './components/VIcon/index.js'
import { VBtn } from './components/VBtn/index.js'
import {
  VSlider,
  VSlide,
  VSlideTitle,
  VSlideText
} from './components/VSlider/index.js'
import { VImg } from './components/VImg/index.js'

Vue.component('vue-onboard', {
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  components: {
    VOnboard,
    VOnboardBody,
    VOnboardPagination,
    VOnboardFooter,
    VSlider,
    VSlide,
    VBtn,
    VSlideTitle,
    VSlideText,
    VIcon,
    VIconDot,
    VImg
  },
  data() {
    return {
      indexCurrent: 0,
      btnNext: {
        title: 'Siguiente',
        style: {
          disabled: false,
        },
        class: ['next-screen']
      },
      btnFinish: {
        title: 'Finalizar',
        style: {
          disabled: true,
        },
        class: ['finish', 'close']
      }
    }
  },
  computed: {
    counterPagination() {
      return this.slides.length;
    },
    indexMax() {
      return this.slides.length - 1;
    }
  },
  methods: {
    nextSlide() {
      if (this.indexCurrent < this.indexMax) {
        this.indexCurrent++;
        return this.setBtns();
      }
    },
    setBtns() {
      if (this.indexCurrent === this.indexMax) {
        this.btnNext.style.disabled = true;

        this.btnFinish.style.disabled = false;
        this.btnFinish.class.push('active');
      }
    },
    close() {
      console.log("Cambia la url a : ?action=close");
    }
  },
  template: `
	<div>
  <v-onboard>
    <v-icon 
      @click="close" 
      class="btn-close"
    >
      close
    </v-icon>
    <v-onboard-body>
      
      <v-slider>
        <v-slide 
          v-for="(slide, index) in slides"
          :key="index"
          :slide="slide"
          :index="index"
          :index-current="indexCurrent"
        >
          <div class="slide-image" v-if="slide.img">
            <v-img :src="slide.img.src" :width="slide.img.width"/>
          </div>
          <v-slide-title 
            v-if="slide.title"
            v-text="slide.title"
          ></v-slide-title>
          <div v-if="slide.html"  v-html="slide.html">
          </div>
          <v-slide-text  v-else class="text-gray"
            v-text="slide.text"
          ></v-slide-text>
        </v-slide>
      </v-slider>
    </v-onboard-body>
    <v-onboard-pagination>
      <v-icon-dot 
        v-for="(count, index) in counterPagination"
        :key="index"
        :index="index"
        :indexCurrent="indexCurrent"
      ></v-icon-dot>
    </v-onboard-pagination>
    <v-onboard-footer>
      <v-btn 
        @click="nextSlide" 
        v-text="btnNext.title"
        :style="btnNext.style"
        :class="btnNext.class"
      >
      </v-btn>
      <v-btn 
        v-text="btnFinish.title"
        :style="btnFinish.style"
        :class="btnFinish.class"
        @click="close"
      >
      </v-btn>
    </v-onboard-footer>
  </v-onboard>
</div>
    `
})

const vm = new Vue({
  el: "#app",
  data: {
    slides: [{
        title: "Slide 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non pulvinar ipsum. Nulla sodales malesuada eros eget malesuada. Sed viverra turpis massa, vitae semper urna consectetur sit amet. Donec accumsan ut massa quis ultricies. Sed vel tempor leo. Mauris non mi efficitur, condimentum erat sit amet, pharetra augue. Curabitur aliquam lacus nulla, ut condimentum lectus consectetur nec. Donec facilisis ipsum sit amet suscipit imperdiet. ",
        img: {
          src: "https://news.airbnb.com/wp-content/uploads/sites/4/2020/03/BeloRauschNewsroomFeatured_200314.png",
        }
      },
      {

        html: "<img src='https://awto.cl/assets/images/prepago-icon.png' width='50%'/><h3 class='slide-title'>Titulo slide html</h3><p> Este es un texto de prueba que se escribio con html puro</p>",
      },
      {
        title: "Slide 3",
        text: "Pellentesque pretium orci tortor, at interdum lorem mattis non. Quisque risus dolor, consequat at quam sed, mollis bibendum turpis. Nulla facilisi. Duis quis scelerisque ligula. Sed ex ipsum, semper at dui vitae, porttitor placerat lectus. Vestibulum rhoncus tempus diam, et suscipit leo pharetra non. Sed in lorem massa. Sed fringilla faucibus arcu sed sodales. Vestibulum lorem risus, elementum sed nulla nec, malesuada ornare quam.",
        img: {
          src: "https://awto.cl/assets/img/hiw-icon-awto.gif",
          width: '50%'
        }
      },
      {
        title: "Slide 4",
        text: "Ut fermentum dolor viverra, aliquet orci eget, mollis ligula. Praesent at accumsan sem, id tincidunt dolor. Cras tincidunt, ex in viverra condimentum, nibh nulla finibus erat, et suscipit orci arcu ac mi. Nam commodo tincidunt libero non ullamcorper. Vivamus aliquam consequat leo at consequat. In porta magna at aliquam pretium. Praesent ultricies scelerisque imperdiet."
      },
      {
        title: "Slide 5",
        text: "Nunc a nulla libero. Nam convallis pulvinar massa, sed ultrices nibh rutrum nec. Nulla pellentesque metus vel dolor egestas ullamcorper at quis erat. Aliquam a augue faucibus, molestie tortor in, viverra felis. Integer porttitor pulvinar ornare. Nam gravida sit amet ligula eget pretium. Suspendisse eleifend elit id mi vehicula, nec congue massa laoreet. In ornare maximus congue. Nunc aliquam tempor lectus dapibus lacinia."
      },
      {
        title: "Slide 6",
        text: "Nullam tempus, velit sed dignissim malesuada, risus orci sollicitudin velit, vulputate aliquet risus arcu vel risus. Curabitur sed nisl massa. Donec blandit mollis tortor, ut mattis elit fermentum id. Mauris vestibulum, dui sed aliquet tincidunt, odio enim malesuada sem, in varius magna sem et ante. Vestibulum eget pretium dui, at porttitor nisi. Morbi porta nibh sit amet lectus aliquam porta. Donec dictum urna quis tortor accumsan, in faucibus metus lobortis. Suspendisse vehicula magna quis magna convallis hendrerit. Integer dignissim diam ac ligula dapibus, nec bibendum odio lobortis."
      },
    ],
  }
});