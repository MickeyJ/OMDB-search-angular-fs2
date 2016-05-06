

angular.module('app')
  .controller('DetailController',
    function($state, MovieService){
      var vm = this;

      MovieService.getMovie($state.params.id)
        .then(function(movie){
          vm.movie = movie.data
        })

    }
  );