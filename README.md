# Social Media Application

Project Description
Build a simplified social media feed application where users can create posts, follow other
users, and view a feed of posts from the people they follow.
Core Features
1. **User Authentication:** Implement user registration and login with secure password storage.
 Use JWT or session-based authentication to protect user data and routes.

2. **User Profiles:** Allow users to create profiles with a username, profile picture (optional), and a
brief bio.
Display user profiles with their posts and follower/following counts.

3. **Posts:** Enable users to create posts containing text content and/or images.
Store posts in the database along with the associated user and timestamp.
Display posts in a feed format, showing the author's profile picture, username,
and post content.

4. **Following:** Allow users to follow and unfollow other users.
Display a list of users a user is following and their followers.
Generate a personalised feed based on the users a user follows.

## To run Project

It Has 3 Modules

    1. Server
    2. Socket
    3. Client 
## First Run Server

Change the Directory
```javaScript
cd server
```

Install the Dependencies
```bash 
npm install
```

Run Start Project
```
npm start
```

## Then Run Socket

Change the Directory
```javaScript
cd socket
```

Install the Dependencies
```bash 
npm install
```

Run Start Project
```
npm start
```

## Then Run React App as client

Change the Directory
```javaScript
cd client
```

Install the Dependencies
```bash 
npm install
```

Run Start Project
```
npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### Client

`REACT_APP_PUBLIC_FOLDER = http://localhost:5000/images/`

### Server

`PORT = 5000;`

`MONGODB_CONNECTION = "Replace it with your DB URL"`

`JWTKEY = Any thing you want to keep`
