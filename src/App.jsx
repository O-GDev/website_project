import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import AppRoutes from './pages/routes'

export default function App(){
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  )
}
