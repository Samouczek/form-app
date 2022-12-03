import styled from 'styled-components';

import { customThemeColors } from '@shared-styles/theme';

export const StyledContainer = styled.div`
	width: 100%;
	height: 46.25rem;
	border-radius: 31.25rem 3.75rem 18.75rem 6.25rem;
	background-color: ${customThemeColors.backgroundImage};
	box-shadow: 0.625rem 0.25rem 0.25rem ${customThemeColors.backgroundImageShadow};
	padding: 8.75rem 7.625rem 4.5rem 9rem;
	margin-bottom: 1.875rem;
`;

export const StyledImg = styled.img`
	border-radius: 12.5rem 1.25rem 6.25rem 3.125rem;
`;
