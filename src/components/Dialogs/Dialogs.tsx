import React from 'react';
import s from './Dialogs.module.css'
import {Messages} from './Messages/Messages';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {AddItemForm} from '../AddItemForm/AddItemForm';
import {sendMessageAC} from '../../reducers/dialogsReducer';
import {DialogsPageType} from '../../generalTypes/GeneralTypes';
import {AppRootStateType} from '../../redux/reduxStore';
import {useDispatch, useSelector} from 'react-redux';


export const Dialogs = () => {
    const dialogsPage = useSelector<AppRootStateType, DialogsPageType>(state => state.dialogsPage)
    const dispatch = useDispatch()

    let dialogsElements = dialogsPage.dialogs.map((d: { id: string; name: string; }) =>
        <DialogsItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = dialogsPage.messages.map((m: { id: string; message: string; }) =>
        <Messages key={m.id} message={m.message}/>)

    const addPost = (postText: string) => {
        dispatch(sendMessageAC(postText))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div><AddItemForm name={'send'} addItem={addPost}/>
                </div>
            </div>
        </div>
    )
}