import angular from 'angular';
import uiRouter from 'angular-ui-router';
import albumsListComponent from './albums-list.component';

let albumsListModule = angular.module('albumsList', [
  uiRouter
])


.component('albumsList', albumsListComponent)
.name;

export default albumsListModule;
