import { StyledFormControl, StyledFormLabel, StyledTextField } from '@components/shared/CustomInput/style';
import { NComponents } from '@typings/components';

const CustomInput = ({ formLabel = '', ...props }: NComponents.TCustomFormControlProps): JSX.Element => {
	return (
		<StyledFormControl>
			<StyledFormLabel>{formLabel}</StyledFormLabel>
			<StyledTextField {...props} />
		</StyledFormControl>
	);
};

export default CustomInput;
