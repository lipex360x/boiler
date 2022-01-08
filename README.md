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
  3. Execute ORM Migrations: `yarn orm:run`
  4. Create Admin User: `yarn seed:run`
  5. Start API REST: `yarn dev`

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

##### API command
  * `dev`: initialize API

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
