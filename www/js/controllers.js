angular.module('starter.controllers', [])


/*****************************************************
* > Factory (Wines)
*  Get wines from the API REST on wordpress.
*  
*******************************************************/
.factory('vinosFactory', function(){
     
         return {
        datosFactoria: [

    { nombreVino: 'Champagne Henriot Brut Rosé ', id: 1, urlImage : 'http://www.vinoteca.com/files/products/CH8318.png', categoria: 'Vino_Tinto', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium placerat augue, eget dictum orci pharetra et. Nunc ullamcorper iaculis diam, at aliquet turpis tincidunt id. Aenean pulvinar placerat nulla, non eleifend magna luctus sit amet. Sed nec pharetra tellus. Aliquam tempor pretium urna in vulputate. Etiam feugiat ullamcorper convallis. Maecenas metus nisl, dignissim vel pulvinar nec, fermentum quis mi. Nunc vehicula, orci non maximus congue, est metus venenatis elit, nec suscipit eros eros ut lectus. Etiam luctus venenatis nulla, in condimentum mauris tincidunt quis. Nullam vel elementum lacus. Pellentesque a tortor nec odio tincidunt sollicitudin at vel ante. Donec nec purus eget massa elementum eleifend ac eget ipsum.',
      precio: '550'
    },
    { nombreVino: 'Champagne Henriot Brut ', id: 2, urlImage : 'http://www.vinoteca.com/files/products/CH8317.png', categoria: 'Vino_Blanco', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium placerat augue, eget dictum orci pharetra et. Nunc ullamcorper iaculis diam, at aliquet turpis tincidunt id. Aenean pulvinar placerat nulla, non eleifend magna luctus sit amet. Sed nec pharetra tellus. Aliquam tempor pretium urna in vulputate. Etiam feugiat ullamcorper convallis. Maecenas metus nisl, dignissim vel pulvinar nec, fermentum quis mi. Nunc vehicula, orci non maximus congue, est metus venenatis elit, nec suscipit eros eros ut lectus. Etiam luctus venenatis nulla, in condimentum mauris tincidunt quis. Nullam vel elementum lacus. Pellentesque a tortor nec odio tincidunt sollicitudin at vel ante. Donec nec purus eget massa elementum eleifend ac eget ipsum.',
      precio: '750'
    },
    { nombreVino: 'Codorniu Brut Cava Anna 750 ml', id: 3, urlImage : 'http://www.vinoteca.com/files/products/CH8315.png', categoria: 'Vino_Rosado', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium placerat augue, eget dictum orci pharetra et. Nunc ullamcorper iaculis diam, at aliquet turpis tincidunt id. Aenean pulvinar placerat nulla, non eleifend magna luctus sit amet. Sed nec pharetra tellus. Aliquam tempor pretium urna in vulputate. Etiam feugiat ullamcorper convallis. Maecenas metus nisl, dignissim vel pulvinar nec, fermentum quis mi. Nunc vehicula, orci non maximus congue, est metus venenatis elit, nec suscipit eros eros ut lectus. Etiam luctus venenatis nulla, in condimentum mauris tincidunt quis. Nullam vel elementum lacus. Pellentesque a tortor nec odio tincidunt sollicitudin at vel ante. Donec nec purus eget massa elementum eleifend ac eget ipsum.',
    precio: '450'
    },
    { nombreVino: 'Codorniu Clásico Reserva Brut 750 ml', id: 4, urlImage : 'http://www.vinoteca.com/files/products/CH8314.png', categoria: 'Vino_Espumoso', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium placerat augue, eget dictum orci pharetra et. Nunc ullamcorper iaculis diam, at aliquet turpis tincidunt id. Aenean pulvinar placerat nulla, non eleifend magna luctus sit amet. Sed nec pharetra tellus. Aliquam tempor pretium urna in vulputate. Etiam feugiat ullamcorper convallis. Maecenas metus nisl, dignissim vel pulvinar nec, fermentum quis mi. Nunc vehicula, orci non maximus congue, est metus venenatis elit, nec suscipit eros eros ut lectus. Etiam luctus venenatis nulla, in condimentum mauris tincidunt quis. Nullam vel elementum lacus. Pellentesque a tortor nec odio tincidunt sollicitudin at vel ante. Donec nec purus eget massa elementum eleifend ac eget ipsum.',
    precio: '250'
    },
    { nombreVino: 'Codorniu Rondel Brut 750 ml', id: 5, urlImage : 'http://www.vinoteca.com/files/products/CH8316.png', categoria: 'Vino_Rosado', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium placerat augue, eget dictum orci pharetra et. Nunc ullamcorper iaculis diam, at aliquet turpis tincidunt id. Aenean pulvinar placerat nulla, non eleifend magna luctus sit amet. Sed nec pharetra tellus. Aliquam tempor pretium urna in vulputate. Etiam feugiat ullamcorper convallis. Maecenas metus nisl, dignissim vel pulvinar nec, fermentum quis mi. Nunc vehicula, orci non maximus congue, est metus venenatis elit, nec suscipit eros eros ut lectus. Etiam luctus venenatis nulla, in condimentum mauris tincidunt quis. Nullam vel elementum lacus. Pellentesque a tortor nec odio tincidunt sollicitudin at vel ante. Donec nec purus eget massa elementum eleifend ac eget ipsum.',
    precio: '150'
    },
    { nombreVino: 'Dom Perignon 750 ml', id: 6, urlImage : 'http://www.vinoteca.com/files/products/CH8049.jpg', categoria: 'Vino_Espumoso', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium placerat augue, eget dictum orci pharetra et. Nunc ullamcorper iaculis diam, at aliquet turpis tincidunt id. Aenean pulvinar placerat nulla, non eleifend magna luctus sit amet. Sed nec pharetra tellus. Aliquam tempor pretium urna in vulputate. Etiam feugiat ullamcorper convallis. Maecenas metus nisl, dignissim vel pulvinar nec, fermentum quis mi. Nunc vehicula, orci non maximus congue, est metus venenatis elit, nec suscipit eros eros ut lectus. Etiam luctus venenatis nulla, in condimentum mauris tincidunt quis. Nullam vel elementum lacus. Pellentesque a tortor nec odio tincidunt sollicitudin at vel ante. Donec nec purus eget massa elementum eleifend ac eget ipsum.',
      comidas:
        [
        {id: '1', nombreComida:'Suzy', urlImage: 'img/suzy.png'},
        ]
      ,
    precio: '950'
    },
    { nombreVino: 'Henri Abelé Brut Traditionnel', id: 7, urlImage : 'http://www.vinoteca.com/files/products/CH8376.png', categoria: 'Vino_Espumoso',
      comidas:
        [
        {id: '1', nombreComida:'Hani', urlImage: 'img/Hani-exid.jpg'},
        {id: '1', nombreComida:'Boram', urlImage: 'img/boram.png'},
        {id: '1', nombreComida:'Hyomin', urlImage: 'http://images6.fanpop.com/image/photos/37200000/Hyomin-for-BNT-park-sun-young-37292588-1000-1480.jpg'},
        {id: '1', nombreComida:'Kwon BoA ', urlImage: 'img/boa.jpg'}
        ]
      ,
      descripcion : "Descripcion ¬¬" , precio : "250"
    },
    { nombreVino: 'Laurent Perrier Brut L-P 750 ml', id: 8, urlImage : 'http://www.vinoteca.com/files/products/CH8117.jpg', categoria: 'Vino_Rosado' , descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium placerat augue, eget dictum orci pharetra et. Nunc ullamcorper iaculis diam, at aliquet turpis tincidunt id. Aenean pulvinar placerat nulla, non eleifend magna luctus sit amet. Sed nec pharetra tellus. Aliquam tempor pretium urna in vulputate. Etiam feugiat ullamcorper convallis. Maecenas metus nisl, dignissim vel pulvinar nec, fermentum quis mi. Nunc vehicula, orci non maximus congue, est metus venenatis elit, nec suscipit eros eros ut lectus. Etiam luctus venenatis nulla, in condimentum mauris tincidunt quis. Nullam vel elementum lacus. Pellentesque a tortor nec odio tincidunt sollicitudin at vel ante. Donec nec purus eget massa elementum eleifend ac eget ipsum.',
    precio: '50'
    }

  ]
    };
     
})

/*
* > Factory (Category)
* Get the categories from the API REST on wordpress.
*/
.factory('categoriasFactory', function(){
     
         return {
        categorias: [
    { nombreCategoria: 'Vino Tinto', id: 1  },
    { nombreCategoria: 'Vino Blanco', id: 2 },
    { nombreCategoria: 'Vino Rosado', id: 3 },
    { nombreCategoria: 'Vino Espumoso', id: 4 },
  ]
    };
     
})

/*********************************************
*
* > Controller for login
*
*********************************************/

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $window) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

/*********************************************
*
* > Controller for categories
*
*********************************************/

.controller('categoriasCtrl',  ['$scope', '$rootScope', 'categoriasFactory',
  function($scope, $rootScope, categoriasFactory){
  
  $scope.categorias = categoriasFactory.categorias;

}])

/*********************************************
*
* > Controller for wines (Vinos)
*
*********************************************/

  .controller('VinosCtrl', ['$scope', '$filter', '$log', '$rootScope', 'filterFilter', '$stateParams', 'vinosFactory',
    function($scope, $filter, $log, $rootScope, filterFilter,  $stateParams, vinosFactory) {
  
  
  $scope.vinos = vinosFactory.datosFactoria; // Get all elements from wines factory.
  filterFilter = $filter('filter');   // Init filter
  $scope.vinos = filterFilter($scope.vinos, $stateParams.categoria, false); // Filter the data using the category given.

  $scope.search = {}; // Create a new object to store the data from search.

  if($scope.vinos.length > 4){

    $scope.vinosScroll = $scope.vinos.slice(0,3); // Pre-fill vinosScroll to work with infinit scroll
    var counter = 3;  // Counter init.
    $scope.noMoreItemsAvailable = false; // variable to infinit scroll

  } else {

      $scope.vinosScroll = $scope.vinos
      counter = 0;
      $scope.filtered = $scope.vinosScroll;
      $scope.noMoreItemsAvailable = true; // Flag to stop infinit scroll

  }

  $scope.loadMore = function() {
    
    $scope.vinosScroll.push($scope.vinos[counter]);
    
    /*if ( $scope.playlistsScroll.length == 7 ) {
      $scope.noMoreItemsAvailable = true;
    }*/
    
    $scope.$broadcast('scroll.infiniteScrollComplete');
    counter++;
    $scope.filtered = $scope.vinosScroll;

  };

  $scope.filterItems = function() {

    $log.debug('Search: ' + $scope.search.vino);
    $scope.filtered = filterFilter($scope.vinos, $scope.search.vino, false);

  }

}])


/*********************************************
*
* > Controller for wine detail
*
*********************************************/

.controller('VinoCtrl',  ['$scope', '$stateParams', '$log', '$rootScope', '$filter', 'vinosFactory', 'filterFilter',
  function($scope, $stateParams, $log, $rootScope, $filter, vinosFactory, filterFilter) {
  
    $scope.vinoID = $stateParams.id;
    filterFilter = $filter('filter');
    $scope.datos = filterFilter(vinosFactory.datosFactoria, {id : $scope.vinoID}, false);
    $scope.nombreVino = $scope.datos[0].nombreVino;
    $scope.imagen = $scope.datos[0].urlImage;
    $scope.descripcion = $scope.datos[0].descripcion;
    $scope.precio = $scope.datos[0].precio;

    if($scope.datos[0].comidas != null){

      $scope.allComidas =  $scope.datos[0].comidas;

      
    } else {
      $scope.comida = 'No hay';
    }

    $log.debug("print: ", $scope.allComidas);

}])
  
.config(function($logProvider){

  $logProvider.debugEnabled(true);

});;
