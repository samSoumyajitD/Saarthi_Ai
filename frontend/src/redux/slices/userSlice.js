import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:5000/api/admin', {
      withCredentials: true, // Include cookies in the request
    });
    return response.data; // Return user data
  } catch (error) {
    return rejectWithValue('Error fetching users');
  }
});

// Thunk to update user role
export const updateUserRole = createAsyncThunk(
  'users/updateUserRole',
  async ({ userId, newRole }, { rejectWithValue }) => {
    try {
      // Sending userId and role in the request body
      const response = await axios.put(
        `http://localhost:5000/api/admin/${userId}`, // Correct API endpoint
        { role: newRole }, // Correct payload structure
        { withCredentials: true }
      );
      
      // Assuming the backend responds with the updated user data
      return { userId, newRole }; // Return the updated user info to update the Redux store
    } catch (error) {
      // Handling errors by returning a rejected action with a meaningful message
      return rejectWithValue(error.response?.data?.message || 'Error updating role');
    }
  }
);


// Thunk to delete a user
export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId, { rejectWithValue }) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/admin/${userId}`,
        {
          withCredentials: true,
        }
      );
      return userId; // Return deleted user's ID
    } catch (error) {
      return rejectWithValue('Error deleting user');
    }
  }
);

// Thunk to update user status
export const updateUserStatus = createAsyncThunk(
  'users/updateUserStatus',
  async ({ userId, newStatus }, { rejectWithValue }) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/user/${userId}/status`,
        { status: newStatus },
        { withCredentials: true }
      );
      return { userId, newStatus }; // Return updated user status
    } catch (error) {
      return rejectWithValue('Error updating status');
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.users;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserRole.pending, (state) => {
        state.error = null;
      })
      .addCase(updateUserRole.fulfilled, (state, action) => {
        const { userId, newRole } = action.payload;
        const user = state.data.find((u) => u._id === userId);
        if (user) user.role = newRole; // Update user role locally
      })
      .addCase(updateUserRole.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const userId = action.payload;
        state.data = state.data.filter((user) => user._id !== userId);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateUserStatus.pending, (state) => {
        state.error = null;
      })
      .addCase(updateUserStatus.fulfilled, (state, action) => {
        const { userId, newStatus } = action.payload;
        const user = state.data.find((u) => u._id === userId);
        if (user) user.status = newStatus; // Update user status locally
      })
      .addCase(updateUserStatus.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
