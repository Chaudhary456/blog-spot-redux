# Blog-Spot Web-Application.  
## Tech Stack:  

**Node:** `For javaScript runtime environment`

**JavaScript:** `For Scripting and programming`

**React:** `For reusable UI components` 

**Redux:** `For central state management`

**JSON:** `TO store data`

**json-server:** `To host the json file` 

**HTML & CSS:** `For web page skeleton designing ans styling` 
  
## We can perform Create, Read, Delete and Update operations on blogs.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

| Variable |  Description                |
| :-------- | :------------------------- |
| `REACT_APP_API` | http://localhost:8000 |


## Run Locally

Clone the project

```bash
  git clone https://github.com/Chaudhary456/blog-spot-redux.git
```

Install dependencies

```bash
  npm install
```

**Make sure All Environment variables are defined in .env extension file**

Start the application after setting all the environment variables

```bash
  npx json-server --watch data/db.json --port 8000  to run json-server.
```
```bash
  npm start to run react app.
```
```bash
  npm run dev to run both json-server and react app simultaneously.
```
