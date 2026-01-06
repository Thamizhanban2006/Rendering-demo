import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Next.js Rendering Strategies
        </h1>

        <p className="text-gray-600 text-center mt-3">
          Demonstration of <span className="font-medium">Static (SSG)</span>,{" "}
          <span className="font-medium">Dynamic (SSR)</span>, and{" "}
          <span className="font-medium">Hybrid (ISR)</span> rendering using the
          App Router.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {/* Static */}
          <Link
            href="/about"
            className="group border rounded-xl p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
              Static (SSG)
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Pre-rendered at build time. Fastest and highly scalable.
            </p>
          </Link>

          {/* Dynamic */}
          <Link
            href="/dashboard"
            className="group border rounded-xl p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-green-600">
              Dynamic (SSR)
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Rendered on every request. Always fresh data.
            </p>
          </Link>

          {/* Hybrid */}
          <Link
            href="/news"
            className="group border rounded-xl p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600">
              Hybrid (ISR)
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Static with periodic revalidation. Balanced approach.
            </p>
          </Link>
        </div>

        <p className="text-xs text-gray-400 text-center mt-8">
          Built with Next.js App Router + Tailwind CSS
        </p>
      </div>
    </main>
  );
}
