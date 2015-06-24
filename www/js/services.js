angular.module('fhiraccenture.services', [])

.factory('Patients', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var patients = [{
            id: 0,
            name: {
                given: 'Robbert',
                middle: '',
                family: 'Sparrow',
            },
            phoneHomeNumber: '(900)485-5344',
            phoneWorkNumber: '(900)583-1221',
            gender: 'M',
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
            id: 1,
            name: {
                given: 'Daniel',
                middle: '',
                family: 'Ferdinand',
            },
            phoneHomeNumber: '(900)425-5344',
            phoneWorkNumber: '(900)563-1223',
            gender: 'M',
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
            id: 2,
            name: {
                given: 'Adam',
                middle: '',
                family: 'Jhonson',
            },
            phoneHomeNumber: '(900)443-5344',
            phoneWorkNumber: '(900)573-1231',
            gender: 'M',
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
            id: 3,
            name: {
                given: 'Trevor',
                middle: 'D.',
                family: 'James',
            },
            phoneHomeNumber: '(900)443-4344',
            phoneWorkNumber: '(900)523-1211',
            gender: 'M',
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
            id: 4,
            name: {
                given: 'Melissa',
                middle: '',
                family: 'Harrington',
            },
            phoneHomeNumber: '(900)443-6324',
            phoneWorkNumber: '(900)523-1311',
            gender: 'F',
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
        id: 123312,
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
        operatorName: 'Linsey Smith',
        user: 'l.smith@hgeorgekeith.com',
        extensionNumber: '9982'
    };
    return {
        get: function () {
            return hospital;
        }
    }
});