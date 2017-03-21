angular.module('app').controller ('mvMainCtrl', function($scope, mvCachedCourses) {
    $scope.courses = mvCachedCourses.query();
    /*
    $scope.courses = [
        {title: 'C# for Sociopaths', featured: true, published: new Date('2015-5-1')},
        {title: 'C# for Non-Sociopaths', featured: true, published: new Date('2014-5-20')},
        {title: 'Super Duper Expert C#', featured: false, published: new Date('2016-5-1')},
        {title: 'Visual Basic for Visual Basic Developer', featured: false, published: new Date('2011-5-11')},
        {title: 'Pedantic C#', featured: true, published: new Date('2009-3-12')},
        {title: 'Javascript people over 20', featured: true, published: new Date('2015-5-1')},
        {title: 'Maintainable Code for Coward', featured: true, published: new Date('2015-5-2')},
        {title: 'A Survival Guide to Code Review', featured: true, published: new Date('2013-2-1')},
        {title: 'How to Job Hunt without alerting your boss', featured: true, published: new Date('2015-5-12')},
        {title: 'How to Keep your Soul and go into Management', featured: false, published: new Date('2015-5-19')},
        {title: 'Writing Code that doesn\'t Suck', featured: true, published: new Date('2016-1-1')},
        {title: 'Code Review for Jerks', featured: true, published: new Date('2011-7-1')}
    ];
    */
});