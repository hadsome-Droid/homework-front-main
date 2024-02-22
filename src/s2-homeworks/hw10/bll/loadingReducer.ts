type InitType = {
    isLoading: boolean
}

const initState: InitType = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingReducerType): InitType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING": {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

type LoadingReducerType = LoadingActionType

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
