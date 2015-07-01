angular.module('fhiraccenture.controllers', [])


.controller('PatientsCtrl', function ($scope, Patients) {

    $scope.patients = Patients.all();
    $scope.remove = function (patient) {
        Patients.remove(patient);
    }
})

.controller('PatientDetailCtrl', function ($scope, $stateParams, Patients) {
    $scope.patient = Patients.get($stateParams.patientId);
})

.controller('EncounterCtrl', function ($scope, $state, $stateParams, Patients, Hospital, Diagnosis, Encounter, Practitioner) {
    $scope.hospital = Hospital.get();
    $scope.patient = Patients.get($stateParams.patientId);
    $scope.diagnosis;
    $scope.doctor;

    $scope.findDiagnosisMethod = function (query) {
        var data = Diagnosis.getQuery(query);
        return data;
    }
    $scope.findDoctorMethod = function (query) {
        var data = Practitioner.getPractitioner(query);
        return data;
    }

    $scope.admitPatient = function (form) {
        if (form.$valid) {
            Encounter.admitPatient($scope.patient, $scope.hospital, form.practitioner_name.$viewValue, form.diagnosis_name.$viewValue);
            console.log('Patient Admitted!');
            $state.go('tab.patients');
        }
    }
})

.controller('HospitalCtrl', function ($scope, Hospital) {
    $scope.hospital = Hospital.get();
});