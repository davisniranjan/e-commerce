var app = angular.module('ecommerceApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html'
    })
    .when('/products', {
      templateUrl: 'products.html',
      controller: 'ProductsController'
    })
    .when('/contact', {
      templateUrl: 'contact.html'
    })
    .when('/cart', {
      templateUrl: 'cart.html',
      controller: 'CartController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('MainController', function ($scope) {
  // ...
});

app.controller('ProductsController', function ($scope) {
  $scope.products = [
    { name: 'Product 1', price: 10.99 },
    { name: 'Product 2', price: 15.99 },
    { name: 'Product 3', price: 7.99 }
  ];

  $scope.addToCart = function (product) {
    // ...
  };
});

app.controller('CartController', function ($scope) {
  
  $scope.cartItems = [
    { name: 'Product 1', price: 10.99, quantity: 2 },
    { name: 'Product 2', price: 15.99, quantity: 1 }
  ];

  $scope.removeItemFromCart = function (index) {
    //..
  };
});
