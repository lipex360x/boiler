### Recommended Operating System
  * Linux Ubuntu
  * Apple OS X
  * WSL <small>([click here](https://gist.github.com/lipex360x/5f8fb16902377a731d501a01568e36e0) to see how to configure)</small>

---

### Minimum Environment
  * **Node v12+** (<small>NVM Recommended</small>)
  * **Docker**
  * **Docker-Compose**
  * **Yarn**

---

### Start GEN API

  1. Install all dependencies: `yarn`
  2. Generate Startup files: `yarn gen Start`
  3. Initialize Docker: `docker-compose up -d`
  4. Execute ORM Migrations: `yarn orm:run`
  5. Create Admin User: `yarn seed:run`
  6. Start API REST: `yarn dev`

---

### Insomnia Collection

File Import

  * Json File: `src/shared/utils/insomnia.json`
  * URL:`https://raw.githubusercontent.com/lipex360x/gen-api-boilerplate/master/src/shared/utils/insomnia.json`

---

### Databases available via docker-compose

Database  | Port | Docker Image
------------- | ------------- | -------------
PostgreSQL  | 5432 | bitnami/postgresql:latest
MongoDB  | 27017 | bitnami/mongodb:latest
Redis  | 6379 | redis:alpine

To more information, please consult `docker-compose.yml` in root path

---

### Terminal Scripts

Starts with `yarn` command (ex.: `yarn dev`)

##### Automatic Generate
  * `gen`: Start Plop Generate

##### API command
  * `dev`: initialize API in develop mode (TS Files)
  * `build`: build app to deploy
  * `start`: initialize API in production mode (JS files)

##### Jest tests
  * `test`: run Unit Tests
  * `test:c`: clear cache tests

##### TypeORM
  * `orm`: execute TypeORM CLI
  * `orm:show`: show migrations status
  * `orm:create`: create a clean migration
  * `orm:run`: execute all migrations
  * `orm:revert`: rollback the last migration

##### TypeORM Seed
  * `seed:config`: show seeds configuration
  * `seed:run`: execute all seeds
