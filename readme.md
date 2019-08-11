# Weather Service
A city weather Node.js REST service using [Express 4](http://expressjs.com/).
## Running locally

```
npm install
npm start
``
## Running test
```
npm test
```
## Enpoints
### Get city by id
example: http://localhost:8080/cities/2834072
### Get cities in 10 km radius by latitude and longitude
example: http://localhost:8080/cities?lat=49.48&lng=8.44
### Get weather by city ID
example: http://localhost:8080/cities/2834072/weather
