import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, updateUserRole, deleteUser, updateUserStatus } from '../redux/slices/userSlice';

const ManageUsers = () => {
  const dispatch = useDispatch();
  const { data: users, loading, error } = useSelector((state) => state.users);

  // Fetch users on component mount
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Handle role update
  const handleUpdateRole = (userId, newRole) => {
    if (!newRole) {
      alert('Please select a valid role!');
      return;
    }
    dispatch(updateUserRole({ userId, newRole }));
  };

  // Handle status update
  const handleUpdateStatus = (userId, newStatus) => {
    if (!newStatus) {
      alert('Please select a valid status!');
      return;
    }
    dispatch(updateUserStatus({ userId, newStatus }));
  };

  // Handle user deletion
  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(userId));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Manage Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Current Role</th>
            <th>Update Role</th>
            <th>Current Status</th>
            <th>Update Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {user.role !== 'Admin' ? (
                  <select
                    defaultValue={user.role}
                    onChange={(e) => handleUpdateRole(user._id, e.target.value)}
                  >
                    <option value="Reader">Reader</option>
                    <option value="Reporter">Reporter</option>
                    <option value="Editor">Editor</option>
                  </select>
                ) : (
                  <em>Admin</em>
                )}
              </td>
              <td>{user.status}</td>
              <td>
                {user.role !== 'Admin' ? (
                  <select
                    defaultValue={user.status}
                    onChange={(e) => handleUpdateStatus(user._id, e.target.value)}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                    <option value="Blocked">Block</option>
                   
                  </select>
                ) : (
                  <em>Admin</em>
                )}
              </td>
              <td>
                {user.role !== 'Admin' && (
                  <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
