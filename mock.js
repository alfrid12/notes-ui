module.exports = {
    folders: [{
        name: 'Productivity',
        notes: [{
            title: 'To Do',
            text: 'Clean bathroom, finish box-thing, iron'
        }, {
            title: 'Groceries',
            text: 'Sandwich fodder, meat, bagels'
        }]
    }, {
        name: 'Projects',
        folders: [{
            name: 'Notes',
            notes: [{
                title: 'Tech Stack',
                text: 'React Native, Lambda, S3, Serverless'
            }, {
                title: 'MVP UI Functionality',
                text: 'Display all folders and notes on screen'
            }]
        }, {
            name: 'Former',
            notes: [{
                title: 'Tech Stack',
                text: 'Angular, Formly, Express, Mongo'
            }, {
                title: 'MVP UI Functionality',
                text: 'Create and store new forms, render saved forms'
            }]
        }]
    }]
}