import { CheckCircle } from '@mui/icons-material';

import { NComponents } from '@typings/components';
import { StyledContainer, StyledImg, StyledNameBox, StyledTextBox } from '@components/PersonPage/PersonDetails/style';
import { ICON_PATH } from '@constants/paths';
import { PROFILE } from '@constants/components';

const PersonDetails = ({ name, age, eyeColor }: NComponents.IPersonDetails): JSX.Element => {
	return (
		<StyledContainer>
			<StyledImg />
			<StyledNameBox>
				<p>{name}</p>
				<div>
					<img src={ICON_PATH} alt={'profile'} />
					<CheckCircle color='success' sx={{ fontSize: '2.875rem' }} className='icon' />
				</div>
			</StyledNameBox>
			<StyledTextBox>
				<p>
					{PROFILE.AGE} {age}
				</p>
				<p>
					{PROFILE.EYE_COLOR} {eyeColor}
				</p>
			</StyledTextBox>
		</StyledContainer>
	);
};

export default PersonDetails;
