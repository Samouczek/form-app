import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoadingPage from '@components/LoadingPage';
import { PERSON_PAGE, REGISTRATION_FORM_PAGE } from '@constants/paths';

const PersonPage = lazy(() => import('@components/PersonPage'));
const RegistrationFormPage = lazy(() => import('@components/RegistrationFormPage'));

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingPage />}>
				<Routes>
					<Route path={PERSON_PAGE} element={<PersonPage />} />
					<Route path={REGISTRATION_FORM_PAGE} element={<RegistrationFormPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
