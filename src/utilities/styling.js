export const themes = {
    'LIGHT': {
        backgroundColor: '#FFFFFF'

    },
    'DARK': {
        backgroundColor: '#000000'
    }
};

const breakpoints = [600, ];
export const mediaBreakpoints = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
);