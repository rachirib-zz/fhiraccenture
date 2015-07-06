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

.controller('EncounterCtrl', function ($scope, $state, $stateParams, $ionicModal, $ionicBackdrop, Patients, Hospital, Diagnosis, Encounter, Practitioner) {
    $scope.hospital = Hospital.get();
    $scope.patient = Patients.get($stateParams.patientId);
    $scope.diagnosis;
    $scope.doctor;
    $scope.admissionType = "A";
    $scope.patientClass = "outpatient";

    $scope.findDiagnosisMethod = function (query) {
        var data = Diagnosis.getQuery(query);
        return data;
    }
    $scope.findDoctorMethod = function (query) {
        var data = Practitioner.getPractitioner(query);
        return data;
    }


    $ionicModal.fromTemplateUrl('errormodal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });

    $scope.admitPatient = function (form) {
        if (form.$valid) {
            $ionicBackdrop.retain();
            Encounter.admitPatient($scope.patient, $scope.hospital, form.practitioner_name.$viewValue, form.diagnosis_name.$viewValue, $scope.admissionType, $scope.patientClass).then(function (response) {

                Patients.admitPatient($stateParams.patientId);
                $ionicBackdrop.release();
                $state.go('tab.patients');
            }, function (reason) {
                $ionicBackdrop.release();
                $scope.errorMessage = reason;
                $scope.openModal();
            });


        }
    }
})

.controller('HospitalCtrl', function ($scope, $state, Hospital, Patients) {
    $scope.hospital = Hospital.get();
    $scope.dismissPatients = function () {
        Patients.dismissPatients();
        $state.go('tab.patients');
    }


});