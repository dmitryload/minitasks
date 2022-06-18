const initState:NumType = 'grey'
export type NumType = string
export const themeReducer = (state:NumType = initState, action: ChangeThemeCType): NumType => {
    switch (action.type) {
        case "CHANGE-THEME":
            return  state = action.pos
        default: return state;
    }
};
type ChangeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (pos: string) => ({type: "CHANGE-THEME", pos} as const);
