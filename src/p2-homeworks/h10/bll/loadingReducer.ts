const enum LOADING_TYPE {
    LOADING = "loading"
}
const initState = {
    loading: false
}
type InitStateType = typeof initState

export const loadingReducer = (state: InitStateType = initState, action: AllTypes):InitStateType => {
    switch (action.type) {
        case LOADING_TYPE.LOADING: {
            return {...state, loading: action.act}
        }
        default: return state
    }
}
type AllTypes = LoadingTYPE
type LoadingTYPE = {type: LOADING_TYPE.LOADING, act: boolean}
export const loadingAC = (act: boolean): LoadingTYPE => ({type: LOADING_TYPE.LOADING, act})
