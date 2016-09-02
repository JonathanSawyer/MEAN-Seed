
angular.module('app.service').factory('CommentService', ['$http', function($http, $q) {
    var Comment = {};
    Comment.get = function(id){
        return $http.get("../api/comments/" + id).then(function (response)
        {
            return response;
        });
    };

    Comment.list = function (){
        return $http.get("../api/comments").then(function(response)
        {
            return response;
        });
    };

    Comment.create = function (comment){
        return $http.post("../api/comments", comment).then(function (response)
        {
            return response;
        });
    };

    Comment.update = function (comment) {
        return $http.put("../api/comments/" + comment._id, comment)
                    .then(function (response)
        {
            return response;
        });
    };

    Comment.delete = function(commentId)
    {
        return $http.delete("../api/comments/" + commentId)
                    .then(function (response) 
        {
            return response;
        });
    }

    return Comment;
}]);