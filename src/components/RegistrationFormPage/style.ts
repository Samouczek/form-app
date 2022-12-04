import styled from 'styled-components';
import { Box } from '@mui/material';
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
