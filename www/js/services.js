angular.module('fhiraccenture.services', [])

.factory('Patients', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var patients = [{
        id: 192830231,
        name: {
            given: 'Robbert',
            middle: '',
            family: 'Sparrow',
        },
        phoneHomeNumber: '(900)485-5344',
        phoneWorkNumber: '(900)583-1221',
        gender: 'M',
        genderFhir: 'male',
        birthDate: '315493200000',
        maritalStatus: 'M',
        address: {
            street: '10 Baltimore',
            zip: '2210',
            city: 'Sydney',
            state: 'NSW',
            country: 'Australia'
        },
        admited: false,
        photo: 'http://news.makemeheal.com/wp-content/uploads/2013/11/hugh-jackman-plastic-surgery.jpg'
  }, {
        id: 812638120,
        name: {
            given: 'Daniel',
            middle: '',
            family: 'Ferdinand',
        },
        phoneHomeNumber: '(900)425-5344',
        phoneWorkNumber: '(900)563-1223',
        gender: 'M',
        genderFhir: 'male',
        birthDate: '1318078800000',
        maritalStatus: 'S',
        address: {
            street: '22 Ferdinand',
            zip: '4410',
            city: 'Melbourne',
            state: 'VIC',
            country: 'Australia'
        },
        admited: false,
        photo: 'http://dirtydiaperlaundry.com/wp-content/uploads/2013/05/photo-115-600x600.jpg'
  }, {
        id: 918292791,
        name: {
            given: 'Adam',
            middle: '',
            family: 'Jhonson',
        },
        phoneHomeNumber: '(900)443-5344',
        phoneWorkNumber: '(900)573-1231',
        gender: 'M',
        genderFhir: 'male',
        birthDate: '657464400000',
        maritalStatus: 'S',
        address: {
            street: '12 Logtown',
            zip: '2231',
            city: 'Brisbane',
            state: 'QLD',
            country: 'Australia'
        },
        admited: true,
        photo: 'http://www.steptoofar.com/wp-content/uploads/2013/06/Headshot2.jpg'
  }, {
        id: 176381093,
        name: {
            given: 'Trevor',
            middle: 'D.',
            family: 'James',
        },
        phoneHomeNumber: '(900)443-4344',
        phoneWorkNumber: '(900)523-1211',
        gender: 'M',
        genderFhir: 'male',
        birthDate: '157726800000',
        maritalStatus: 'W',
        address: {
            street: '140 Randwick',
            zip: '2331',
            city: 'Sydney',
            state: 'NSW',
            country: 'Australia'
        },
        admited: false,
        photo: 'http://cdn.shape.com/sites/shape.com/files/styles/600x600/public/8.-woody-harrelson-420x420.jpg?itok=jjuqy42e'
  }, {
        id: 856392639,
        name: {
            given: 'Melissa',
            middle: '',
            family: 'Harrington',
        },
        phoneHomeNumber: '(900)443-6324',
        phoneWorkNumber: '(900)523-1311',
        gender: 'F',
        genderFhir: 'female',
        birthDate: '24242400000',
        maritalStatus: 'D',
        address: {
            street: '131 Brighton',
            zip: '2531',
            city: 'Brisbane',
            state: 'QLD',
            country: 'Australia'
        },
        admited: false,
        photo: 'https://nostalgiapie.files.wordpress.com/2014/04/a783c025-1dc9-417e-8214-843eb3bc922a-443-000001b2de0f9107.jpg?w=645'
  }];

    return {
        all: function () {
            return patients;
        },
        remove: function (patient) {
            patients.splice(patients.indexOf(patient), 1);
        },
        get: function (patientId) {
            for (var i = 0; i < patients.length; i++) {
                if (patients[i].id === parseInt(patientId)) {
                    return patients[i];
                }
            }
            return null;
        }
    };
})

.factory('Hospital', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var hospital = {
        id: 'SNGEORGKEITH',
        name: 'Hospital St. George Keith',
        phoneNumber: '(900)485-5344',
        address: {
            street: '200 Queens',
            zip: '3402',
            city: 'Brisbane',
            state: 'QLD',
            country: 'Australia'
        },
        logo: 'https://hirereach.ca/employer/logos/20150129085638.jpeg',
        operatorName: {
            family: 'Smith',
            given: 'Linsey',
        },
        employedid: '123141231',
        user: 'l.smith@hgeorgekeith.com',
        extensionNumber: '9982'
    };

    return {
        get: function () {
            return hospital;
        }
    }
})

.factory('Diagnosis', function ($http, $q) {

    var getSnomedDiag = function (query) {

        var deferred = $q.defer();


        $http.get('http://browser.ihtsdotools.org/api/snomed/au-edition/v20150531/descriptions?query=problem ' + query + '&limit=10&searchMode=partialMatching&lang=english&statusFilter=activeOnly&skipTo=0&returnLimit=10&semanticFilter=finding&normalize=true').
        success(function (data, status, headers, config) {
            //resolve the promise
            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
            deferred.reject('ERROR');
            return [];
        });

        //return the promise
        return deferred.promise;
    }


    return {
        getQuery: function (query) {
            if (query.length < 2) {
                return [];
            }
            return getSnomedDiag(query);
        }
    }
})

.factory('Practitioner', function ($http, $q) {

    return {
        getPractitioner: function (query) {
            var practitioners = [{
                id: 812628371,
                name: {
                    prefix: 'MD',
                    given: 'Tom',
                    middle: 'Julious',
                    family: 'Hardy'
                },
                fullName: 'MD. Tom Julios Hardy'
  }, {
                id: 231451232,
                name: {
                    prefix: 'MD',
                    given: 'Sophie',
                    middle: '',
                    family: 'Robertson'
                },
                fullName: 'MD. Sophie Robertson'
  }, {
                id: 957007212,
                name: {
                    given: 'Lucas',
                    middle: '',
                    family: 'Patty',

                },
                fullName: 'MD. Lucas Patty'
  }];


            return practitioners.filter(function (el) {
                return el.fullName.indexOf(query) > -1;
            });
        }
    }
})

.factory('Encounter', function ($http, $q, ApiEndpoint) {

    var millisDateFhir = function (dateString) {

        var date = new Date(parseInt(dateString));
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return year + '-' + monthIndex + '-' + day;
    }

    var admitPatient = function (fhirmessage) {

        var deferred = $q.defer();

        var req = {
            method: 'POST',
            url: ApiEndpoint.url + '/admit',
            headers: {
                'Content-Type': 'application/json'
            },
            data: fhirmessage
        }


        $http(req).
        success(function (data, status, headers, config) {
            //resolve the promise
            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
            deferred.reject('ERROR');
            return [];
        });

        //return the promise
        return deferred.promise;
    }

    return {
        admitPatient: function (patient, hospital, practitioner, diagnosis, admissionType, patientClass) {

            var patientFhir = {
                "resourceType": "Patient",
                "id": "1",
                "identifier": [
                    {
                        "system": "http://hl7.org/fhir/v2/0203",
                        "value": patient.id
                            }
                        ],
                "name": [
                    {
                        "family": [
                                    patient.name.family
                                ],
                        "given": [
                                    patient.name.given,
                                    patient.name.middle
                                ]
                            }
                        ],
                "telecom": [
                    {
                        "system": "phone",
                        "value": patient.phoneHomeNumber,
                        "use": "home"
                            },
                    {
                        "system": "phone",
                        "value": patient.phoneWorkNumber,
                        "use": "work"
                            }
                        ],
                "gender": patient.genderFhir,
                "birthDate": millisDateFhir(patient.birthDate),
                "deceasedBoolean": false,
                "address": [
                    {
                        "line": [
                                    patient.address.street,
                                    patient.address.zip
                                ],
                        "city": patient.address.city,
                        "state": patient.address.state,
                        "country": patient.address.country
                            }
                        ],
                "maritalStatus": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/v2/0002",
                            "code": patient.maritalStatus
                                }
                            ]
                }
            }
            var operatorFhir = {
                "resourceType": "Practitioner",
                "id": "1",
                "identifier": [
                    {
                        "system": "http://hl7.org/fhir/v2/0203",
                        "value": hospital.employedid
                            }
                        ],
                "name": {
                    "family": [
                                hospital.operatorName.family
                            ],
                    "given": [
                                hospital.operatorName.given
                            ]
                },
                "practitionerRole": [
                    {
                        "role": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/practitioner-role",
                                    "code": "ict"
                                        }
                                    ]
                        }
                            }
                        ]
            }
            var practitionerFhir = {
                "resourceType": "Practitioner",
                "id": "3",
                "identifier": [
                    {
                        "system": "http://hl7.org/fhir/v2/0203",
                        "value": practitioner.id
                            }
                        ],
                "name": {
                    "family": [
                                practitioner.name.family
                            ],
                    "given": [
                                practitioner.name.given
                            ]
                },
                "practitionerRole": [
                    {
                        "role": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/practitioner-role",
                                    "code": "doctor"
                                        }
                                    ]
                        }
                            }
                        ]
            }
            var messageFhir = {
                "resource": {
                    "resourceType": "MessageHeader",
                    "contained": [
                    operatorFhir,
                ],
                    "identifier": "000001",
                    "timestamp": new Date().toLocaleTimeString(),
                    "event": {
                        "system": "http://hl7.org/fhir/v2/0003",
                        "code": "A05"
                    },
                    "source": {
                        "name": "QLD_Demo_Mobile",
                        "software": "MCM",
                        "version": "1.0",
                        "endpoint": "54.153.166.126"
                    },
                    "destination": [
                        {
                            "name": "QLD_Demo_Backend",
                            "endpoint": "54.153.166.126"
                    }
                ],
                    "enterer": {
                        "reference": "#1"
                    },
                    "reason": {
                        "coding": [
                            {
                                "code": "01"
                        }
                    ]
                    }
                }
            }
            var encounterFhir = {
                "resourceType": "Encounter",
                "id": "2",
                "identifier": [
                    {
                        "system": "http://hl7.org/fhir/v2/0203",
                        "value": "1231"
                            }
                        ],
                "status": "planned",
                "class": patientClass,
                "type": [
                    {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/v2/0007",
                                "code": admissionType
                                    }
                                ]
                            }
                        ],
                "patient": {
                    "reference": "#1"
                },
                "participant": [
                    {
                        "individual": {
                            "reference": "#3"
                        }
                            }
                        ],
                "reason": [
                    {
                        "coding": [
                            {
                                "code": "01"
                                    }
                                ]
                            }
                        ],
                "serviceProvider": {
                    "reference": hospital.id
                }
            }
            var conditionFhir = {
                "resource": {
                    "resourceType": "Condition",
                    "contained": [
                    patientFhir,
                    encounterFhir,
                    practitionerFhir
                ],
                    "identifier": [
                        {
                            "value": "1"
                    }
                ],
                    "patient": {
                        "reference": "#1"
                    },
                    "encounter": {
                        "reference": "#2"
                    },
                    "code": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": diagnosis.conceptId
                        }
                    ]
                    },
                    "category": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/condition-category",
                                "code": "diagnosis"
                        }
                    ]
                    },
                    "clinicalStatus": "provisional"
                }
            }
            var bundleFhir = {
                "resourceType": "Bundle",
                "id": new Date().getTime(),
                "type": "message",
                "entry": [messageFhir, conditionFhir]
            }

            console.log(JSON.stringify(bundleFhir));
            
            return admitPatient(JSON.stringify(bundleFhir));
        }
    }
});