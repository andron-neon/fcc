import React, {ChangeEvent, useState} from 'react';

type propsType = {
    oldTitle: string
    callBack:(title:string)=>void
}

export const EditableSpan = (props: propsType) => {
    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.oldTitle)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const onDoubleClickHandler=()=>{
        setEdit(true)
    }
    const onBlurHandler=()=>{
        props.callBack(newTitle)
        setEdit(false)
    }
    return (
        edit
            ? <input value={newTitle}    onChange={onChangeHandler} autoFocus onBlur={onBlurHandler}/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.oldTitle}</span>
    );
};
