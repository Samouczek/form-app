import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import CustomContainer from '@components/shared/CustomContainer';
import { StyledBox, StyledProfileBox } from '@components/PersonPage/style';
import { PERSON_PERFORMING_TASK } from '@constants/components';
import { BUTTON } from '@constants/common';
import { REGISTRATION_FORM_PAGE } from '@constants/paths';
import { theme } from '@shared-styles/theme';
import PersonDetails from '@components/PersonPage/PersonDetails';
import CustomButton from '@components/shared/CustomButton';

const PersonPage = (): JSX.Element => {
	const navigation = useNavigate();

	const name = 'Kasia';
	const age = '23';
	const eyeColor = 'blue';

	const handleNextProfiles = (event: MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault();
	};

	const handleRegistration = (event: MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault();
		navigation(REGISTRATION_FORM_PAGE);
	};

	return (
		<CustomContainer>
			<StyledBox>
				<Typography sx={{ fontSize: '1.875rem' }}>{PERSON_PERFORMING_TASK}</Typography>
				<CustomButton
					backgroundColor={theme.palette.secondary.dark}
					onClick={handleRegistration}
					text={BUTTON.REGISTRATION_FORM}
				/>
			</StyledBox>
			<StyledProfileBox>
				<PersonDetails name={name} age={age} eyeColor={eyeColor} />
				<CustomButton
					backgroundColor={theme.palette.secondary.main}
					onClick={handleNextProfiles}
					text={BUTTON.NEXT_PROFILES}
				/>
			</StyledProfileBox>
		</CustomContainer>
	);
};

export default PersonPage;
