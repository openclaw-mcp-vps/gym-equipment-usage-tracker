import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GymTrack — Equipment Usage & Maintenance Scheduler',
  description: 'Track gym equipment usage with IoT sensors or manual logging. Predict maintenance needs and prevent costly downtime for your fitness center.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f86ebcd4-adb0-4d45-8d92-11558142ca3f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
