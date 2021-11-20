
-setup database -

step 1:  setup database
    * go to mongodb.com 
    * signin 
    * click new project 
        * click build a cluster 
            * teir free plan
            * name cluster
           *  click create cluster 

step 2 add a user 
    * not the same as your login
    * enter name and password
   * set privileges
        * use default setting
    
step 3 add ip address 
    * automatically white list ip address 

    step 4 connect application 
       * click connect your application
           * string you will be given to connect to your database


-installing dependencies-

step 1 create .gitgnore 
    * add node_modules/
        * stop the dependencies from being added to the repository 
step 2 run npm init -y
step 3 install all dependencies
    * express
    * express-validator
    * bcrypt js
    * config
    * gravatar 
    * jsonwebtoken
    * mongoose 
    * request

    step 4 dev dependencies
        * nodemon
         * concurrently

step 5 files 
create server.js file 
    * import express
    * create server  init app with express
     * set route to '/'

step 6 create scripts
    * remove test scripts 
    * add start script 
        * with node server.js 
   * add dev script nodemon server.js

-connect database to mongodb-
    * use mongodb key 
    * create a folder called config
        *  inside the folder create a file called default.json
    * the dependancie called config 
            * allows us to use global values we can use through our application
            * default.json file will hold all of these values
            * we want to create a global value for mongodb using the string or key we have      gotten when we signed up for mongodb database
                * called a "mongoURI" 

        in your config folder  
            * create a file called db.js
                 * where we will do our mongodb connection 
                        *  bring in 
                       *  mongoose
                      * config  
                            *  config package  is  needed in orfer to grab the mongoURI
                        put mongoURI in a const db = config.get("mongoURI"); // allows us to get any of the values in that json file
            
    - route files-
        *  we want to break our routes  up by  resourse
              *  user
               * auth
              *  profile
               * post
        create a folder in the root called routes
        * in that a folder called api 
            * users.js
            * auth.js
            * porfile.js
            * post.js

            users.js
                bring in express 
                create express router
                then export file 
                repeat for all other routes // post .auth,etc
        in server.js 
            make sure we can access our routes
                * app.use()









    



