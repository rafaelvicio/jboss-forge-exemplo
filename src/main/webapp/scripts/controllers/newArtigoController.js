
angular.module('br.com.rafael.vicio').controller('NewArtigoController', function ($scope, $location, locationParser, flash, ArtigoResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.artigo = $scope.artigo || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The artigo was created successfully.'});
            $location.path('/Artigos');
        };
        var errorCallback = function(response) {
            if(response && response.data) {
                flash.setMessage({'type': 'error', 'text': response.data.message || response.data}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        ArtigoResource.save($scope.artigo, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Artigos");
    };
});