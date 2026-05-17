import '../styles/globals.css'

export const metadata = {
  title: 'LineUp — Fair Concert Queue',
  description: 'Fair ticket queueing for concerts'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
