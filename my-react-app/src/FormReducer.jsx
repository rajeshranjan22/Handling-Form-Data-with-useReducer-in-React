
export const initialState = {
    email: '',
    password: '',
};

export function FormReducer(state, action) {
    switch (action.type) {
        case 'email':
            return { ...state, email: action.payload };
        case 'password':
            return { ...state, password: action.payload };
        case 'reset':
            return initialState;
        default:
            throw new Error('invalid action type');
    }
}
