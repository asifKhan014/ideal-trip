import { withAuth } from "../../middleware/authmiddleware"; // Ensure this path is correct

const Dashboard = () => {
  return <div>Welcome to your dashboard!</div>;
};

export default withAuth(Dashboard);
