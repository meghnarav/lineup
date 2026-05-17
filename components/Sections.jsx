import Image from 'next/image'
import { motion } from 'framer-motion'

function Fade({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Sections() {
  return (
    <section className="space-y-24">
      <Fade>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <h3 className="text-3xl font-bold">The problem with modern ticketing</h3>
            <p className="mt-5 max-w-2xl soft-muted leading-8">
              Today’s ticket queues are fragile, opaque, and optimized for bots. LineUp flips the script by giving real fans a fair seat and transparent progress tracking.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-2xl font-semibold">No bot abuse</p>
                <p className="mt-3 text-sm soft-muted">Protect every checkout with fairness-first queue rules.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-2xl font-semibold">Real-time clarity</p>
                <p className="mt-3 text-sm soft-muted">Fans see their position and progress clearly in every moment.</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[420px] items-center justify-center max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-violet-500/10">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/10 via-transparent to-sky-400/5" />
            <div className="relative w-full">
              <Image
                src="/images/feature-fairness.svg"
                alt="Fairness feature illustration"
                width={500}
                height={420}
                className="mx-auto w-full max-w-full rounded-[1.75rem] object-contain"
              />
            </div>
          </div>
        </div>
      </Fade>

      <Fade delay={0.1}>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="relative mx-auto flex min-h-[420px] items-center justify-center max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-sky-500/10">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-400/5" />
            <div className="relative w-full">
              <Image
                src="/images/feature-speed.svg"
                alt="Speed and load balancing illustration"
                width={500}
                height={420}
                className="mx-auto w-full max-w-full rounded-[1.75rem] object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Built to scale and keep fans first</h3>
            <p className="mt-5 max-w-2xl soft-muted leading-8">
              LineUp is built to survive high-demand drops while preserving fairness. Every queue is monitored, balanced, and tuned to reward people, not automation.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-2xl font-semibold">Stable queueing</p>
                <p className="mt-3 text-sm soft-muted">Reduce crashes and keep everyone moving during peak demand.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-2xl font-semibold">Transparent experience</p>
                <p className="mt-3 text-sm soft-muted">Customers see forward progress, not mystery refresh loops.</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Fade delay={0.2}>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
            <div className="text-2xl font-bold">Fair</div>
            <p className="mt-3 text-sm soft-muted">No arbitrary overruns, no hidden favoritism. Just a fair ticket line.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
            <div className="text-2xl font-bold">Fast</div>
            <p className="mt-3 text-sm soft-muted">Quick queue updates with clear status so users always know their place.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
            <div className="text-2xl font-bold">Secure</div>
            <p className="mt-3 text-sm soft-muted">Protect signups and queue access using encrypted auth and bot-resistant flow.</p>
          </div>
        </div>
      </Fade>
    </section>
  )
}
