export default class ArtistsListService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
    }

    getArtists(query) {  
        const access_token = 'BQDT9HPn2Nv3fcrcUKX4rEVXlCHSMWxyx0IZXysDMUl5o9ENMPaL9MRGbbJx696PZmY_XbR9n-_k5N1woSrJNw_AEB1mCUIsX9tzDCVbfK2PuRzYQXoKLtsGO9VZlYsNq3bWSruWhJ4hlkL0KZzzgf4fwcfVXZsuJouiyxruJXqkzBBqHWMHUA'; 
        const params = {
            type: 'artist',
            market: 'US',
            limit: 50
            /*offset: 5*/
        };

        if (typeof query === 'string') {
            params.q = query;
        }

        return this.$http.get("https://api.spotify.com/v1/search", {headers: {
            'Authorization': `Bearer ${access_token}`}, params });
            /*{
                method: 'GET',
                url: 'https://raw.githubusercontent.com/PokemonGOAPI/PokemonDataGraber/master/output.json'
            }
        );
        .then((response) => {
            response.data;
            console.log( response.data);
        })
        .catch((err) => {
            console.log(err);
        })*/
    }
}









