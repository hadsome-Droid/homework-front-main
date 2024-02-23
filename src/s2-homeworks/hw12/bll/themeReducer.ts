type InitStateType = {
    themeId: number
}

const initState: InitStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ThemeReducerType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":{
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

type ThemeReducerType = ChangeThemeActionType

type ChangeThemeActionType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
