import './globals.css'

export const metadata = {
  title: 'Pull Request Generator',
  description: 'Gere descrições de PR com IA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}