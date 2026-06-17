import client from './client.js';

// ---------- AUTH ----------
export const authApi = {
  login: (data) => client.post('/auth/login', data).then((r) => r.data),
  register: (data) => client.post('/auth/register', data).then((r) => r.data),
  refresh: () => client.post('/auth/refresh').then((r) => r.data),
  logout: () => client.post('/auth/logout').then((r) => r.data),
  logoutAll: () => client.post('/auth/logout-all').then((r) => r.data),
  forgotPassword: (email) => client.post('/auth/forgot-password', { email }).then((r) => r.data),
  resetPassword: (data) => client.post('/auth/reset-password', data).then((r) => r.data),
  verifyEmail: (token) => client.post('/auth/verify-email', { token }).then((r) => r.data),
  resendVerification: (email) => client.post('/auth/resend-verification', { email }).then((r) => r.data),
  profile: () => client.get('/auth/profile').then((r) => r.data),
  updateProfile: (data) => client.put('/auth/profile', data).then((r) => r.data),
};

// ---------- ARTICLES ----------
export const articleApi = {
  list: (params) => client.get('/articles', { params }).then((r) => r.data),
  get: (idOrSlug) => client.get(`/articles/${idOrSlug}`).then((r) => r.data),
  search: (q) => client.get('/articles/search', { params: { q } }).then((r) => r.data),
  byCategory: (slug, params) => client.get(`/articles/category/${slug}`, { params }).then((r) => r.data),
  create: (data) => client.post('/articles', data).then((r) => r.data),
  update: (id, data) => client.put(`/articles/${id}`, data).then((r) => r.data),
  archive: (id) => client.patch(`/articles/${id}/archive`).then((r) => r.data),
  remove: (id) => client.delete(`/articles/${id}`).then((r) => r.data),
};

// ---------- COMMENTS ----------
export const commentApi = {
  forArticle: (articleId) => client.get(`/comments/article/${articleId}`).then((r) => r.data),
  create: (data) => client.post('/comments', data).then((r) => r.data),
  listAll: (params) => client.get('/comments', { params }).then((r) => r.data),
  approve: (id) => client.put(`/comments/${id}/approve`).then((r) => r.data),
  reply: (id, content) => client.post(`/comments/${id}/reply`, { content }).then((r) => r.data),
  update: (id, data) => client.put(`/comments/${id}`, data).then((r) => r.data),
  remove: (id) => client.delete(`/comments/${id}`).then((r) => r.data),
};

// ---------- BOOKS ----------
export const bookApi = {
  list: (params) => client.get('/books', { params }).then((r) => r.data),
  get: (idOrSlug) => client.get(`/books/${idOrSlug}`).then((r) => r.data),
  download: (id) => client.get(`/books/${id}/download`).then((r) => r.data),
  create: (data) => client.post('/books', data).then((r) => r.data),
  update: (id, data) => client.put(`/books/${id}`, data).then((r) => r.data),
  remove: (id) => client.delete(`/books/${id}`).then((r) => r.data),
};

// ---------- NEWS ----------
export const newsApi = {
  list: (params) => client.get('/news', { params }).then((r) => r.data),
  get: (idOrSlug) => client.get(`/news/${idOrSlug}`).then((r) => r.data),
  create: (data) => client.post('/news', data).then((r) => r.data),
  update: (id, data) => client.put(`/news/${id}`, data).then((r) => r.data),
  remove: (id) => client.delete(`/news/${id}`).then((r) => r.data),
};

// ---------- EVENTS ----------
export const eventApi = {
  list: (params) => client.get('/events', { params }).then((r) => r.data),
  get: (id) => client.get(`/events/${id}`).then((r) => r.data),
  create: (data) => client.post('/events', data).then((r) => r.data),
  update: (id, data) => client.put(`/events/${id}`, data).then((r) => r.data),
  remove: (id) => client.delete(`/events/${id}`).then((r) => r.data),
};

// ---------- TAXONOMY ----------
export const taxonomyApi = {
  categories: () => client.get('/categories').then((r) => r.data),
  createCategory: (data) => client.post('/categories', data).then((r) => r.data),
  updateCategory: (id, data) => client.put(`/categories/${id}`, data).then((r) => r.data),
  removeCategory: (id) => client.delete(`/categories/${id}`).then((r) => r.data),
  tags: () => client.get('/tags').then((r) => r.data),
};

// ---------- NEWSLETTER ----------
export const newsletterApi = {
  subscribe: (email) => client.post('/newsletter/subscribe', { email }).then((r) => r.data),
  unsubscribe: (email) => client.post('/newsletter/unsubscribe', { email }).then((r) => r.data),
  subscribers: (params) => client.get('/newsletter/subscribers', { params }).then((r) => r.data),
};

// ---------- CONTACT ----------
export const contactApi = {
  send: (data) => client.post('/contact', data).then((r) => r.data),
  list: (params) => client.get('/contact', { params }).then((r) => r.data),
  markRead: (id) => client.patch(`/contact/${id}/read`).then((r) => r.data),
  remove: (id) => client.delete(`/contact/${id}`).then((r) => r.data),
};

// ---------- PROFILE / PORTFOLIO ----------
export const profileApi = {
  get: () => client.get('/profile-info').then((r) => r.data),
  save: (data) => client.put('/profile-info', data).then((r) => r.data),
};

// ---------- STATS ----------
export const statsApi = {
  get: () => client.get('/stats').then((r) => r.data),
};

// ---------- UPLOAD ----------
export const uploadApi = {
  single: (file) => {
    const fd = new FormData();
    fd.append('file', file);
    return client.post('/upload', fd, { headers: { 'Content-Type': 'multipart/form-data' } }).then((r) => r.data);
  },
};

// ---------- USERS (admin) ----------
export const userApi = {
  list: (params) => client.get('/users', { params }).then((r) => r.data),
  get: (id) => client.get(`/users/${id}`).then((r) => r.data),
  create: (data) => client.post('/users', data).then((r) => r.data),
  update: (id, data) => client.put(`/users/${id}`, data).then((r) => r.data),
  remove: (id) => client.delete(`/users/${id}`).then((r) => r.data),
};

// ---------- AUDIT (admin) ----------
export const auditApi = {
  list: (params) => client.get('/audit', { params }).then((r) => r.data),
  clear: (before) => client.delete('/audit', { params: before ? { before } : {} }).then((r) => r.data),
};

// ---------- BANNERS ----------
export const bannerApi = {
  all: () => client.get('/banners').then((r) => r.data),
  get: (page) => client.get(`/banners/${page}`).then((r) => r.data),
  save: (page, data) => client.put(`/banners/${page}`, data).then((r) => r.data),
};

// ---------- ANNOUNCEMENTS ----------
export const announcementApi = {
  active: () => client.get('/announcements').then((r) => r.data),
  all: () => client.get('/announcements/all').then((r) => r.data),
  create: (data) => client.post('/announcements', data).then((r) => r.data),
  update: (id, data) => client.put(`/announcements/${id}`, data).then((r) => r.data),
  remove: (id) => client.delete(`/announcements/${id}`).then((r) => r.data),
};

// ---------- PUBLICATIONS SCIENTIFIQUES ----------
export const publicationApi = {
  list: (params) => client.get('/publications', { params }).then((r) => r.data),
  get: (idOrSlug) => client.get(`/publications/${idOrSlug}`).then((r) => r.data),
  create: (data) => client.post('/publications', data).then((r) => r.data),
  update: (id, data) => client.put(`/publications/${id}`, data).then((r) => r.data),
  remove: (id) => client.delete(`/publications/${id}`).then((r) => r.data),
  categories: () => client.get('/publications/categories').then((r) => r.data),
  createCategory: (data) => client.post('/publications/categories', data).then((r) => r.data),
  updateCategory: (id, data) => client.put(`/publications/categories/${id}`, data).then((r) => r.data),
  removeCategory: (id) => client.delete(`/publications/categories/${id}`).then((r) => r.data),
};

// ---------- ENCADREMENTS ----------
export const supervisionApi = {
  list: (params) => client.get('/supervisions', { params }).then((r) => r.data),
  get: (id) => client.get(`/supervisions/${id}`).then((r) => r.data),
  create: (data) => client.post('/supervisions', data).then((r) => r.data),
  update: (id, data) => client.put(`/supervisions/${id}`, data).then((r) => r.data),
  remove: (id) => client.delete(`/supervisions/${id}`).then((r) => r.data),
  categories: () => client.get('/supervisions/categories').then((r) => r.data),
  createCategory: (data) => client.post('/supervisions/categories', data).then((r) => r.data),
  updateCategory: (id, data) => client.put(`/supervisions/categories/${id}`, data).then((r) => r.data),
  removeCategory: (id) => client.delete(`/supervisions/categories/${id}`).then((r) => r.data),
};
