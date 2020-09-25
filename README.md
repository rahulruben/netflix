# Amazon Clone

Netflix clone a netflix representation in ReactJS using the Context API for state management<br />
The project follows the compound component architecture and uses styled-components to style the components<br />
Used Email Authentication API from firebase to setup a Sign-up and Sign-In which also stores the profile information like name and profile number<br />

[Dashboard](http://netflix-1e41b.web.app/)

## Technology Stack
**UI Layer**: [React](https://reactjs.org/)<br />
**State Management**: React's Context API<br />
**Pattern**: Compound Components<br />
**Styling**: [Styled Components](https://styled-components.com/)<br />
**Authentication**: Firebase Email Authentication with Profile<br />
**API**: Axios<br />
**Movies API**: [TMDB](https://www.themoviedb.org/)

**Pages**
1. Landing
2. Sign Up with Email Sign up functionality
3. Sign In with Email Sign In functionality
4. Profiles
5. Movies Dashboard

**Features:**
1. Email Sign In and Sign up functionality.
2. Random Banner update and movie shuffles.
3. Stripe payment confirmation.
4. Error messages for incorrect sign-in.

**TMDB API Setup:**
1. Create a TMDB account.
2. Get the API Key from the dashboard.
3. Copy `API key` and add to the `/src/api/request.js` file `%API_KEY_HERE%`

**Firebase Login Setup:**
1. Login to firebase via email account.
2. Enable the Authentication Service for the app registered.
3. Copy `firebase JS config` and add to the `/src/lib/firebase.prod.js` file `%FIREBASE_CONFIG_HERE%`


## Installation

### `npm install`

## Scripts

In the project directory, you can run:

### `npm start` in the root directory to spin up UI

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm start` in the `/server` directory to spin up the server
Opens the server for accepting API requests: [http://localhost:5000](http://localhost:5000)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
