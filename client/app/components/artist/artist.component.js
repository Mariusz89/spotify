import template from './artist.html';
import controller from './artist.controller';
import './artist.scss';

let artistComponent = {
  bindings: {
  	artists: '<',
    itemsPerPage: '<',
    currentPage: '<'
  },
  template,
  controller
};

export default artistComponent;
