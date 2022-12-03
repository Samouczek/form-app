import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from '@shared-styles/theme';
import FontStyles from '@shared-styles/fontStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<FontStyles />
			<CssBaseline />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);

reportWebVitals();
