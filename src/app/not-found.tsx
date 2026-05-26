import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-black via-gray-950 to-sky-950 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-sky-600 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved. Let me
          help you get back on track.
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-cyan-400 to-sky-500 text-black font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
