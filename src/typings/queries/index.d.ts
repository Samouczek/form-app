export declare namespace NQueries {
	type S = string;

	interface IPerson {
		name: S;
		height: S;
		mass: S;
		hair_color: S;
		skin_color: S;
		eye_color: S;
		birth_year: S;
		homeworld: S;
		films: S[];
		species: S[];
		vehicles: S[];
		starships: S[];
		created: S;
		edited: S;
		url: S;
	}

	interface IRegistrationData {
		name: S;
		password: S;
		email: S;
		phoneNumber: S;
		acceptsRegulations: B;
		starWars: JSON;
	}

	interface IStarWarsData {
		name: S;
		created: S;
		vehicles: S[];
	}
}
