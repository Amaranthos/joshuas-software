import Types from '../actions/types';

export default (state = 'LIGHT', action) => {
    switch (action.type) {
        case Types.TOGGLE_THEME:
            return state === 'LIGHT'? 'DARK' : 'LIGHT';

        default: return state;
    }
}
