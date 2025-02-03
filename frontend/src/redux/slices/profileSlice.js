import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch the user's profile
export const fetchProfile = createAsyncThunk('profile/fetchProfile', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:5000/api/admin/profile', {
      withCredentials: true, // Include cookies in the request
    });
    return response.data; // Return the user profile data
  } catch (error) {
    return rejectWithValue('Error fetching profile');
  }
});

// Thunk to update user profile
export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async ({ userId, profileData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/admin/profile/${userId}`, // Correct API endpoint
        profileData, // Correct payload structure
        { withCredentials: true }
      );
      return response.data; // Assuming the backend responds with the updated profile data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error updating profile');
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Store the fetched profile
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Update the profile with new data
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;