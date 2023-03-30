import {v1} from 'uuid';
import {DialogsPageType} from '../generalTypes/GeneralTypes';
import {AddPostActionType} from './profileReducer';

export type SendMessageActionType = ReturnType<typeof sendMessageAC>
type ActionsType = AddPostActionType | SendMessageActionType

const initialState: DialogsPageType = {
    ['dialogs']: [
        {id: v1(), name: 'Plato'},
        {id: v1(), name: 'Ivan'},
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Nikita'},
        {id: v1(), name: 'Cris'},
        {id: v1(), name: 'Neo'},
    ],
    ['messages']: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Whats up!'},
        {id: v1(), message: 'V-vendetta'},
        {id: v1(), message: 'YoYOYO'},
        {id: v1(), message: 'Carnaval jazz!'},
    ],
}

export const dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            return {...state, ['messages']: [{id: v1(), message: action.payload.message}, ...state['messages']]}
        }
        default:
            return state
    }
}

export const sendMessageAC = (message: string) =>
    ({type: 'SEND-MESSAGE', payload: {message}} as const)