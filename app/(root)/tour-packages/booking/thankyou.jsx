export default function ThankYou() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Booking Confirmed!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for your booking. You will receive a confirmation email
          shortly.
        </p>
        <a href="/" className="text-blue-600 hover:underline text-lg">
          Return to Home
        </a>
      </div>
    </div>
  );
}
