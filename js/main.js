angular.module('3Dqueue', [])
    .controller('QueueController', ['$scope', '$http', function($scope, $http) {
        $http.get('queue.json')
            .then(function(res) {
                $scope.read_json = res.data;
                $scope.queue = [];
                for(let i = 0; i < $scope.read_json.length; i++){
                    let task = $scope.read_json[i];
                    $scope.queue.push(task);
                    //console.log(task);
                    //console.log($scope.queue);
                }
            });

        let newTasks = {
            table: []
        };

        $scope.addItem = function(){
            console.log($scope.newTask);
        };

        $scope.createJSON = function() {
            //testing JSON creation
            newTasks.table.push({"name": "New Thing 1", "user": "Brady"});
            newTasks.table.push({"name": "New Thing 2", "user": "Steve"});

            let updatedJSON = JSON.stringify(newTasks);
            $http.post('http://localhost:6060/update', updatedJSON).then(function(data){ //{"msg": updatedJSON}
                console.log(data);
                console.log("Created file");
            });
            //fs.writeFile('queue2.json', json, 'utf8');

        };


    }]);
