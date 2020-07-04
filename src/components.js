import GlowCheckbox from './components/Checkbox/GlowCheckbox'
import AnalogClock from './components/Clock/AnalogClock';
import FlyingRocket from './components/FlyingRocket';

import {v1} from 'uuid';

const componentJSON = [{
    id: v1(),
    name: 'Checkbox',
    items: [ { id:v1(), name: 'Glow Checkbox', component: GlowCheckbox }], 
},{
    id: v1(),
    name: 'Clock',
    items: [{id: v1(), name: 'Analog Clock', component: AnalogClock}]
},{
    id: v1(),
    name: 'Flying Rocket',
    items: [{id: v1(), name: 'Flying Rocket', component: FlyingRocket}]  
}];

export default componentJSON;
