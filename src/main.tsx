import React from 'react'
import ReactDOM from 'react-dom/client'

// Redux 
import { Provider } from 'react-redux'
import { store } from 'store/index.ts'

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
