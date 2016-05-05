function ContactController(){
  var vm = this;

  this.name = '';
  this.email = '';
  this.phone = '';

  this.changeName = function(){
    vm.name = 'Something else!'
  }

}

angular
  .module('app')
  .controller('ContactController', ContactController)
