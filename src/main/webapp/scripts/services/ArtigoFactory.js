angular.module('br.com.rafael.vicio').factory('ArtigoResource', function($resource){
    var resource = $resource('rest/artigos/:ArtigoId',{ArtigoId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});