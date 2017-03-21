var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type: String, required: "{PATH} is required!"},
    featured: {type: Boolean, required: "{PATH} is required!"},
    published: {type: Date, required: "{PATH} is required!"},
    tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}, function(err, collection) {
        if (collection.length === 0) {
            Course.create({title: 'C# for Sociopaths', featured: true, published: new Date('2015-5-1'), tags: ['C#']});
            Course.create({title: 'C# for Non-Sociopaths', featured: true, published: new Date('2014-5-20'), tags: ['C#']});
            Course.create({title: 'Super Duper Expert C#', featured: false, published: new Date('2016-5-1'), tags: ['C#']});
            Course.create({title: 'Visual Basic for Visual Basic Developer', featured: false, published: new Date('2011-5-11'), tags: ['VB']});
            Course.create({title: 'Pedantic C#', featured: true, published: new Date('2009-3-12'), tags: ['C#']});
            Course.create({title: 'Javascript people over 20', featured: true, published: new Date('2015-5-1'), tags: ['JS']});
            Course.create({title: 'Maintainable Code for Coward', featured: true, published: new Date('2015-5-2'), tags: ['Coding']});
            Course.create({title: 'A Survival Guide to Code Review', featured: true, published: new Date('2013-2-1'), tags: ['Coding']});
            Course.create({title: 'How to Job Hunt without alerting your boss', featured: true, published: new Date('2015-5-12'), tags: ['Misc']});
            Course.create({title: 'How to Keep your Soul and go into Management', featured: false, published: new Date('2015-5-19'), tags: ['Misc']});
            Course.create({title: 'Writing Code that doesn\'t Suck', featured: true, published: new Date('2016-1-1'), tags: ['Coding']});
            Course.create({title: 'Code Review for Jerks', featured: true, published: new Date('2011-7-1'), tags: ['Coding']});
        }
    });
}

exports.createDefaultCourses = createDefaultCourses;