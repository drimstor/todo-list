import App from 'app/App'
import StoreProvider from 'app/providers/StoreProvider'
import { createRoot } from 'react-dom/client'
import 'app/styles/global.scss'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
)
