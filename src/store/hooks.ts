import { useDispatch, useSelector, useStore , TypedUseSelectorHook} from 'react-redux'
import type { AppDispatch, AppStore, RootState } from './store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore.withTypes<AppStore>()