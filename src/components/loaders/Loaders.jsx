import { RaceBy, Ping, DotSpinner, Ring } from '@uiball/loaders';

export const LoaderLogin = () => {
	return (
		<>
			<RaceBy
				size={240}
				lineWeight={5}
				speed={1}
				color='blue'
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

export const LoaderSendEmail = () => {
	return (
		<DotSpinner
			size={40}
			speed={0.9}
			color='black'
		/>
	);
};

export const LoaderCategory = () => {
	return (
		<>
			<Ring
				size={40}
				lineWeight={5}
				speed={2}
				color='blue'
			/>
		</>
	);
};
