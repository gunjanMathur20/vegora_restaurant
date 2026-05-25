export default function SettingsTab() {
  const handleLogout = () => {
    localStorage.removeItem("foodryCurrentUser");
    window.location.reload();
  };

  return (
    <div>
      <h2 className="text-2xl font-black">
        Settings
      </h2>

      <div className="mt-6">

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