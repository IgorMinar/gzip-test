System.register(['angular2/angular2'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1;
    var GzipTestApp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            GzipTestApp = (function () {
                function GzipTestApp() {
                }
                GzipTestApp = __decorate([
                    angular2_1.Component({
                        selector: 'gzip-test-app',
                        providers: [],
                        templateUrl: 'app/gzip-test.html',
                        directives: [],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], GzipTestApp);
                return GzipTestApp;
            })();
            exports_1("GzipTestApp", GzipTestApp);
        }
    }
});
//# sourceMappingURL=gzip-test.js.map