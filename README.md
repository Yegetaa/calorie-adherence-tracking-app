# 0: Planning 
## IDEA:

## WireFrame:
https://drive.google.com/file/d/1cWHiQE81FAT80KeZlNZigus6c2F_pfqb/view?usp=sharing

## Task Planning and Progress Management ##
https://trello.com/invite/b/9v2eJ1o4/ATTI17df76aca97dffc6d5a031f3ac43ef31CB088989/calorie-adherence-tracking-app-dev


# 1: BACK END SET UP
### Technologies Used ###
* Node.js
* Express
* Mongoose
* Bcrypt to hash user passwords

### Middleware Used: ###

* cors so that front end to connect to backend 
* morgan as a logger
* express.json to have data in req.body
* express.urlencoded 

            
# 2: Front END SET UP

### Technologies Used ###
* React { hooks: useEffect, useState}

### Third Party API Used ###

This application access the FoodData Central API (https://fdc.nal.usda.gov/api-guide.html) to get accurate and up-to-date information of the dietary analysis of food items. The FoodData Central API is developed by the United States Department of Agriculture (USDA), and offers extensive information about various food items, including their nutritional content, serving sizes, and ingredients. In this application, the first item that comes as a response to a user-entered query word is selected and the serving size, calories per serving, and the macro nutrients content (in grams) of that item is returned to the user. 



# 3: Upcoming Updates ###
