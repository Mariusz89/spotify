class ArtistsListController {
    constructor(ArtistsListService) {
   	  'ngInject'
   	  this.ArtistsListService = ArtistsListService;    
      this.totalItems = null;
      this.itemsPerPage = 10;
      this.currentPage = 1;
      this.maxSize = 5;
    }

    $onInit() {
      this.getArtists('abba');
    }

    callGetArtists(query) {
      this.getArtists(query);   
    }

    getArtists(query) {
      if(query.length === 0){
        query='abba';
      }

      this.ArtistsListService.getArtists(query)
        .then(response => {
            this.artists = response.data;
            console.log(this.artists);
            this.artists = this.artists.artists.items;
            /*this.artists = this.artistsItems.map(artist => artist);*/
            console.log(this.artists);
            this.totalItems = this.artists.length;
            /*for(let artist of this.artists) {
              console.log(artist);
            }*/
        })
        .catch((err) => {
            console.log(err);
        });

      /*this.ArtistsListService.getArtists().then(response => this.artists = response).catch((err) => {
            console.log(err);
        });
      console.log(this.artists);*/   
    }
}

export default ArtistsListController;


