import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { SignInForm } from "@/components/auth/SignInForm";
import { SignUpForm } from "@/components/auth/SignUpForm";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { Home } from "@/components/Home";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              <div className="min-h-svh bg-gray-50 flex items-center justify-center p-4">
                <SignInForm />
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div className="min-h-svh bg-gray-50 flex items-center justify-center p-4">
                <SignUpForm />
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
