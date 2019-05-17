import angular from 'angular';
import uiRouter from 'angular-ui-router';
import artistsListComponent from './artists-list.component';
import ArtistsListService from './artists-list.service';

let artistsListModule = angular.module('artistsList', [
  uiRouter
])

.component('artistsList', artistsListComponent)
.service('ArtistsListService', ArtistsListService)
  
.name;

export default artistsListModule;
