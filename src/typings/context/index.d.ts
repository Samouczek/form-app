import { Dispatch, SetStateAction } from 'react';

import { NQueries } from '@typings/queries';

export declare namespace NContext {
	interface IStarWarsStatus {
		starWars: NQueries.IStarWarsData[];
		setStarWars: Dispatch<SetStateAction<NQueries.IStarWarsData[]>>;
	}
}
