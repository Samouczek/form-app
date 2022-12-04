import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography } from '@mui/material';

import CustomContainer from '@components/shared/CustomContainer';
import { StyledBox, StyledProfileBox } from '@components/PersonPage/style';
import PersonDetails from '@components/PersonPage/PersonDetails';
import CustomButton from '@components/shared/CustomButton';
import { PERSON_PERFORMING_TASK } from '@constants/components';
import { BUTTON } from '@constants/common';
import { BASIC_DATA_PATH, REGISTRATION_FORM_PAGE } from '@constants/paths';
import { theme } from '@shared-styles/theme';
import { NQueries } from '@typings/queries';

const PersonPage = (): JSX.Element => {
	const navigation = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [numberOfPerson, setNumberOfPerson] = useState(1);
	const [personData, setPersonData] = useState<null | NQueries.IPerson>(null);

	const getPerson = useCallback(async (numberOfPerson: number): Promise<any> => {
		setIsLoading(true);
		setError(null);

		try {
			const { data, status } = await axios.get<NQueries.IPerson>(`${BASIC_DATA_PATH}${numberOfPerson}/`, {
				headers: {
					Accept: 'application/json',
				},
			});

			if (status === 200) {
				setPersonData(data);
				setIsLoading(false);
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return error.message;
			} else {
				return 'An unexpected error occurred';
			}
		}
	}, []);

	const handleNextProfiles = (event: MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault();
		setNumberOfPerson(prevState => {
			return ++prevState;
		});
	};

	const handleRegistration = (event: MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault();
		navigation(REGISTRATION_FORM_PAGE);
	};

	useEffect(() => {
		getPerson(numberOfPerson);
	}, [numberOfPerson]);

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
				<PersonDetails
					name={personData ? personData.name : ''}
					age={personData ? personData.birth_year : ''}
					eyeColor={personData ? personData.eye_color : ''}
					isLoading={isLoading}
				/>
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
