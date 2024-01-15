const reducer = (state, action) => {
    switch (action.type) {
        case 'Handle input text':
            return {
                ...state,
                [action.field]: action.value,
            };
        default:
            return state;
    }
};

export default reducer;
