import styled from 'styled-components';
import { Box, FormControl, FormControlLabel } from '@mui/material';

import { theme } from '@shared-styles/theme';

export const StyledBox = styled(Box)`
	padding: 6.25rem 12rem 6.25rem 12rem;
	display: flex;
	flex-direction: column;

	> button {
		margin-top: 1.5rem;
		text-align: center;
		padding-left: 0;
		align-self: center;
	}
`;

export const StyledHeading = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	> h1 {
		font-weight: 800;
		font-size: 1.25rem;
		line-height: 2rem;
		text-align: right;
		letter-spacing: 0.15em;
	}

	&:after {
		content: '';
		display: block;
		height: 0.5rem;
		width: 10.375rem;
		background-color: ${theme.palette.primary.main};
	}
`;

export const StyledFormControl = styled(FormControl)`
	.MuiFormControl-root {
		position: relative;
	}
`;
export const StyledFormControlLabel = styled(FormControlLabel)`
	.MuiFormControlLabel-label {
		font-family: 'Inter', sans-serif;
		color: ${theme.palette.text.primary};
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 2rem;
	}
`;

export const StyledText = styled.p`
	font-family: 'Inter', sans-serif;
	color: ${theme.palette.error.main};
	font-weight: 300;
	font-style: italic;
	font-size: 1.25rem;
	line-height: 2rem;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 18%;
	margin: 0;

	@media (max-width: 1130px) {
		position: relative;
		top: 0;
		transform: translateY(0);

		right: 0;
	}
`;
