## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
## Migration

```bash
$ npx prisma migrate dev --schema libs/prisma/schema/devices/schema.prisma
```
<!-- Note: devices is an example -->

## Adding New Schema

```bash
$ npx prisma generate --schema libs/prisma/schema/devices/schema.prisma  
```
<!-- Note: devices is an example -->

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
