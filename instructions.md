
setup database 

step 1:  setup database
    go to mongodb.com 
    signin 
    click new project 
        click build a cluster 
            teir free plan
            name cluster
            click create cluster 

step 2 add a user 
    not the same as your login
    enter name and password
    set privileges
        use default setting
    
step 3 add ip address 
    automatically white list ip address 

    step 4 connect application 
        click connect your application
            string you will be given to connect to your database


installing dependencies

step 1 create .gitgnore 
    add node_modules/
        stop the dependencies from being added to the repository 
step 2 run npm init -y
step 3 install all dependencies
    express
    express-validator
    bcrypt js
    config
    gravatar 
    jsonwebtoken
    mongoose 
    request

    step 4 dev dependencies
        nodemon
        concurrently

step 5 files 
create server.js file 
    import express
    create server  init app with express
      set route to '/'

step 6 create scripts
    remove test scripts 
    add start script 
        with node server.js 
    add dev script nodemon server.js






    



