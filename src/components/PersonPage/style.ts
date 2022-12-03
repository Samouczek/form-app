import styled from 'styled-components';
import { Box } from '@mui/material';

import { customThemeColors, theme } from '@shared-styles/theme';

export const StyledBox = styled(Box)`
	display: flex;
	justify-content: space-between;
	padding: 0.75rem 1.25rem 0 1.25rem;
`;

export const StyledButton = styled.button<{ backgroundColor: string }>`
	width: 14.75rem;
	padding: 0.625rem 0 0.625rem 2.5rem;
	background-color: ${props => props.backgroundColor};
	box-shadow: 0.625rem 0.25rem 0.25rem ${customThemeColors.buttonShadow};
	border: none;
	border-radius: 1.25rem;
	color: ${theme.palette.text.secondary};
	text-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
	-webkit-text-stroke-color: ${customThemeColors.background};
	-webkit-text-stroke-width: 1px;
	font-family: 'Lato', sans-serif;
	font-style: italic;
	font-weight: 400;
	font-size: 1.875rem;
	text-align: left;
	cursor: pointer;
`;

export const StyledProfileBox = styled(Box)`
	max-width: 50rem;
	padding-top: 5.375rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
