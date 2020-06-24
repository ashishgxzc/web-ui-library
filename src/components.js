import GlowCheckbox from './components/Checkbox/GlowCheckbox'
import AnalogClock from './components/Clock/AnalogClock';
import {v1} from 'uuid';

const componentJSON = [{
    id: v1(),
    name: 'Checkbox',
    items: [ { id:v1(), name: 'Glow Checkbox', component: GlowCheckbox }], 
},{
    id: v1(),
    name: 'Clock',
    items: [{id: v1(), name: 'Analog Clock', component: AnalogClock}]
}];

export default componentJSON;
