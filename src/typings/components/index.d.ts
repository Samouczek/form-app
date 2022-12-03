import { ReactNode } from 'react';

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
}
