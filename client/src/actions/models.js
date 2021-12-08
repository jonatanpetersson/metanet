export const profileModel = (isOpen) => {
    return {
        type: 'PROFILE_MODEL',
        payload: {
            isOpen
        }
    }
}