import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero({ onJoin }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(79,70,229,0.24),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(236,72,153,0.18),_transparent_30%)] bg-no-repeat bg-cover" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/80 to-transparent" aria-hidden="true" />

      <div className="container relative pt-8 pb-12">
        <nav className="flex items-center justify-between py-4">
          <div className="text-xl font-bold tracking-tight">Lineup</div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-slate-200 hover:text-white">
              Sign In
            </Link>
            <Link href="/signup" className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:opacity-95 transition">
              Sign Up
            </Link>
          </div>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="relative z-10">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Concert tickets should reward fans, not bots.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-lg text-lg leading-8 soft-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              Lineup makes ticketing fair with smart queueing, transparent access, and real-time load control — all in a modern experience built for fans.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button
                type="button"
                onClick={onJoin}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 text-base font-semibold text-white shadow-xl shadow-pink-500/20 hover:brightness-110 transition"
              >
                <span>Join the Queue</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 flex-none text-white/90" aria-hidden="true" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition">
                <span>View Dashboard</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 flex-none text-white/80" aria-hidden="true" fill="currentColor">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.414-10.586l-3 3a1 1 0 001.414 1.414L11 10.414V14a1 1 0 102 0v-3.586l1.172 1.172a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0z" />
                </svg>
              </Link>
            </motion.div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-4xl">98%</p>
                <p className="mt-2 text-sm soft-muted">Fair access success</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-4xl">24/7</p>
                <p className="mt-2 text-sm soft-muted">Realtime queue updates</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-4xl">100%</p>
                <p className="mt-2 text-sm soft-muted">Bot-resistant flow</p>
              </div>
            </div>
          </div>

          <motion.div
            className="relative mx-auto flex items-center justify-center w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-violet-500/10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/hero-visual.svg"
              alt="Abstract visual of fair queueing"
              width={920}
              height={500}
              className="w-full max-w-full h-auto rounded-[1.75rem] object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
