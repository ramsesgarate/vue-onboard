import { createSimpleFunctional } from '../../util/helper.js'

import VSlide from './VSlide.js'

export const VSlider = createSimpleFunctional('slider row', 'div', 'slider')
export const VSlideTitle = createSimpleFunctional('slide-title', 'h3')
export const VSlideText = createSimpleFunctional('slide-text', 'p')
export const VSlideAction = createSimpleFunctional('slide-action')

export {
    VSlide
}