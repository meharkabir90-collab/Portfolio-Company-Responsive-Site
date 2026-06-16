function ErrorPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center  text-white px-8">
      <h1 className="text-7xl md:text-9xl font-bold text-sky-400">
        404
      </h1>

      <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-center">
        Page Not Found
      </h2>

      <p className="mt-4 text-center text-gray-400 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <a
        href="/hero"
        className="mt-8 px-6 py-3 bg-sky-500 rounded-lg font-medium
                   hover:scale-105 hover:bg-sky-600 transition duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default ErrorPage;