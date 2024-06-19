export default function Hero() {
    return (
      <section className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to TobiStudio</h1>
          <p className="text-lg mb-8">
            We create stunning designs for your business
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </section>
    )
  }