import React from 'react'
import ReactDOM from 'react-dom/client'

// Redux 
import { Provider } from 'react-redux'
import { store } from 'store/index.ts'

// Robot font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Styles
import './index.css'

// Components
import { App } from 'App'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
)
