function StaffController(){
  this.name = '';
  this.phone = '';
  this.email = '';
}

angular
  .module('app')
  .controller('StaffController', StaffController)
