import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [latestOrders, setLatestOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(db, "users"));
      const userData = snapshot.docs.map(doc => doc.data());
      setUsers(userData);
    };

    const fetchOrders = async () => {
      const snapshot = await getDocs(collection(db, "orders"));
      const orderData = snapshot.docs.map(doc => doc.data());
      setOrders(orderData);
    };

    const fetchLatestOrders = async () => {
      const q = query(collection(db, "orders"), orderBy("createdAt", "desc"), limit(5));
      const snapshot = await getDocs(q);
      const latest = snapshot.docs.map(doc => doc.data());
      setLatestOrders(latest);
    };

    fetchUsers();
    fetchOrders();
    fetchLatestOrders();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Admin Dashboard</h2>

      <div className="stats-grid">
        <div className="stat-box">
          <h4>Total Users</h4>
          <p>{users.length}</p>
        </div>
        <div className="stat-box">
          <h4>Total Rides</h4>
          <p>{orders.length}</p>
        </div>
      </div>

      <div className="latest-orders">
        <div className="latest-orders-header">
          <h3>Latest Ride</h3>
          <button onClick={() => navigate("/admin/manage-rides")}>See All Rides</button>
        </div>

        {latestOrders.length === 0 ? (
          <p>No Ride found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Ride ID</th>
                <th>User</th>
                <th>Car</th>
                <th>Advance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {latestOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>{order.user?.fullName}</td>
                  <td>{order.car?.name}</td>
                  <td>₹{order.advancePaid}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
