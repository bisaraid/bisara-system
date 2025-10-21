export default function App() {
  return (
    <>
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold text-blue-500">
          🎉 Bisara System Berhasil Jalan!
        </h1>
        <p className="text-gray-600 mt-4">
          Sekarang ini tampilan dari React App kamu.
        </p>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navigate to="/dashboard" replace />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Routes>
                  <Route index element={<Dashboard />} />
                  <Route
                    path="users"
                    element={
                      <ProtectedRoute requireAdmin>
                        <Users />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="profile" element={<Profile />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
