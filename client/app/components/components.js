import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Artist from './artist/artist';
import ArtistsList from './artists-list/artists-list';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Artist,
  ArtistsList
])

.name;

export default componentModule;
