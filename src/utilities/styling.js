export const lightTheme = {
    color: '#FFF',
    backgroundColour: '#FFFFFF'
};

export const darkTheme = {
    backgroundColour: '#FFFFFF'
};

const breakpoints = [600, ];
export const mediaBreakpoints = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
);