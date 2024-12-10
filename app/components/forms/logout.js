import { useRouter } from "next/router";
// import { removeToken } from "../utils/auth";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // removeToken(); // Remove token from storage
    router.push("/login"); // Redirect to login page
  };

  return <button onClick={handleLogout}>Logout</button>;
}
