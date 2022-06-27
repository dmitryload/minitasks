import React, {useState} from 'react';
import {RequestApi} from "./api/RequestApi";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

const Request = () => {
    const [request, setRequest] = useState<string>("")
    const [localValue, setLocalValue] = useState<boolean>(false)
    const postValue = (value: boolean)=> {
         RequestApi.onSuccess(value)
             .then((res) => {
            setLocalValue(res.data.yourBody.success)
                 setRequest(res.data.errorText)
        })
             .catch((err) => {
                 setRequest(err.message)
                 setLocalValue(false)
             })
    }
    return (
        <>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <SuperCheckbox type={"checkbox"} checked={localValue}/>
            <SuperButton onClick={()=>postValue(true)}>Success</SuperButton>
            <SuperButton onClick={() => postValue(false)}>Reset</SuperButton>
        </div>
            <div>{request}</div>
        </>
    );
};

export default Request;
