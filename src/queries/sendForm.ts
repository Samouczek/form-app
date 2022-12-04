import axios from 'axios';

import { NQueries } from '@typings/queries';
import { PATH_TO_SUBMIT_FORM } from '@constants/paths';

export const sendForm = async (
	name: string,
	password: string,
	email: string,
	phoneNumber: string,
	acceptsRegulations: boolean,
	starWars: NQueries.IStarWarsData[],
): Promise<any> => {
	const star_wars_data = JSON.stringify(starWars);

	try {
		await axios.post<NQueries.IRegistrationData>(
			`${PATH_TO_SUBMIT_FORM}`,
			{ name, password, email, phoneNumber, acceptsRegulations, star_wars_data },
			{
				headers: {
					Accept: 'application/json',
				},
			},
		);
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return error.message;
		} else {
			return error;
		}
	}
};
