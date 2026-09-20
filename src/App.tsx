import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CallbackModal, Footer, Header } from './components/Layout'
import HomePage from './pages/HomePage'
import TopicPage from './pages/TopicPage'
import './App.css'

function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }
    if (pathname === '/') window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function HomeRoute() {
  const [callbackOpen, setCallbackOpen] = useState(false)
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header onCallback={() => setCallbackOpen(true)} />
      <main>
        <HomePage onCallback={() => setCallbackOpen(true)} />
      </main>
      <Footer />
      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/services/:slug" element={<TopicPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
