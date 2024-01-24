import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 text-4xl font-bold sm:text-6xl">Polished UI with Tailwind CSS</h1>
      <p className="mb-8 text-lg sm:text-2xl">A set of polished React components styled with Tailwind CSS.</p>
      <Button>Get Started</Button>
    </main>
  )
}
