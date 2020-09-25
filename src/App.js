import React from 'react';
import Main from './pages/main';
import { BrowserRouter as Router } from 'react-router-dom';


function App({ location }) {
	return (
		<Router>
			<Main />
		</Router>
	);
}

export default App;
