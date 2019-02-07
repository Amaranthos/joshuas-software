export const themes = {
	'LIGHT': {
		backgroundColor: '#FFFFFF',
		primaryFontColor: '#000000'
	},
	'DARK': {
		backgroundColor: '#000000',
		primaryFontColor: '#FFFFFF'
	}
};

const breakpoints = [600, ];
export const mediaBreakpoints = breakpoints.map(
	bp => `@media (min-width: ${bp}px)`
);