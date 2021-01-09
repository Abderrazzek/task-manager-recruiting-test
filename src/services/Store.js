import React, {useReducer} from 'react';

export const Store = React.createContext();

const initialState = {
    session: null,
    email: 'test@test.com',
    password: 'test',
    taskList: [
        {
            id: 0,
            name: 'Envoyer un e-mail',
            description: "A toute l'équipe",
            complete: false
        }, {
            id: 1,
            name: "Faire l'exercice",
            description: 'React only',
            complete: true
        }
    ]
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SESSION':
            return {
                ...state,
                session: action.payload
            };
        case 'SET_TASK_LIST':
            return {
                ...state,
                taskList: action.payload
            };
        default:
            return state;
    }
};

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(globalReducer, initialState);
    const value = {
        state,
        dispatch
    };
    return <Store.Provider value={value}> {
        props.children
    } </Store.Provider>;
}
