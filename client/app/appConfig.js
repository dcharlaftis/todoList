(function() {
    'use strict';

    //for cors issues
    app
        .config([
            '$httpProvider',
            function($httpProvider) {
                $httpProvider.defaults.useXDomain = true;
                $httpProvider.defaults.headers.common = 'Content-Type: application/json';
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
            }
        ]);
}());
