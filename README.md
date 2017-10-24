# Ticket System

Coding challenge for zendesk

## Instruction

Change the config.json file with domain information, username and password to access the API

For the purpose of this task, following is the test account information :
```
  "END_POINT": "@test2577.zendesk.com/api/v2/",
  "username": "contact.miti@gmail.com",
  "password": "qwerty12345"
```
The server listens to port 3000;

To view all tickets 

````
http://localhost:3000/tickets/page/1

````
Click on a particular ticket to view details

To view a ticket directly go to 
````
http://localhost:3000/tickets/id/1
````

Where id represents ticket ID

### Prerequisites

```
Nodejs
```

### Installing

You can install with npm
```
npm install
```

To run
```
npm start
```

## Running the tests

```
npm test
```
