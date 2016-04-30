MyApp.factory('Reports',function($http){
    var reportsService = {
        all: [],
        getAll: function() {
            var reports = $http.get('data/reports.json').then(function (response) {
                reportsService.all = response.data.reports;
                return response.data.reports;
            });
            return reports;
        },
        delete: function(id){
            var cur = 0;
            reportsService.all.forEach(
                function(element,index){
                    if(element.id == id){
                        cur = index;
                    }
                }
            );
            reportsService.all.splice(cur,1);
        },
        save: function(report){
            var lastID = 0;
            reportsService.all.forEach(
                function(element,index){
                    lastID = element.id;
                }
            );
            reportsService.all.push(
                {
                    id: lastID+1,
                    start: report.start,
                    end: report.end,
                    task: report.task,
                    project: report.project,
                    time: report.time,
                    left_time: report.left_time
                }
            );
        }
    };
    reportsService.getAll();
    return reportsService;
});