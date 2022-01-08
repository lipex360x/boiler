#### Recommended Operating System
  * Linux Ubuntu
  * Apple OS X
  * WSL <small>([click here](http://google.com) to see how to configure)</small>

---

#### Minimum Environment
  * **Node v12+** (<small>NVM Recommended</small>)
  * **Docker**
  * **Docker-Compose**

---

#### Start GEN API

  1. Install all dependencies: `yarn`
  2. Generate Startup files: `yarn gen Start`
  3. Execute ORM Migrations: `yarn orm:run`
  4. Create Admin User: `yarn seed:run`
  5. Start API REST: `yarn dev`

---

#### Databases available via docker-compose

Database  | Port | Docker Image
------------- | ------------- | -------------
PostgreSQL  | 5432 | bitnami/postgresql:latest
MongoDB  | 27017 | bitnami/mongodb:latest
Redis  | 6379 | redis:alpine

<small>To more information, please consult `docker-compose.yml` in root path</small>

##### Packages
  * 

