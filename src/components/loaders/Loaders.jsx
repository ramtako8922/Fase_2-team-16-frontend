import { RaceBy, Ping } from '@uiball/loaders';
export const LoaderLogin = () => {
	return (
		<>
			<RaceBy
				size={300}
				lineWeight={5}
				speed={1}
				color='black'
			/>
		</>
	);
};

export const LoaderResetPassword = () => {
	return (
		<>
			<Ping
				size={200}
				speed={2}
				color='#EE6C4D'
			/>
		</>
	);
};
