##### Recommended Operating System
  Linux Ubuntu
  Apple OS X
  WSL <small>([click here](http://google.com) to see how to configure)</small>

---

##### Minimum Environment
  * **Node v12+** (<small>NVM Recommended</small>)
  * **Docker**
  * **Docker-Compose**

---

##### Start GEN API

  1. Install all dependencies: `yarn`
  2. Generate Startup files: `yarn gen Start`
  3. Execute ORM Migrations: `yarn orm:run`
  4. Create Admin User: `yarn seed:run`
  5. Start API REST: `yarn dev`

---

##### Databases available via docker-compose

<small>Database  | <small>Port | <small>Docker Image
------------- | ------------- | -------------
<small>PostgreSQL</small>  | <small>5432 | <small>bitnami/postgresql:latest
<small>MongoDB  | <small>27017 | <small>bitnami/mongodb:latest
<small>Redis  | <small>6379 | <small>redis:alpine

<small>To more information, please consult `docker-compose.yml` in root path</small>

##### Packages
  * 

