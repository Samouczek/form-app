import { StyledButton } from '@components/shared/CustomButton/style';
import { NComponents } from '@typings/components';

const CustomButton = ({ text, backgroundColor, ...rest }: NComponents.ICustomButton): JSX.Element => {
	return (
		<StyledButton {...rest} backgroundColor={backgroundColor}>
			{text}
		</StyledButton>
	);
};

export default CustomButton;
