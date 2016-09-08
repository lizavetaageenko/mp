import './app.scss';

import simpsons from './simpsons/simpsons';
import starks from './starks/starks';

import renderList from './render-list';

const body = document.getElementsByTagName('body')[0];

renderList(simpsons, 'Simpsons', 'simpsons', body);
renderList(starks, 'Starks', 'starks', body);
