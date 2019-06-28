// JSX JavaScript XML
const App = {
    title: 'New App',
    subtitle: 'This is a sub title. Not as important.',
    options: ['Option One', 'Option Two']
}

const template = (
    <div>
        <h1>{App.title}</h1>
        {App.subtitle && <p>{App.subtitle}</p>}
        {App.options.length > 0 ? <p>Here are your options {App.options}</p> : 'No Options'}
    </div>
);

const User = {
    name: 'Vaughn Jon',
    age: 17,
    location: 'Texas'
}

const templateTwo = (
    <div>
        <h1>Name: {User.name ? User.name : 'Anon'}</h1>
        {(User.age && User.age >= 18) && <p>Age: {User.age}</p>}
        {getLocation(User.location)}
    </div>
)

function getLocation(location){
    if (location) {
        return <p>Location: {location}</p> 
    } 
}

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);