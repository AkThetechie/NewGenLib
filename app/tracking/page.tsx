export default function TrackingSystem() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold">Real-Time Tracking System</h3>
        <p className="mt-4 text-lg">Monitor student and faculty movements with cutting-edge biometric and facial recognition technology.</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300">
          <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-300">Live Attendance</h4>
          <p className="text-gray-700 dark:text-gray-300 mt-2">Track real-time student attendance and library usage patterns.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300">
          <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-300">Secure Entry</h4>
          <p className="text-gray-700 dark:text-gray-300 mt-2">Facial recognition ensures only authorized users access resources.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300">
          <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-300">Activity Reports</h4>
          <p className="text-gray-700 dark:text-gray-300 mt-2">Generate and analyze monthly statistical reports effortlessly.</p>
        </div>
      </div>
    </section>
  );
}
