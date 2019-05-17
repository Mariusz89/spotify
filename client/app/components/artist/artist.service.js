export default class ArtistService {
    constructor($http) {
      'ngInject';
  
      this.$http = $http;
    }
   
  
    getArtistAlbums(id) {
        const access_token = 'BQDT9HPn2Nv3fcrcUKX4rEVXlCHSMWxyx0IZXysDMUl5o9ENMPaL9MRGbbJx696PZmY_XbR9n-_k5N1woSrJNw_AEB1mCUIsX9tzDCVbfK2PuRzYQXoKLtsGO9VZlYsNq3bWSruWhJ4hlkL0KZzzgf4fwcfVXZsuJouiyxruJXqkzBBqHWMHUA';
        console.log(access_token);
        const params = {
            market: 'US',
            limit: 50
            /*offset: 5*/
        };

        return this.$http.get(`https://api.spotify.com/v1/artists/${id}/albums`, {headers: {
            'Authorization': `Bearer ${access_token}`}, params });
    } 
}