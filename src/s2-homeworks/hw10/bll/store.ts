import { loadingReducer } from './loadingReducer'
import { combineReducers, legacy_createStore } from 'redux'
import { themeReducer } from '../../hw12/bll/themeReducer'

const reducers = combineReducers({
    loading: loadingReducer, // hw10
    theme: themeReducer, // hw12
})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>
// export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
//
// export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
// export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных
