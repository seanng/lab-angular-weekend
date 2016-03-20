angular.module('ShoppingCartApp').controller('ItemListController', ['$scope', function($scope){

  var Item = function(name, price, itemQty){
    this.itemName = name;
    this.itemPrice = price;
    this.itemQty = itemQty || 0;
    this.itemTotal = this.itemPrice * this.itemQty;
  };

  Item.prototype.calculateRowTotal = function(){
    this.itemTotal = this.itemPrice * this.itemQty;
    $scope.calculateTotalPrice();
  };

  var item1 = new Item('nothing', 1, 0);

  $scope.itemlist = [item1];

  $scope.newItemName = '';
  $scope.newItemPrice = '';
  $scope.totalPrice = 0;

  $scope.createNewItem = function() {
    var newitem = new Item($scope.newItemName, $scope.newItemPrice);
    $scope.itemlist.push(newitem);
    $scope.newItemName = '';
    $scope.newItemPrice = '';
  };

  $scope.calculateTotalPrice = function() {
    $scope.totalPrice = 0;
    $scope.itemlist.forEach (function(elem){
      $scope.totalPrice += elem.itemTotal;
    });
  };


}]);