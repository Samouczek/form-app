import styled from 'styled-components';
import { Box } from '@mui/material';

import { customThemeColors, theme } from '@shared-styles/theme';

export const StyledBox = styled(Box)`
	display: flex;
	justify-content: space-between;
	padding: 0.75rem 1.25rem 0 1.25rem;
`;

export const StyledProfileBox = styled(Box)`
	max-width: 50rem;
	padding-top: 5.375rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
