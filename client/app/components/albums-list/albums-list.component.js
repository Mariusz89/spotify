import template from './albums-list.html';
import controller from './albums-list.controller';
import './albums-list.scss';

let albumsListComponent = {
  bindings: {
    albums: '<'
  },
  template,
  controller
};

export default albumsListComponent;
