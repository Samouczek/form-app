import { FormControl, FormLabel, styled, TextField } from '@mui/material';

export const StyledFormControl = styled(FormControl)`
	&.MuiFormControl-root {
		padding-top: 1.5rem;
		width: 100%;
	}

	.MuiFormHelperText-root {
		text-align: right;
	}
`;

export const StyledFormLabel = styled(FormLabel)``;

export const StyledTextField = styled(TextField)`
	input {
		font-size: 1.25rem;
		line-height: 2rem;
	}
`;
