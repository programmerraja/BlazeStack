import { useAuth } from "@/contexts/AuthContext";
import { Navbar } from "./Navbar";

export function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-svh flex flex-col bg-gray-50">
      <Navbar />

      <div className="container mx-auto p-6 flex-grow">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>

          {user && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
              <div className="bg-gray-50 p-4 rounded-md">
                <p><span className="font-medium">Name:</span> {user.name}</p>
                <p><span className="font-medium">Email:</span> {user.email}</p>
                <p><span className="font-medium">Role:</span> {user.role}</p>
              </div>
            </div>
          )}

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">What's Next?</h2>
            <p className="text-gray-600">
              This is your dashboard where you can manage your account and access various features.
              The authentication system is already set up with secure cookie-based JWT authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
