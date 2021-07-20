import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
	name: 'blog',
	initialState: {
		blogId: null,
		blogTitle: null,
		blogContent: null,
		blogThumbnailUrl: null,
		blogAuthor: null
	},