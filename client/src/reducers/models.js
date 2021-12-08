export const models = (initialState = false, action) => {
    switch (action.type) {
        case 'PROFILE_MODEL': 
            return !action.payload.isOpen;
        default:
            return initialState;
    }
}