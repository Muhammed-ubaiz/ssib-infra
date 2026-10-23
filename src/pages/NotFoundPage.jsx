import Button from '../components/ui/Button'
import usePageTitle from '../components/ui/usePageTitle'

export default function NotFoundPage() {
  usePageTitle('Page not found')
  return (
    <section className="flex min-h-[70vh] items-center bg-paper pt-32 pb-20">
      <div className="container-x">
        <p className="eyebrow text-copper-700">404</p>
        <h1 className="font-display mt-5 text-4xl font-semibold tracking-tight text-ink-900 sm:text-6xl">This page doesn’t exist.</h1>
        <p className="mt-5 max-w-md text-ink-500">The link may be out of date. Head back to the home page to continue.</p>
        <Button to="/" variant="dark" className="mt-8">
          Back to Home
        </Button>
      </div>
    </section>
  )
}
