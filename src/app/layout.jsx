import '@/styles/globals.css'

export const metadata = {
  title: 'Frontend Assessment for Codelinear',
  description: 'Next.js frontend application with Tailwind CSS and dynamic styling',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light">
        {children}
      </body>
    </html>
  )
}
