import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Carousel from './Carousel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Carousel />, document.getElementById('root'));
registerServiceWorker();
