import { createContext, PropsWithChildren, useMemo, useState } from 'react';

import { NQueries } from '@typings/queries';
import { NContext } from '@typings/context';

export const StarWarsContext = createContext<NContext.IStarWarsStatus>({
	starWars: [],
	setStarWars: params => params,
});

const StartWarsContextWrapper = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
	const [starWars, setStarWars] = useState<NQueries.IStarWarsData[]>([]);

	const contextValue = useMemo(() => ({ starWars, setStarWars }), [starWars, setStarWars]);

	return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

export default StartWarsContextWrapper;
