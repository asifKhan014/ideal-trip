// import withAuth from "../../middleware/authMiddleware";
import withAuth from "../../middleware/authmiddleware";

const AdminPage = () => {
  return <div>Welcome Admin!</div>;
};

export default withAuth(AdminPage, "admin"); // Protect with role "admin"
