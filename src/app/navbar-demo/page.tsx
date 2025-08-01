export default function NavbarDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1F3D] to-[#1E5BFF] text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">Scroll Down</h1>
          <p className="text-xl opacity-90">Watch the navbar transform!</p>
        </div>
      </section>

      {/* Content Sections */}
      {Array.from({ length: 10 }, (_, i) => (
        <section key={i} className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Section {i + 1}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}
