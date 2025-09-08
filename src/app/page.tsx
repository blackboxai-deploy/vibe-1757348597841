export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
          Hello, World! 👋
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Welcome to your new Next.js application
        </p>
        
        {/* Description */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
          <p className="text-lg text-gray-700 mb-4">
            This is a simple hello world page built with:
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
            <span className="bg-black text-white px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">React</span>
            <span className="bg-cyan-500 text-white px-3 py-1 rounded-full">Tailwind CSS</span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full">TypeScript</span>
          </div>
        </div>
        
        {/* Footer Message */}
        <p className="text-gray-500 mt-8 text-lg">
          Ready to start building something amazing? ✨
        </p>
      </div>
    </main>
  );
}