import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers"

const store = createStore( rootReducer, composeWithDevTools() )


ReactDOM.render(
	<Provider>

		<BrowserRouter>
			<App />
		</BrowserRouter>

	</Provider>,
	document.getElementById( 'root' )
);

