## Hi Platform Front-End Challenge

#### What

Everyone loves music. So we'd like you to create a web app based on Spotify's API to retrive data about **Artists**, **Albums** or **Tracks**.

Based on user search choice and input on a search bar, you **must** retrieve a list containing the following info:
* If Artist search is selected:
  * All arists matching the word searched, containing: Image, name, genres and popularity;
* If Album search is selected:
  * All albums matching the word searched, containing: Image, name, artist(s), and availability;
* If Track search is selected:
  * All tracks matching the word searched, containing: Album Image, track name, artist name³, album name and track duration;

##### Details:
* Artists must display the **FIRST** image returned on search and **genres** separated by comma;
* Artists popularity must be tagged within:
  * Over 80: Hot;
  * Between 60 and 79: Cool;
  * Between 30 and 59: Regular;
  * Under 30: Underground
* If a retrieved Album happens to have many Artists, display "Various artists".;
* If a Track happens to have many Artists, display their names separated by comma;
* Artists and Albums must be clickable, showing upon click:
  * Artists: Latest 5 albums;
  * Albums: All of its tracks;
* A user can favorite Artists, Albums and Tracks;


#### Musts:
Your code must follow these requirements:
* Use React, Vue or Angular; (Consider that we are migrating our Front-End stack to use React)
* Fully responsive;
* ES6+;
* Use a module bundler (Webpack, Parcel, Browserify, etc.);
* Linted code;
* CSS pre-processors or CSS-in-JS;

#### Nice to Have:
* State management framework (Redux, Vuex, ngrx);
* Automated tests;
* Add authentication to your WebApp;
* Turn it into a PWA;
* Data Persistence (Cookies, DOMStorage, IndexedDB);
* Micro animations/Micro transitions following Material Design Motion guidelines;
* Host it somewhere as a Live Demo;

Browser Support: IE11+;

You **can** use UI libs as Bootstrap, Foundation, Material-UI, etc.

Design it as something you'd use ;)

[Spotify API reference](https://beta.developer.spotify.com/documentation/web-api/reference/search/search/) 

Have fun!