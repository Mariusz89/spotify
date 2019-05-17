class ArtistController {
  constructor(ArtistService) {
    'ngInject'
    this.ArtistService = ArtistService;
  }
  
  $onInit() {
    
  }

  callGetArtistAlbums(id) {
    this.ArtistService.getArtistAlbums(id)
      .then(response => {
          this.albums = response.data;
          console.log(this.albums);
          this.albums = this.albums.items;  
          for (var i=0; i < this.albums.length; i++) {
            console.log(this.albums[i].name);
          }
      })
      .catch((err) => {
          console.log(err);
      });  
  }

}

export default ArtistController;



