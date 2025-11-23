export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition">
        <h2 className="font-bold text-lg mb-2">My Profile</h2>
        <p>View and update your profile information.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition">
        <h2 className="font-bold text-lg mb-2">Orders</h2>
        <p>Check your orders and status.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition">
        <h2 className="font-bold text-lg mb-2">Support</h2>
        <p>Contact support and open tickets.</p>
      </div>
    </div>
  );
}
