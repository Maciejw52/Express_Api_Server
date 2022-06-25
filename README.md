# P1_Express_Api_Server

This project is split across two git repositories.
- [P1_Film_review_webiste](https://github.com/Maciejw52/Film_review_website) is the frontend/client-side built with React js utilising Axios a Promise based HTTP client.
- [P1_Express_Api_Server](https://github.com/Maciejw52/P1_Express_Api_Server) is the backend/server-side built with Express.js and Node.js built using the Model-View-Controller (MVC) software architecture.

The general purpose of this project is to learn and get familiar with frontend and backend JavaScript development to build a film review website using the popular MERN (MongoDB, Express, React, Node) stack. For this project, I used MongoDB Atlas to host the database and Heroku to host my Express server and my client-server. In this server part of the project, I utilised jest to test responses from HTTP get, post, delete and patch requests made by the client. The Nodemon package allowed the server to be restarted after every save in development mode. Mongoose was used as an interface between the server and database, due to its built-in type casting, validation, query building, etc.

For setting up the database you may install the community version of MongoDB on your PC or run this on MongoDB Atlas.

## Project Setup

- Clone the git repository in a chosen directory
- Inside the directory open the terminal and run <code> npm install </code>.
- Create a .env file in the main directory and set private parameters 

<code>DATABASE_URL=mongodb://localhost/library</code>
  
<code>NODE_ENV = development</code>
  
<code>PORT = 8000</code>

- Then just run <code> npm devStart</code> if running in development

### Packages used
- cors: ^2.8.5
- dotenv: ^16.0.1
- express: ^4.18.1
- jest: ^28.1.1
- mongodb-memory-server: ^8.7.1
- mongoose: ^6.4.0
- nodemon: ^2.0.16
