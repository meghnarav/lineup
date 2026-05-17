import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STATUS_MESSAGES = [
  'Processing users...',
  'Allocating tickets...',
  'Verifying fairness...',
  'Balancing load across regions...'
]

const ACTIVITY_MESSAGES = [
  'User from Chennai just joined the queue',
  '3 tickets reserved',
  'User from London completed booking',
  '2 tickets released back to pool',
  'Verification passed for a batch of users'
]

export default function QueueSimulator({ initialPosition, active, onComplete, onLeave }) {
  const [position, setPosition] = useState(null)
  const [globalCount, setGlobalCount] = useState(0)
  const [statusIndex, setStatusIndex] = useState(0)
  const [feed, setFeed] = useState([])
  const feedId = useRef(0)

  useEffect(() => {
    setGlobalCount(Math.floor(8000 + Math.random() * 14000))
  }, [])

  useEffect(() => {
    if (active && typeof initialPosition === 'number') {
      setPosition(initialPosition)
    }
    if (!active) setPosition(null)
  }, [active, initialPosition])

  // position countdown
  useEffect(() => {
    if (position == null) return
    if (position <= 0) {
      onComplete && onComplete()
      return
    }

    const id = setInterval(() => {
      setPosition((p) => (p > 0 ? p - 1 : 0))
    }, 1000)

    return () => clearInterval(id)
  }, [position, onComplete])

  // global counter random updates
  useEffect(() => {
    const id = setInterval(() => {
      setGlobalCount((c) => {
        const delta = Math.floor((Math.random() - 0.5) * 800)
        const next = Math.max(100, c + delta)
        return next
      })
    }, 2200 + Math.random() * 800)

    return () => clearInterval(id)
  }, [])

  // rotating status messages
  useEffect(() => {
    const id = setInterval(() => {
      setStatusIndex((i) => (i + 1) % STATUS_MESSAGES.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  // live activity feed
  useEffect(() => {
    const id = setInterval(() => {
      const msg = ACTIVITY_MESSAGES[Math.floor(Math.random() * ACTIVITY_MESSAGES.length)]
      feedId.current += 1
      setFeed((f) => {
        const next = [{ id: feedId.current, text: msg }, ...f].slice(0, 6)
        return next
      })
    }, 2600 + Math.random() * 1200)

    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full max-w-2xl">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f1722]/85 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
        <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -left-16 bottom-8 h-44 w-44 rounded-full bg-fuchsia-500/10 blur-3xl" aria-hidden="true" />

        <div className="relative z-10">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Live queue</p>
              <p className="mt-2 text-sm soft-muted">Experience how Lineup keeps your place visible and secure.</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/80 shadow-sm shadow-slate-950/20">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Online now
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
            <div className="mb-5 flex items-center justify-between gap-4 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">🔴 Live updates</span>
              <span className="font-semibold">{globalCount.toLocaleString()} in queue</span>
            </div>

            <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="text-sm soft-muted">Your current position</p>
                <motion.div
                  className="mt-3 text-4xl font-semibold tracking-tight text-white"
                  key={position}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 260 }}
                >
                  #{position != null ? String(position).padStart(4, '0') : '----'}
                </motion.div>
                <p className="mt-2 text-sm text-slate-400">
                  {position != null ? `${Math.max(0, position - 1)} people ahead of you` : 'Tap join to start your queue.'}
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Current flow</p>
                <motion.p
                  className="mt-3 text-sm font-medium text-slate-100"
                  key={statusIndex}
                  initial={{ x: 8, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  {STATUS_MESSAGES[statusIndex]}
                </motion.p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onLeave}
              className="flex-1 rounded-2xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:bg-violet-500 transition"
            >
              Leave Queue
            </button>
            <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10">
              Help
            </button>
          </div>

          <div className="mt-7 rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-slate-100">Live activity</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {feed.map((item) => (
                <motion.div key={item.id} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }}>
                  • {item.text}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
