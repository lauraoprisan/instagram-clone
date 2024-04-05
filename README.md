

# Instagram Clone App
<a href="https://social-app-instcl.vercel.app/" target="_blank">
    <span>Link to the app</span>
</a>


## Description of the App
This is a basic instagram clone that I have build by following this youtube tutorial: https://www.youtube.com/watch?v=RMScMwY2B6Q&t=2441s. However, I've done most of the frontend myself in CSS. I've also implemented the save functionality and hooks for getting the liked and saved posts to display them in the authuser profile page.

The app is build with React and Firebase.

## Instructions for running the application locally

Steps:
 - clone the repository
 - in the terminal:
    - navigate to the instagram-clone directory
    - npm i
    - create the env file in the root directory, adding the env variables that permit connection to the firebase (*)
    - configure your firebase app (**)
    - npm run dev

(*) The env files should include the following:

    VITE_FIREBASE_API_KEY = <your_data> <br />
    VITE_FIREBASE_AUTH_DOMAIN = <your_data> <br />
    VITE_FIREBASE_PROJECT_ID = <your_data> <br />
    VITE_FIREBASE__STORAGE_BUCKET = <your_data> <br />
    VITE_FIREBASE_MESSAGING_SENDER_ID = <your_data> <br />
    VITE_FIREBASE_APP_ID= <your_data> <br />
    VITE_FIREBASE_MEASUREMENT_ID = <your_data> <br />
    VITE_FIREBASE_MEASUREMENT_ID = <your_data> <br />

These env variables are provided by firebase when you register an app.

(**) To make the app work in your firebase, you have to add services used in the firebase project (authentification with email/password and with Google, firestore database, storage).

The src/firebase/firebase.js does not exists in all commits (mostly at the beginning of the project), and if you want to run the app make sure it exists. If it doesn't, you have to add it from later commits!


## Optimisations

Some optimisations are:
- adjusting the height of the comment while writing it
- making a loading component that actually looks nice for feedposts, profile posts
- make a spinner loader for buttons
- show toast (like showing info box with error in signup/login) would be nice
- adding new features
- sort likes and saved posts by date

## Notes
Notifications are not yet implemented.
The vercel.json file is added to solve some 404 errors. This is caused by vite.


## Tech used: ![HTML5 BADGE](https://img.shields.io/static/v1?label=|&message=HTML5&color=23555f&style=plastic&logo=html5)![CSS BADGE](https://img.shields.io/static/v1?label=|&message=CSS3&color=285f65&style=plastic&logo=css3)![JAVASCRIPT BADGE](https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=3c7f5d&style=plastic&logo=javascript)![REACT BADGE](https://img.shields.io/static/v1?label=|&message=REACT&color=23555f&style=plastic&logo=react)![FIREBASE BADGE](https://img.shields.io/static/v1?label=|&message=FIREBASE&color=fcba03&style=plastic&logo=firebase)




