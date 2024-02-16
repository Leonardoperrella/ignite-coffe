import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'

export function Router() {
  const layout = <DefaultLayout />
  const routes = {
    home: <Home />,
    checkout: <Checkout/>
  }

  return (
    <Routes>
      <Route path="/" element={layout}>
        <Route path="/" element={routes.home} />
        <Route path="/checkout" element={routes.checkout} />
      </Route>
    </Routes>
  )
}
