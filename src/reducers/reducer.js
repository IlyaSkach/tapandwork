const initialState = {
    Auth: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN_VERIFECATED':
            return {
                ...state, // Always using the spread operator, we save the state value. It works differently
                Auth: true
            }
        default:
            return state
    }
}
export default reducer