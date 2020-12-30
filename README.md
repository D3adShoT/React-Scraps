# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

`npm run build` fails to minify





####Further Documentation

reactJS - 
A vibrant javaScript library use to create frontEnd. Super flexible when it comes to integration with any technologies. Delcerative. 


Keywords:
npx --> npm package runner (Installed automatically when you install node)
props --> properties

To create the react app
`> npx create-react-app application-name
`
OR

`
> npm install create-react-app -g
> create-react-app application-name
`

navigate in the created folder

start your project
`> npm start`

About the files Created : 
package.json >> Consists the list of dependencies 
package-lock.json OR yarn-lock.json (depending how you created the project) 
gitignore
readme


Flow of execution.
index.html >> {'root' enters in DOM}>> index.js executes >> App.js executes to finally execute the html
 
Components --> Descibe part of the user interface. Reusable and can be nested inside other components.
2 types of components 
-> Stateless funtional components

`funtion Welcome(props){
	return <h1>Hello, {props.name}</h1>;
}`

-> Statefull Class Components

`class Welcome extends React.Components{
	render(){
		return <h1>Hello,{props.name}</h1>;
	}
}`




### LIMITATIONS 
=> Return Statement Should always return 1 html element.
=> Components Should me names with Capital starting









React reserves 'key' prop for itself. We cannot access key prop in child component. It helps react to manage all ui changes for any sort of database changes more efficiently.
NEVER USE INDEX as key unless and untill you get a static list which wont be changing or altered in the future.(assuming the list doesnt contain unique ID else go with that id)


To make API server calls From React
 >>> There is no envolvement of react with the server at all , The react component Just read props and state to render the UI.
 >>> To get the Data rendered on the Web application all we need is to provide the values to the props and state of the components
 >>> To make such http calls we use http libraries like 'axios'. 