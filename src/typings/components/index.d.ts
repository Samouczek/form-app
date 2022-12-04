import { ButtonHTMLAttributes, ReactNode } from 'react';
import { TextFieldProps } from '@mui/material';

export declare namespace NComponents {
	type S = string;

	interface IChildProps {
		children: ReactNode;
	}

	interface IPersonDetails {
		name: S;
		age: S;
		eyeColor: S;
	}

	interface ICustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
		text: string;
		children?: ReactNode;
		backgroundColor: S;
	}

	type TCustomFormControlProps = TextFieldProps & {
		formLabel?: S;
	};

	export interface IFormData {
		name: S;
		password: S;
		email: S;
		phoneNumber: S;
	}
}
