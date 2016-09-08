import './app.scss';

import simpsons from './simpsons/simpsons';
import starks, { uppercasefyStarks } from './starks/starks';

import renderList from './common/render-list';

const body = document.getElementsByTagName('body')[0];

renderList(simpsons, 'Simpsons', 'simpsons', body);
renderList(starks, 'Starks', 'starks', body);
renderList(uppercasefyStarks(), 'Upper Starks', 'starks', body);
