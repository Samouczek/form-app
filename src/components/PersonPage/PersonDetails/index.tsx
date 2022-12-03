import { NComponents } from '@typings/components';
import { StyledContainer, StyledImg } from '@components/PersonPage/PersonDetails/style';
import { IMAGE_GENERATING_LINK } from '@constants/paths';

const PersonDetails = ({ name, age, eyeColor }: NComponents.IPersonDetails): JSX.Element => {
	return (
		<StyledContainer>
			<StyledImg src={IMAGE_GENERATING_LINK} alt='photo' />
		</StyledContainer>
	);
};

export default PersonDetails;
