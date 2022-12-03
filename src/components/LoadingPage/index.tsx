import React from 'react';

import { CircularProgress, Container } from '@mui/material';

const LoadingPage = (): JSX.Element => {
	return (
		<Container maxWidth='xl' style={{ height: '100vh', textAlign: 'center', marginTop: '25vh' }}>
			<CircularProgress size={'125px'} disableShrink={true} />
		</Container>
	);
};

export default LoadingPage;
