import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#F7931A] dark:bg-[#F7931A]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6 text-[#FFFFFF] dark:text-[#FFFFFF]" />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-[#FFFFFF] dark:text-[#FFFFFF]"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-[#FFFFFF] dark:text-[#FFFFFF]"
            href="#"
          >
            Marketplace
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-[#FFFFFF] dark:text-[#FFFFFF]"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-[#FFFFFF] dark:text-[#FFFFFF]"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px]">
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#FFFFFF] dark:text-[#FFFFFF]">
                    Discover the Future of Art
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-[#FFFFFF] dark:text-[#FFFFFF]">
                    Explore unique digital art, collectibles, and experiences from the world's most talented creators.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Connect Wallet
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    New Collection
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#FFFFFF]">
                    Summer Vibes: The NFT Collection
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-[#FFFFFF]">
                    Dive into the world of Summer Vibes with this exclusive NFT collection. Brought to you by top
                    digital artists, this series captures the essence of summer in stunning visuals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    View Collection
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Share Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#FFFFFF]">
                Discover the Latest Collections
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-[#FFFFFF]">
                Explore a world of creativity. Discover unique digital collectibles, stunning visual art, and exclusive
                experiences.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 items-start gap-4 sm:gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 [&>img]:rounded-xl">
              <img
                alt="Image"
                className="aspect-square overflow-hidden object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="250"
              />
              <img
                alt="Image"
                className="aspect-square overflow-hidden object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="250"
              />
              <img
                alt="Image"
                className="aspect-square overflow-hidden object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="250"
              />
              <img
                alt="Image"
                className="aspect-square overflow-hidden object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="250"
              />
              <img
                alt="Image"
                className="aspect-square overflow-hidden object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="250"
              />
              <img
                alt="Image"
                className="aspect-square overflow-hidden object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="250"
              />
              <img
                alt="Image"
                className="aspect-square overflow-hidden object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="250"
              />
              <img
                alt="Image"
                className="aspect-square overflow-hidden object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="250"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Performance
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#FFFFFF]">
                  Traffic spikes should be exciting, not scary.
                </h2>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Security</div>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400 text-[#FFFFFF]">
                  Fully managed infrastructure designed to scale dynamically with your traffic, a global edge to ensure
                  your site is fast for every customer, and the tools to monitor every aspect of your app.
                </p>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-[#FFFFFF]" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-[#FFFFFF]" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
