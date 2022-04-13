# Mortgage calculator project

This is a test project where you can create/edit/delete banks and apply the parameters in your banks to calculate your mortgage payment plan.

## Client

### Start locally:

```
    cd client
    npm install
    npm start
```

### Live demo: 
[https://the-banker-xd.herokuapp.com](https://the-banker-xd.herokuapp.com/)

### Tech stack: 
TypeScript, React, Redux Toolkit, CSS Modules

## Server

### Start locally:

```
    cd server
    npm install
    npm run dev
```

### Live: 
[https://the-banker-server.herokuapp.com](https://the-banker-server.herokuapp.com/)

### Routes:

GET /auth/users/:userId  
POST /auth/register  
POST /auth/login

GET /banks/:userId  
POST /banks  
PATCH /banks  
DELETE /banks/:bankId  

### Tech stack: 
TypeScript, Express, MySQL

