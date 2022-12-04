import { MouseEvent, useContext } from 'react';
import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';

import CustomContainer from '@components/shared/CustomContainer';
import { StyledBox, StyledHeading } from '@components/RegistrationFormPage/style';
import CustomButton from '@components/shared/CustomButton';
import CustomInput from '@components/shared/CustomInput';
import { REGISTRATION } from '@constants/components';
import { BUTTON } from '@constants/common';
import { theme } from '@shared-styles/theme';
import { NComponents } from '@typings/components';
import { StarWarsContext } from '@context/StarWars';
import { sendForm } from '@queries/sendForm';

const phoneRegExp =
	/^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-8]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/;

const validationSchema = yup.object({
	name: yup.string().required(REGISTRATION.LOGIN_HELPER_TEXT),
	password: yup.string().required(REGISTRATION.PASSWORD_HELPER_TEXT),
	email: yup.string().email(REGISTRATION.PHONE_HELPER_TEXT).required(REGISTRATION.EMAIL_HELPER_TEXT_REQUIRED),
	phoneNumber: yup
		.string()
		.matches(phoneRegExp, REGISTRATION.PHONE_HELPER_TEXT)
		.required(REGISTRATION.PHONE_HELPER_TEXT_REQUIRED),
});

const RegistrationFormPage = (): JSX.Element => {
	const { starWars } = useContext(StarWarsContext);
	const initialValues: NComponents.IFormData = {
		name: 'te',
		password: 'sdf',
		email: 'ts@tes.ts',
		phoneNumber: '600600600',
	};

	const {
		handleSubmit,
		values: { name, password, email, phoneNumber },
		touched: { name: touchedName, password: touchedPassword, email: touchedEmail, phoneNumber: touchedPhoneNumber },
		handleChange,
		errors: { name: nameError, password: passwordError, email: emailError, phoneNumber: phoneNumberError },
	}: FormikProps<NComponents.IFormData> = useFormik<NComponents.IFormData>({
		enableReinitialize: true,
		initialValues,
		validationSchema,
		onSubmit: ({ name, password, email, phoneNumber }, { resetForm }) => {
			sendForm(name, password, email, phoneNumber, starWars);
			resetForm();
		},
	});

	const handleSave = (event: MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault();
		handleSubmit();
	};

	return (
		<CustomContainer>
			<StyledBox>
				<StyledHeading>
					<h1>{REGISTRATION.HEADING}</h1>
				</StyledHeading>
				<CustomInput
					helperText={touchedName && nameError}
					onChange={handleChange}
					value={name}
					error={touchedName && Boolean(nameError)}
					id='name'
					name='name'
					autoComplete='off'
					variant='standard'
					formLabel={REGISTRATION.LOGIN_LABEL}
					type='text'
				/>
				<CustomInput
					helperText={touchedPassword && passwordError}
					onChange={handleChange}
					value={password}
					error={touchedPassword && Boolean(passwordError)}
					id='password'
					name='password'
					autoComplete='off'
					variant='standard'
					formLabel={REGISTRATION.PASSWORD_LABEL}
					type='password'
				/>
				<CustomInput
					helperText={touchedEmail && emailError}
					onChange={handleChange}
					value={email}
					error={touchedEmail && Boolean(emailError)}
					id='email'
					name='email'
					autoComplete='off'
					variant='standard'
					formLabel={REGISTRATION.EMAIL_LABEL}
					type='text'
				/>
				<CustomInput
					helperText={touchedPhoneNumber && phoneNumberError}
					onChange={handleChange}
					value={phoneNumber}
					error={touchedPhoneNumber && Boolean(phoneNumberError)}
					id='phoneNumber'
					name='phoneNumber'
					autoComplete='off'
					variant='standard'
					formLabel={REGISTRATION.PHONE_NUMBER_LABEL}
					type='text'
				/>
				<CustomButton
					type='submit'
					backgroundColor={theme.palette.primary.main}
					onClick={handleSave}
					text={BUTTON.SAVE}
				/>
			</StyledBox>
		</CustomContainer>
	);
};

export default RegistrationFormPage;
