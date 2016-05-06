
angular.module('app')
  .controller('MainController', function($state, MovieService){
      var vm = this;
      vm.title = 'Welcome';
    
      vm.handleSearch = function(input){
        $state.go('home.list', {'search': input});
        vm.searchInput = null;
      }
  });