'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 
const App = dynamic(() => import('../../App') as Promise<{ default: React.ComponentType<any> }>,  { ssr: false })
 
export function ClientOnly() {
  return <App />
}