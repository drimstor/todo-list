import { store } from 'app/store/store'
import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

interface StoreProviderProps {
  children: ReactNode
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
