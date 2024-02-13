# 0: Planning 

## IDEA
Introducing CaloTrack, a personalized calorie adherence app designed to empower users on their wellness journey without any moral judgement! Say goodbye to traditional weight-centric apps and welcome a new era of mindful eating and balanced living.

CaloTrack allows users to set their own calorie range based on their own individual goals and preferences. Then the app will assign colors for each tracked date based on this range.
The end result is a simple visual representation of how many days the user has successfully stayed within their chosen calorie range each month. This will allow users to gain valuable insights into their eating habits and patterns. Furthermore, it will allow users to track their progress over time, identify trends, and make informed decisions to support their overall well-being.

The goal is to help users see their eating habits as the ultimate goal, rather than viewing them merely as a means to an end such as losing or gaining weight. This approach fosters the development of enduring, healthy eating habits.

## WireFrame
https://drive.google.com/file/d/1cWHiQE81FAT80KeZlNZigus6c2F_pfqb/view?usp=sharing

## Task Planning and Progress Management ##
https://trello.com/invite/b/9v2eJ1o4/ATTI17df76aca97dffc6d5a031f3ac43ef31CB088989/calorie-adherence-tracking-app-dev


# 1: BACK END SET UP
### Technologies Used ###
* Node.js
* Express
* MongoDB + Mongoose
* Bcrypt to hash user passwords

### Middleware Used ###

* cors so that front end to connect to backend 
* morgan as a logger
* express.json to have data in req.body
* express.urlencoded 

            
# 2: Front END SET UP

### Technologies Used ###
* React { hooks: useEffect, useState, useContext, useRef }
* MUI library for UI (https://mui.com/material-ui/getting-started/)
* React Bootstrap 
* react-router-dom { hooks: BrowserRouter }

### Third Party API Used ###

This application access the FoodData Central API (https://fdc.nal.usda.gov/api-guide.html) to get accurate and up-to-date information of the dietary analysis of food items. The FoodData Central API is developed by the United States Department of Agriculture (USDA), and offers extensive information about various food items, including their nutritional content, serving sizes, and ingredients. In this application, the first item that comes as a response to a user-entered query word is selected and the serving size, calories per serving, and the macro nutrients content (in grams) of that item is returned to the user. 

### Pictures and Other Media 
* Landing Page Foods Picture: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.culinarynutrition.com%2F10-health-habits-to-start-right-now%2F&psig=AOvVaw1duyDz5VqJAOH1Yi9oT_R7&ust=1707848993995000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODNvba3poQDFQAAAAAdAAAAABAJ
* <a href="https://www.freepik.com/free-ai-image/colorful-fantastical-depiction-brain_69877644.htm#page=2&query=knowledge%20is%20power&position=4&from_view=search&track=ais_ai_generated&uuid=cfdd02cb-6c8c-4d76-89df-5c67b7c57a67">Image By freepik</a>

# 3: Upcoming Updates ###
## 3.1  Upcoming Updates in the Backend 

## 3.2 Upcoming Updates in the Frontend
A Year component that allows users to select a month, 
A Calendar component that is updated to render the calendar for the selected month of the year. 
An about page that explains the philosophy behind the app.
# Other Resources
* https://github.com/alessandradocouto/landing-page-template-reactjs
* https://www.youtube.com/watch?v=wyVFo2X5IM8
* https://www.youtube.com/watch?v=uvS9MavVbao
*https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns


<br>

# Code Explanation by File

# Backend Code

#### conn.js
The function on this file attempts to connect to a MongoDB database using the mongoose library. It connects to the database using the process.env.ATLAS_URI (which can be found on the .env file) variable, which is expected to contain the connection string to the MongoDB database.

If the connection is successful, the function logs a message to the console indicating that the connection was successful. If the connection fails, the function logs an error message to the console containing the error message.

#### localEnv.js and .env
The code on the localEnv file imports the dotenv package and calls the config method on it. Dotenv is a package that allows you to load environment variables from a .env file into your Node.js process. The environment variable defined in the .env file is ATLAS_URI which contains the URI of the MongoDB database that this application is storing data at. Port 3000 is also defined in the .env file to be used as the port number on which the application will run. 

#### calories.js (Model)
This code defines a new Schema for a collection of calorie consumption records called CalorieConsumption. The Schema defines three fields: user, date, and totalCalories.

The user field is a reference to another Schema called User, which is defined elsewhere. This means that the user field will store the ID of the associated User document.The date field is of type Date, which means it will store a date value.The totalCalories field is of type Number, and it has several constraints: it is required, it has a default value of 0, it must be a positive value less than or equal to 10000, and it must be a number.

The code ends by exporting the model, which will make it available for use in other parts of the application.
#### calories.js (Route)

#### users.js (Model)
This page contains a MongoDB schema definition for a user model. It defines the structure of the user data, including their username, email, password, and age.

The code snippet starts by importing the necessary modules: mongoose and bcrypt. Next, the code defines the structure of the user data using a Schema object from mongoose. The schema defines the properties of the user, including their username, email, password, and age.

The code also sets some options for the schema, including enabling timestamps and converting the document to JSON. This is done by setting the toJSON option to a transform function that removes the password from the converted document.

The code then defines an index for the email and username fields to ensure that they are unique. The code then defines a pre-save hook that hashes the password before saving it to the database. This is done by calling the bcrypt.hash function and passing in the password and the salt rounds. Finally, the code exports the model using the mongoose.model function and gives it the name User.

#### users.js (Route)
The code starts by importing the necessary modules: express for creating routes, bcrypt for hashing passwords, and User from a users.js model file. Then, a constant SALT_ROUNDS is defined for the number of rounds of encryption to use when hashing passwords. The router variable is instantiated as a new instance of Router from the express module so that the following routes can be created. 

The first route, GET /, returns all users in the database. The code uses the User.find() method to retrieve all users from the database and stores them in a variable users. The response is then sent with a status code of 200 and the JSON representation of the users.

The second route, GET /:id, returns a user based on their ID. The code first retrieves the user from the database using the User.findById() method and stores it in a variable user. It then checks if the user exists using a conditional statement. If the user does not exist, a response with a status code of 404 and a message is sent. If the user exists, the response is sent with a status code of 200 and the JSON representation of the user.

The third route, POST /, creates a new user. The code logs the request body and attempts to hash the password using the bcrypt.hash() method. It then creates a new user using the User.create() method, passing in the request body and the hashed password. The response is sent with a status code of 203 and the JSON representation of the new user.

The fourth route, PUT /:id, updates a user's information. The code first retrieves the user's ID from the request parameters and stores it in a variable id. It then retrieves the request body and stores it in a variable body. The code then checks if the request body contains a password. If it does, the password is removed from the body and a log message is printed. The code then updates the user in the database using the User.findByIdAndUpdate() method, passing in the user ID, the updated body, and {new: true} to return the updated user. The response is sent with the JSON representation of the updated user.

The fifth route, DELETE /:id, deletes a user. The code retrieves the user ID from the request parameters and stores it in a variable id. It then deletes the user from the database using the User.findByIdAndDelete() method. The response is sent with a message of "User deleted" and the JSON representation of the deleted user.

Finally, the code exports the router instance that is then imported into index.js.

### Index.js

As the main file of this web application, this file uses several Node.js modules, including express, cors, morgan, and dotenv, and holds all the routes available in the application.

The first two lines import the modules express and cors. Express is a popular Node.js framework for building web applications, while cors is a middleware that allows cross-origin resource sharing (CORS), which is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. The next two lines import the module morgan, which provides a simple and flexible way to log requests to the server in a format that is easy to read. The next line imports the module dotenv, which is a module for loading environment variables from a .env file into the Node.js environment. This allows us to store sensitive information, such as passwords and API keys, outside of our code repository.

The next line creates a new instance of the express module, which is the main component of an Express.js application. The next line sets a constant called PORT, which is the port on which the server will listen for incoming requests. If the PORT environment variable is set, it will use its value; otherwise, it will use the default value of 3000.

The next section of code contains four middleware functions: app.use(cors()), app.use(morgan("dev")), app.use(express.json()), and app.use(express.urlencoded({extended: true})) These middleware functions will be executed for every request to the server.

The cors middleware function allows cross-origin resource sharing (CORS), which is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. The morgan middleware function is a logging middleware that provides a simple and flexible way to log requests to the server in a format that is easy to read.The express.json middleware function is used to parse the request body as JSON.The express.urlencoded middleware function is used to parse the request body as URL-encoded data.

The next line imports two routes modules: usersRoutes and caloriesRoutes.The next line uses the app.use() method to attach the usersRoutes and caloriesRoutes modules to the root URL (/api/users and /api/calories, respectively).

The final line of code is a simple GET route that sends a response of "Welcome" to the client when the root URL is requested.

# Frontend Code
#### NutritionInfo.js (Component)

#### UserContext.js 

#### SignInorUpPage.js

This page contains a React functional component that handles the sign-in and sign-up forms for a user. It uses the React hooks useContext and useState to manage the state of the component, and useRef to manage the references to the input elements. The component has two states: showSignUp, which determines whether the sign-up or sign-in form is shown, and user, which stores the user data after signing in or signing up. The handleSignIn and handleSignUp functions handle the submission of the sign-in and sign-up forms, respectively. They validate the input fields and make a POST request to the backend to sign in or sign up the user. The component returns a main element that contains a heading, a form for signing in or signing up, and a link to switch between the sign-in and sign-up forms.

#### App.css

#### App.js

