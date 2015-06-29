angular.module('fhiraccenture.controllers', [])


.controller('PatientsCtrl', function ($scope, Patients) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.patients = Patients.all();
    $scope.remove = function (patient) {
        Patients.remove(patient);
    }
})

.controller('PatientDetailCtrl', function ($scope, $stateParams, Patients) {
    $scope.patient = Patients.get($stateParams.patientId);
})

.controller('EncounterCtrl', function ($scope, $state, $stateParams, Patients, Hospital, Diagnosis) {
    $scope.hospital = Hospital.get();
    $scope.patient = Patients.get($stateParams.patientId);
    $scope.diagnosis;

    $scope.findDiagnosisMethod = function (query) {
        var data = Diagnosis.getQuery(query);
        return data;
    }
    
    $scope.admitPatient = function(form){
        if(form.$valid) {
            console.log('Patient Admitted!');
            $state.go('tab.patients');
        }
    }
})

.controller('HospitalCtrl', function ($scope, Hospital) {
    $scope.hospital = Hospital.get();
});