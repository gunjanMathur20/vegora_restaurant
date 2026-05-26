export default function SettingsTab() {
  // Handle user logout
  const handleLogout = () => {
    // Remove current user data from localStorage
    localStorage.removeItem("foodryCurrentUser");

    // Reload page after logout
    window.location.reload();
  };

  return (
    // Settings tab container
    <div>
      {/* Section heading */}
      <h2 className="text-2xl font-black">Settings</h2>

      {/* Settings actions */}
      <div className="mt-6">
        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="px-6 py-3 rounded-2xl bg-red-500 text-white font-bold"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
