# Weather Fit
The Weather Fit app is designed to provide users with clothing recommendations based on the current weather conditions. Users can sign up, log in, and create collections of clothing items suitable for different weather types. The app also allows users to manage their collections by performing CRUD operations on their saved attires.
## :computer: [Click here](https://weather-app-mj0p.onrender.com/) to see my live project!

## :page_facing_up: About

- App Initialization: When the app is initialized, it sets up event listeners for the signup and login options.
Signup Functionality: The signup functionality allows users to create an account by providing their name, email, and password. This information is sent to the server, where it is securely hashed and stored in the database.

- Login Functionality: The login functionality allows users to log in with their email and password. The server checks if the user exists and validates the password using bcrypt, a secure password hashing algorithm. If the login is successful, a session is created, and the user's email is returned.

- Logout Functionality: The logout functionality destroys the user's session, effectively logging them out of the app.

- Get Weather Functionality: The getWeather functionality is responsible for fetching the current weather data from a weather API. It sends a request to the server with latitude and longitude coordinates (obtained from the user's location), and the server makes an API call to retrieve the weather information. The server then returns the weather data to the client.

- Suggestion Functionality: The suggestion functionality retrieves clothing suggestions based on the current weather. It sends a request to the server with the weather condition, and the server queries the database to find clothing items (tops, bottoms, shoes) that are suitable for the given weather. The server returns the clothing suggestions to the client.

- Collection Functionality: The collection functionality allows users to create collections of clothing items. When a user creates a collection, the collection details (name, weather, user ID, top ID, bottom ID, shoe ID) are sent to the server, which inserts the data into the collections table in the database. The server returns the created collection to the client.

- Read, Update, and Delete Collections: The server provides routes to retrieve collections by user ID and collection ID. These routes query the database and return the requested collections to the client. The client can also delete a collection and update its name.

By implementing this logic, the Weather Fit app enables users to create accounts, log in, view current weather conditions, receive clothing suggestions based on the weather, and manage their clothing collections.


In-app screenshots:
- Sign Up page
![project.png](https://raw.githubusercontent.com/humnazee/Weather-app/7d93fa59da1d18b6d4c88ad8c57b3f146ee8cc6e/signin.png)

- Home page
![project.png](https://raw.githubusercontent.com/humnazee/Weather-app/7d93fa59da1d18b6d4c88ad8c57b3f146ee8cc6e/home.png)

## :User Stories
- User needs to allow their browser to access their location as we are using current location to get weather.
- User can create an account by providing their username, email address and setting a secure password, so that user can start app.
- As a registered user, user can log in to the app using their username and password,and can access personalized features and data.
- App can automatically detect users location and display the weather information, so that user don't need to manually enter their location every time.
- User can make clothing collection according to weather type and can save their collection.This collection can be update collection name or delete aswell.
- This app is providing a user-friendly and visually appealing interface, so that user can easily navigate and understand the weather information.
- User can access on multiple devices (such as desktop, mobile, and tablets), so that user can access the weather information and attire suggestion from anywhere.

## :pencil2: Planning & Problem Solving
- For our planning phase of the Weather Attire App, We focused on defining the app's requirements and features, which includes the different attire categories for summer, moderate, and winter weather. We also created basic wireframes and UI/UX to visualize the app's structure and logic.

![Wireframing](https://raw.githubusercontent.com/arisa010/Weather-app/de10b5040513e5bf7789385026d7c44d3541c99d/image%20(1).png)

![Wireframing](https://raw.githubusercontent.com/humnazee/Weather-app/de10b5040513e5bf7789385026d7c44d3541c99d/image.png)

![Wireframing](https://raw.githubusercontent.com/humnazee/Weather-app/de10b5040513e5bf7789385026d7c44d3541c99d/image%20(2).png)

## :rocket: Cool tech
- JavaScript: A programming language used for client-side and server-side scripting to enhance the interactivity and functionality of web applications.
- CSS: A style sheet language used to describe the presentation and layout of HTML documents.
- HTML: A markup language used for creating the structure and content of web pages.
- PostgreSQL: An open-source relational database management system (RDBMS) used for storing and managing data.
- Node packages (dependencies): These are libraries used in Node.js applications to add specific functionality. The packages used in the Weather Fit app are: 
    - bcrypt: A package for securely hashing and comparing passwords.
    - express: A fast and minimalist web application framework for Node.js.
    - express-session: A session middleware for Express.js that enables session management in web applications.
    - node-fetch: A module that brings the fetch API to Node.js, allowing HTTP requests to be made from the server.
    - pg: A PostgreSQL client for Node.js that provides an interface for interacting with PostgreSQL databases.
    - dotenv: A module that loads environment variables from a .env file into process.env to simplify configuration management.
    - nodemon: A development dependency that automatically restarts the Node.js server when changes are made to the source code, enhancing the development workflow.


## :sob: Lessons learnt
- Improved planning would have been beneficial.

## :white_check_mark: Future features
- our future plan is to add a request message to enable users current location.
- Add an accessories carousel for users to select from.
- Allow users to input their location, display the current weather, and suggest appropriate attire based on that location's weather.
- Incorporate more specific weather conditions like rainy, mostly cloudy, etc., and provide clothing suggestions accordingly.

