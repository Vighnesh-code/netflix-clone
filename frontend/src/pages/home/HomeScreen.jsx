import React from "react";
import { useAuthStore } from "../../store/authUser";

const HomeScreen = () => {
  const { logOut, isLoggingOut } = useAuthStore();
  const handleLogout = (e) => {
    e.preventDefault();
    logOut();
  };

  return (
    <div>
      <h1>HomeScreen</h1>
      <button onClick={handleLogout} className="text-red-500 bg-black">
        {isLoggingOut ? "Logging Out..." : "LogOut"}
      </button>
    </div>
  );
};

export default HomeScreen;
