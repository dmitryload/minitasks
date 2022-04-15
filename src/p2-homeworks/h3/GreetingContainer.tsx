import React, {ChangeEvent, useState} from 'react'
// import Greeting from './Greeting'
import {UserType} from "./HW3";
import Input from "./Input";
import Button from "./Button";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<null | " ">(null) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)// need to fix any
        setName(e.currentTarget.value)// need to fix
    }
    const addUser = (name: string) => {
        setError(null)
        if (name.trim() !== "") {
            addUserCallback(name)
            alert(`Hello ${name.trim()} !`)
            setName("")
        } else {
            setError(" ")
        }
        // need to fix
    }

    const totalUsers = users.length - 1// need to fix

    return (
        <div>
            <Input error={error} value={name} callback={setNameCallback}/>
            <Button name={"add"} callback={addUser} value={name}/>
            <span>{totalUsers}</span>
        </div>
        /* <Greeting
             name={name}
             setNameCallback={setNameCallback}
             addUser={addUser}
             error={error}
             totalUsers={totalUsers}
         />*/
    )
}

export default GreetingContainer
