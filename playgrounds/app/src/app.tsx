import { Suspense } from 'solid-js'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Toaster } from 'solid-sonner'
import Header from '~/components/Header'
import Footer from './components/Footer'
import '@fontsource/bungee-inline'
import '@fontsource/roboto'
import './app.css'

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <Header />
          <Suspense>{props.children}</Suspense>
          <Footer />
          <Toaster />
        </>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
