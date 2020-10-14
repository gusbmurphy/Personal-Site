---
backBurner: false
date: 2020-08-03T02:39:11.527Z
title: What About A Band Called
tags:
  - React
  - Redux
  - Express
  - MongoDB
faIcons:
  - name: node-js
    description: NodeJS
  - name: unity
    description: Unity
devicons:
  - name: devicon-express-original
    description: Express
  - name: devicon-mongodb-plain
    description: MongoDB
  - name: devicon-typescript-plain
    description: TypeScript
  - name: devicon-babel-plain
    description: Babel
  - name: devicon-webpack-plain
    description: Webpack
  - name: devicon-bootstrap-plain
    description: Bootstrap
links:
  - display: whataboutabandcalled.com
    url: https://whataboutabandcalled.com/
  - display: GitHub
    url: https://github.com/gusbmurphy/what-about-a-band-called
shortDesc: A place to share and rank ideas for band names, and my first real
  full-stack application. This was a lot of fun to put together, and a great
  learning experience.
description: >-
  My first non-trivial, full-stack web application, What About A Band Called was
  a great learning experience for me. My minimum viable product was to allow
  users to create accounts, submit names, vote on names, and have a variety of
  sorting options to see those names. The functionality isn't anything
  ground-breaking, but really getting my hands dirty with all of the
  technologies and frameworks was invaluable:


  * **React** was my choice of front-end frameworks. I began by using the lifecycle methods, but about halfway through development I caught a glimpse of **React Hooks**, and ultimately refactored all the components to use them.

  * Moving towards the backend, I used **React-Redux** to do all of my state management, and **Redux-Saga** middleware to help with asynchronicity. Working with sagas (to me) is great—after getting over the learning curve and getting more familiar with generator functions, I think it's let me write much more efficient code, and more easily testable code.

  * Speaking of testing, I used **Mocha**, **Chai**, **Enzyme**, and **Sinon** to write some tests. Actually, I ended up writing a [bunch](https://github.com/gusbmurphy/what-about-a-band-called/commit/d094f3f4c1631dce46cab08dc11130ffe4e228ab) of unit tests. However, my failure to stop switching around technologies lead me to eventually move the whole project over to **TypeScript**. Paired with the incredible **Redux Toolkit**, I ended up making all of those precious unit tests obsolete. In it's current state, however, the application doesn't have any meaningful testing (a yikes that I'll hopefully get around to un-yikesing).

  * On the other side of the application is a **NodeJS** server using **Express**, communicating with a **MongoDB** database. I ended up trying to see how much I could get out of **Mongoose**, and eventually started using **Typegoose**—a great library that (paired with Typescript), does a fantastic job of getting close to (maybe achieving? I'm not smart) immutable data types. Again, there were a lot of unit tests I had written earlier that ended up being rendered useless with the implementation of this typing.

  * Finally, it's all deployed on **Heroku**. I also made a conscious decision to not begin with Create React App, or something similar. I really wanted to work through the necessary development environment setup with **Webpack**, **Babel**, and **ESLint**, because I knew it would be pretty easy for me to not pay any attention to them if they were already working fine! I really got to challenge myself by repeatedly breaking everything by trying multiple times to move everything over to Typescript.


  The project is still on going—I'd like to make it look pretty and so boilerplate-y. With any luck, I'll actually keep working on it!
previewImage:
  - https://res.cloudinary.com/dtc0i7udk/image/upload/v1596425098/personal-site/Kapture_2020-08-02_at_22.22.44_plorcx.gif
imageGallery:
  - https://res.cloudinary.com/dtc0i7udk/image/upload/v1596425098/personal-site/Kapture_2020-08-02_at_22.22.44_plorcx.gif
templateKey: work
---
