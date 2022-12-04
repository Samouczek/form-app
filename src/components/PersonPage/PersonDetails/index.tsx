import { useEffect, useState } from 'react';
import { CheckCircle } from '@mui/icons-material';

import { NComponents } from '@typings/components';
import {
	StyledContainer,
	StyledImg,
	StyledNameBox,
	StyledImgSkeleton,
	StyledTextBox,
	StyledTextSkeleton,
} from '@components/PersonPage/PersonDetails/style';
import { ICON_PATH, IMAGE_GENERATING_LINK } from '@constants/paths';
import { PROFILE } from '@constants/components';

const PersonDetails = ({ name, age, eyeColor, isLoading }: NComponents.IPersonDetails): JSX.Element => {
	const [path, setPath] = useState<string>(IMAGE_GENERATING_LINK);

	useEffect(() => {
		isLoading ? setPath('') : setPath(IMAGE_GENERATING_LINK);
	}, [isLoading]);

	return (
		<StyledContainer>
			{isLoading ? <StyledImgSkeleton animation='wave' /> : <StyledImg src={path} alt={`profile_${name}`} />}
			<StyledNameBox>
				{isLoading ? <StyledTextSkeleton animation='wave' sx={{ marginLeft: '11%' }} /> : <p>{name}</p>}
				<div>
					<img src={ICON_PATH} alt='profile' />
					<CheckCircle color='success' sx={{ fontSize: '2.875rem' }} className='icon' />
				</div>
			</StyledNameBox>
			<StyledTextBox>
				{isLoading ? (
					<StyledTextSkeleton animation='wave' />
				) : (
					<p>
						{PROFILE.AGE} {age}
					</p>
				)}
				{isLoading ? (
					<StyledTextSkeleton animation='wave' />
				) : (
					<p>
						{PROFILE.EYE_COLOR} {eyeColor}
					</p>
				)}
			</StyledTextBox>
		</StyledContainer>
	);
};

export default PersonDetails;
