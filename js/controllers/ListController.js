
angular.module('app')
  .controller('ListController',
    function($state, MovieService){
      var vm = this;
      vm.title = 'Hi from list controller';

      console.log($state.params.search);

      MovieService.getAllMovies($state.params.search)
        .then(function(movies){
          vm.movies = movies.data.Search;
          vm.searchInput = null;
        })
      
    }
  );