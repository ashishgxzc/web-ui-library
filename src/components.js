import GlowCheckbox from './components/Checkbox/GlowCheckbox'
import {v1} from 'uuid';

const componentJSON = [{
    id: v1(),
    name: 'Checkbox',
    items: [ { id:v1(), name: 'Glow Checkbox', component: GlowCheckbox }], 
},];

export default componentJSON;
