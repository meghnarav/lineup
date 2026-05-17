"use client";

import Hero from '../components/Hero'
import Sections from '../components/Sections'
import QueueSimulator from '../components/QueueSimulator'
import { useState, useRef } from 'react'

export default function Page() {
  const [joined, setJoined] = useState(false)
  const [initialPosition, setInitialPosition] = useState(null)
  const [completed, setCompleted] = useState(false)
  const queueRef = useRef(null)

  function startJoin() {
    const pos = Math.floor(Math.random() * 5000) + 1
    setInitialPosition(pos)
    setJoined(true)
    setCompleted(false)
  }

  function handleCTAClick() {
    if (queueRef.current) {
      queueRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setTimeout(() => startJoin(), 600)
    } else {
      startJoin()
    }
  }

  return (
    <div>
      <Hero onJoin={handleCTAClick} />

      <main className="container py-24 space-y-16">
        <div ref={queueRef} id="queue-simulator" className="flex justify-center">
          <QueueSimulator
            initialPosition={initialPosition}
            active={joined}
            onComplete={() => setCompleted(true)}
            onLeave={() => { setJoined(false); setInitialPosition(null); setCompleted(false) }}
          />
        </div>

        {completed && (
          <div className="text-center text-emerald-400">You're in! Proceed to booking.</div>
        )}

        <Sections />
      </main>
    </div>
  )
}
