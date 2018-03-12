import Artboard from './objects/artboard'
import Line from './charts/line'
import Area from './charts/area'
import XAxis from './objects/x-axis'
import YAxis from './objects/y-axis'

export function Laue(Vue) {
  [Artboard, Line, Area, XAxis, YAxis].forEach(c => {
    Vue.component(c.name, c)
  })
}

export {Line, Artboard, Area, XAxis, YAxis}
