import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/action.jpg')", // Replace with your scenic image
        backgroundAttachment: "fixed", // Parallax scrolling
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-lg md:text-2xl text-white mt-4">
          Start planning your dream trip today with our expert services.
        </p>
        <Link
          href="/start-your-adventure"
          className="mt-8 inline-block px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Get Started Now!
        </Link>
      </div>
    </section>
  );
}
