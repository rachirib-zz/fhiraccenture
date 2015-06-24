angular.module('fhiraccenture.filters', [])

.filter('genderFilter', function () {
    return function (input) {
        return input == 'M' ? 'Male' : 'Female';
    };
})

.filter('maritalStatusFilter', function () {
    return function (input) {
        switch (input) {
        case 'M':
            return 'Married';
            break;
        case 'D':
                return 'Divorced';
                break;
        case 'S':
                return 'Single';
                break;
        case 'W':
                return 'Widowed';
                break;
        }
        return input;
    };
});