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

export default {
  name: 'v-app',
  components:{
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
    VIconDot
  },
  data() {
    return {
      slides: [
        {title: "Onboard 1", text: "Prueba de texto en el onboard numero 1, Prueba de texto en el onboard numero 1, Prueba de texto en el onboard numero 1, Prueba de texto en el onboard numero 1"},
        {title: "Onboard 2", text: "Segunda prueba, esto va bien"},
        {title: "Onboard 3", text: "Esta es la tercera prueba, sera que vemos la app"},
        {title: "Onboard 4", text: "Todavia no sabemos si esto funciona"},
        {title: "Onboard 5", text: "El samuel es un loquillo total"},
        {title: "Onboard 6", text: "Esto es una ultima prueba chicos"},
      ],
      indexCurrent: 0,
      btnNext:{
        title: 'Siguiente',
        style: {
          disabled: false,
        },
        class:['next-screen']
      },
      btnFinish: {
        title: 'Finalizar',
        style: {
          disabled: true,
        },
        class:['finish','close']
      }
    }
  },
  computed: {
    counterPagination() {
      return this.slides.length;
    },
    indexMax() {
      return  this.slides.length - 1;
    }
  },
  methods: {
    nextSlide() {
      if(this.indexCurrent < this.indexMax) {
        this.indexCurrent++;
        return this.setBtns();
      } 
    },
    setBtns() {
      if(this.indexCurrent === this.indexMax) {
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
              <v-slide-title v-text="slide.title"></v-slide-title>
              <v-slide-text v-text="slide.text"></v-slide-text>
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
  `,
};