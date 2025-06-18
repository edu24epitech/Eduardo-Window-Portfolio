import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eduardo Window',
  description: 'Welcome to my portfolio',
  generator: 'eduardo.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
