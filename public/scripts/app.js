'use strict';

// JSX JavaScript XML
var App = {
    title: 'New App',
    subtitle: 'This is a sub title. Not as important.',
    options: ['Option One', 'Option Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        App.title
    ),
    App.subtitle && React.createElement(
        'p',
        null,
        App.subtitle
    ),
    App.options.length > 0 ? React.createElement(
        'p',
        null,
        'Here are your options ',
        App.options
    ) : 'No Options'
);

var User = {
    name: 'Vaughn Jon',
    age: 17,
    location: 'Texas'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name: ',
        User.name ? User.name : 'Anon'
    ),
    User.age && User.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        User.age
    ),
    getLocation(User.location)
);

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
