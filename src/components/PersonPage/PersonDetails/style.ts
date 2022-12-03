import styled from 'styled-components';

import { customThemeColors } from '@shared-styles/theme';
import { IMAGE_GENERATING_LINK } from '@constants/paths';

export const StyledContainer = styled.div`
	width: 100%;
	height: 46.25rem;
	border-radius: 31.25rem 3.75rem 18.75rem 6.25rem;
	background-color: ${customThemeColors.backgroundImage};
	box-shadow: 0.625rem 0.25rem 0.25rem ${customThemeColors.backgroundImageShadow};
	padding: 8.75rem 7.625rem 4.5rem 9rem;
	margin-bottom: 1.875rem;
`;

export const StyledImg = styled.div`
	width: 100%;
	height: 383px;
	background-image: url(${IMAGE_GENERATING_LINK});
	background-size: cover;
	border-radius: 12.5rem 1.25rem 6.25rem 3.125rem;
`;

export const StyledNameBox = styled.div`
	width: 100%;
	margin-top: 1.5rem;
	position: relative;

	> p {
		text-align: center;
		font-family: 'Inter', sans-serif;
		font-weight: 800;
		font-size: 3.125rem;
		line-height: 3.75rem;
		margin: 0;
	}

	> div {
		position: absolute;
		top: 0;
		right: 0;
		display: flex;

		img {
			margin-right: 0.625rem;
		}
	}
`;

export const StyledTextBox = styled.div`
	padding-left: 15%;

	p {
		font-family: 'Inter', sans-serif;
		font-style: italic;
		font-weight: 100;
		font-size: 1.25rem;
		line-height: 1.5rem;
	}
`;
