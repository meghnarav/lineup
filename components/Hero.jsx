import { motion } from 'framer-motion'

export default function Hero({ onJoin }) {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Concert tickets shouldn’t be a lottery.
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl soft-muted max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Fair access. Real queues. No bots cutting the line.
        </motion.p>

        <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <motion.button
            type="button"
            aria-label="Join the queue"
            onClick={onJoin}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-md text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 cta-glow shadow-sm hover:shadow-lg transform transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2"
          >
            <span>Join the Queue</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/90" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
