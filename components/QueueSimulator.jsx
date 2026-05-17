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
  const [globalCount, setGlobalCount] = useState(() => Math.floor(8000 + Math.random() * 14000))
  const [statusIndex, setStatusIndex] = useState(0)
  const [feed, setFeed] = useState([])
  const feedId = useRef(0)

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
    <div className="w-full max-w-md">
      <AnimatePresence>
        {active && (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-sm">🔴</div>
                <motion.div className="text-sm soft-muted">{''}</motion.div>
                <motion.div
                  key={globalCount}
                  className="text-sm font-medium"
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  {globalCount.toLocaleString()} users currently in queue
                </motion.div>
              </div>
              <div className="text-xs soft-muted">Live</div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm soft-muted">You are in queue</div>
                <motion.div
                  className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight"
                  key={position}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  #{position != null ? String(position).padStart(4, '0') : '----'}
                </motion.div>
                <div className="mt-1 text-sm soft-muted">{position != null ? `${Math.max(0, position - 1)} people ahead of you` : ''}</div>
              </div>

              <div className="text-right">
                <div className="text-xs soft-muted">Status</div>
                <motion.div className="mt-2 text-sm font-medium text-neutral-200" key={statusIndex} initial={{ x: 8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.35 }}>
                  {STATUS_MESSAGES[statusIndex]}
                </motion.div>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex gap-3">
                <button
                  onClick={onLeave}
                  className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-50 py-2 rounded-md text-sm transition"
                >
                  Leave Queue
                </button>
                <button className="px-3 py-2 text-sm rounded-md border border-zinc-700 soft-muted">Help</button>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Live activity</h4>
              <div className="space-y-2 max-h-40 overflow-hidden">
                {feed.map((item) => (
                  <motion.div key={item.id} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} className="text-sm soft-muted">
                    • {item.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
