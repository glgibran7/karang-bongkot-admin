"use client";

import { useState } from "react";
import { users } from "@/mock/users";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";

export default function LoginPage() {
  const router = useRouter();

  const login = useAuthStore((state) => state.login);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = users.find((u) => u.username === username);

    if (!user) {
      setError("Username tidak ditemukan");
      return;
    }

    if (user.password !== password) {
      setError("Password salah");
      return;
    }

    login(user);

    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-xl border bg-white space-y-4">
        <h1 className="text-2xl font-bold">Login Admin</h1>

        <input
          placeholder="Username"
          className="w-full border p-3 rounded-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded">{error}</div>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-3 rounded-lg"
        >
          Masuk
        </button>
      </div>
    </div>
  );
}
