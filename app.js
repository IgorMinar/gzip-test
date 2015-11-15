System.register(['angular2/angular2', './app/gzip-test'], function(exports_1) {
    var angular2_1, gzip_test_1;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (gzip_test_1_1) {
                gzip_test_1 = gzip_test_1_1;
            }],
        execute: function() {
            angular2_1.bootstrap(gzip_test_1.GzipTestApp);
        }
    }
});
//# sourceMappingURL=app.js.map