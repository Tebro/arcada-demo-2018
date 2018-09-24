
# Demo application


## Development instructions

Docker compose file included for quick local environment

Alternatively `yarn dev` can be used for local development.

Requires postgres to either be running on localhost:5432 or configured with `DATABASE_URL` env variable


## API Documentation

### Visitor count

Metod: GET
Status: Implemented
Path: /api/count
Request payload: none
Response payload: 

```
{
  "count": 1337
}
```

