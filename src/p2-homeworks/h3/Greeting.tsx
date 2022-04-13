import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (name: string) => void// need to fix any
    error: " " | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : "" // need to fix with (?:)
    const btnClass = !name ? s.disabled_btn : s.btn
    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass || s.input}/>
            <span>{error}</span>
            <button className={btnClass} onClick={()=>addUser(name)}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
