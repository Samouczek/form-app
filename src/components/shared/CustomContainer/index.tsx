import { Container } from '@mui/material';

import { NComponents } from '@typings/components';
import { customThemeColors, theme } from '@shared-styles/theme';

const CustomContainer = ({ children }: NComponents.IChildProps): JSX.Element => {
	return (
		<Container
			disableGutters={true}
			maxWidth={false}
			sx={{ backgroundColor: customThemeColors.background, minHeight: '100vh' }}>
			<Container
				maxWidth='md'
				disableGutters={true}
				sx={{ backgroundColor: theme.palette.common.white, minHeight: '100vh' }}>
				{children}
			</Container>
		</Container>
	);
};

export default CustomContainer;
