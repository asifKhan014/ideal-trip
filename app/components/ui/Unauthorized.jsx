export default function Unauthorized() {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">Access Denied</h1>
        <p className="text-gray-600 mt-4">
          You do not have permission to access this page.
        </p>
        <a href="/" className="text-indigo-600 mt-6 block">
          Go to Homepage
        </a>
      </div>
    );
  }  