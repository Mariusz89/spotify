import template from './album.html';
import controller from './album.controller';
import './album.scss';

let albumComponent = {
  bindings: {
  	albums: '<'
  },
  template,
  controller
};

export default artistComponent;
