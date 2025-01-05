const HeroSection = ({ searchQuery, handleSearch }) => (
  <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Seamless Transport Solutions</h1>
      <p className="text-lg mb-6">
        Choose from our premium Bus and Car services.
      </p>
      <input
        type="text"
        placeholder="Search transport by city..."
        className="p-2 rounded-lg w-full max-w-md text-black border-gray-300"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  </header>
);
export default HeroSection;
