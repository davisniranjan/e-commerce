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
  // Add any shared functionality for all pages here
});

app.controller('ProductsController', function ($scope) {
  // Add product listing and functionality here
  // Example:
  $scope.products = [
    { name: 'Product 1', price: 10.99 },
    { name: 'Product 2', price: 15.99 },
    { name: 'Product 3', price: 7.99 }
  ];

  $scope.addToCart = function (product) {
    // Implement logic to add products to the cart
  };
});

app.controller('CartController', function ($scope) {
  // Implement cart functionality here
  // Example:
  $scope.cartItems = [
    { name: 'Product 1', price: 10.99, quantity: 2 },
    { name: 'Product 2', price: 15.99, quantity: 1 }
  ];

  $scope.removeItemFromCart = function (index) {
    // Implement logic to remove items from the cart
  };
});
