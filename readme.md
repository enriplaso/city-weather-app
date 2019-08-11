# Weather Service
A city weather Node.js REST service using [Express 4](http://expressjs.com/).
## Running locally

```
npm install
npm start
```
## Running test
```
npm test
```
## Enpoints
### Get city by id
Retunns: the city with name, latitud and longitude, 
example: http://localhost:8080/cities/2834072
```
{
    "longitude": 8.56083,
    "latitude": 49.464439,
    "id": 2834072,
    "name": "Seckenheim"
}
```
### Get cities in 10 km radius by latitude and longitude
example: http://localhost:8080/cities?lat=49.48&lng=8.44
return sample:
```
[
    {
        "id": 2864869,
        "name": "Neuhofen"
    },
    {
        "id": 2867310,
        "name": "Mutterstadt"
    },
    {
        "id": 2933349,
        "name": "Edigheim"
    },
    {
        "id": 3247909,
        "name": "Rhein-Pfalz-Kreis"
    },
    {
        "id": 6555251,
        "name": "Neuhofen"
    }
    ....
]
```
### Get weather by city ID
example: http://localhost:8080/cities/2834072/
return sample:
```
{
    "type": "Clear",
    "type_description": "clear sky",
    "sunrise": "2019-08-11T04:10:33.000Z",
    "sunset": "2019-08-11T04:10:33.000Z",
    "temp": 26.64,
    "temp_min": 23.89,
    "temp_max": 29.44,
    "pressure": 1014,
    "humidity": 39,
    "clouds_percent": 0,
    "wind_speed": 2.1
}
```
