import {UserType} from "../HW8";

type ActionType = {
    type: string
    payload: "up" | "down" | number
}
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            let sortState = [...state].sort((a,b) => a.name.localeCompare(b.name))
         return (action.payload === 'up' ? sortState : sortState.reverse())
        }
        case 'check': {
            return state.filter(u => u.age > action.payload)
        }
        default: return state
    }
}
