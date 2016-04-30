MyApp.factory('Tasks',function($http){
    var tasksService = {
        all: [],
        getAll: function() {
            var tasks = $http.get('data/tasks.json').then(function (response) {
                tasksService.all = response.data.tasks;
                return response.data.tasks;
            });
            return tasks;
        },
        delete: function(id){
            var cur = 0;
            tasksService.all.forEach(
                function(element,index){
                    if(element.id == id){
                        cur = index;
                    }
                }
            );
            tasksService.all.splice(cur,1);
        },
        save: function(task){
            var lastID = 0;
            tasksService.all.forEach(
                function(element,index){
                    lastID = element.id;
                    if(element.id == task.id){
                        return;
                    }
                }
            );
            tasksService.all.push(
                {
                    id: lastID+1,
                    title: task.title,
                    project: task.project,
                    time: task.time,
                    resource: task.resource,
                    fact_resource: 0,
                    fact_time: 0
                }
            );
        }
    };
    tasksService.getAll();
    return tasksService;
});