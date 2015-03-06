angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$timeout) {
  var vm = $scope.vm = {};
  vm.items = [];

  for(var i = 0; i < 2 ; i ++){
    var item = {
      title:"名称-" + i,
      url:"http://media.tumblr.com/654387ad5cca537d614a19b6a58293a3/tumblr_inline_n72rm0d0lG1qjfjsx.gif",
    }
    vm.items.push(item);
    console.log(item.title);
  }


  vm.doRefresh = function(){

    var item = {
      title:"名称-" + 1,
      url:"http://media.tumblr.com/654387ad5cca537d614a19b6a58293a3/tumblr_inline_n72rm0d0lG1qjfjsx.gif",
    }

    $timeout(function(){
      vm.items.push(item);

      console.log('loadding complete');
      $scope.$broadcast('scroll.refreshComplete');
    },2000);
  }

  

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('CartCtrl', ['$scope', function($scope){
  var vm = $scope.vm = {};

  vm.doSomething = function(){
    alert('hello');
  }
  
}])
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
