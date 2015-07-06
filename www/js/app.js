// Fhir Accenture A05  App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'fhiraccenture' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'fhiraccenture.services' is found in services.js
// 'fhiraccenture.controllers' is found in controllers.js
// 'fhiraccenture.filters' is found in filters.js
angular.module('fhiraccenture', ['ionic', 'ion-autocomplete', 'ionic.utils', 'ngMessages', 'fhiraccenture.controllers', 'fhiraccenture.services', 'ionic.service.core',
                                'fhiraccenture.filters'])

.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })
    .constant('ApiEndpoint', {
        url: 'http://54.153.166.126:8080/fhir'
    })

// Identify App
.config(['$ionicAppProvider', function ($ionicAppProvider) {
    // Identify app
    $ionicAppProvider.identify({
        // The App ID for the server
        app_id: 'c2d7bfa0',
        // The API key all services will use for this app
        api_key: '640cde306be230e9dc2c9305f7465cc159d93e1187586d0f'
    });
}])

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.patients', {
            url: '/patients',
            views: {
                'tab-patients': {
                    templateUrl: 'templates/tab-patients.html',
                    controller: 'PatientsCtrl'
                }
            }
        })
        .state('tab.patient-detail', {
            url: '/patients/:patientId',
            views: {
                'tab-patients': {
                    templateUrl: 'templates/patient-detail.html',
                    controller: 'PatientDetailCtrl'
                }
            }
        })
        .state('tab.encounter', {
            url: '/patients/encounter/:patientId',
            views: {
                'tab-patients': {

                    templateUrl: 'templates/encounter.html',
                    controller: 'EncounterCtrl'
                }
            }
        })
        .state('tab.hospital', {
            url: '/hospital',
            views: {
                'tab-hospital': {
                    templateUrl: 'templates/tab-hospital.html',
                    controller: 'HospitalCtrl'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/patients');

});