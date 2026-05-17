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
    <section className="space-y-20">
      <Fade>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl font-bold">The Problem</h3>
            <p className="mt-4 soft-muted">
              Ticketing today rewards automation and luck — not fans. Bots buy thousands in milliseconds, pages crash under load, and genuine buyers are locked out.
            </p>
          </div>
          <div>
            <ul className="space-y-4 soft-muted">
              <li>• Bots buy thousands of tickets in milliseconds</li>
              <li>• Fans get locked out before pages even load</li>
              <li>• Queues crash under high demand</li>
            </ul>
          </div>
        </div>
      </Fade>

      <Fade delay={0.1}>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl font-bold">Our Solution</h3>
            <p className="mt-4 soft-muted">
              LineUp provides a production-ready queueing system with controlled concurrency, fairness guarantees, and bot resistance so fans get access first.
            </p>
          </div>
          <div>
            <ul className="space-y-4 soft-muted">
              <li>• Controlled, concurrency-safe queueing</li>
              <li>• Fair ticket distribution</li>
              <li>• Bot resistance through rate limiting and validation</li>
            </ul>
          </div>
        </div>
      </Fade>
    </section>
  )
}
