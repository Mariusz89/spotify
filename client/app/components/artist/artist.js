import angular from 'angular';
import uiRouter from 'angular-ui-router';
import artistComponent from './artist.component';
import ArtistService from './artist.service';

let artistModule = angular.module('artist', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('artist', {
      url: '/:artistId',
      component: 'artist'
    });
})


.component('artist', artistComponent)
.service('ArtistService', ArtistService)
  
.name;

export default artistModule;
