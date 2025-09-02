
// Helper khusus untuk gambar di /storage (langsung path image)
export const getStorageUrl = (imagePath?: string) => {
  if (!imagePath) return "/assets/placeholder.svg";
  if (imagePath.startsWith('http')) return imagePath;
  return `${API_CONFIG.BASE_URL}/storage/${imagePath}`;
};
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000',
  ENDPOINTS: {
    BIMBEL_PROGRAMS: '/api/public/bimbel-programs',
    TRYOUT_PROGRAMS: '/api/public/tryout-programs',
    BOOKS: '/api/public/books',
    POSTS: '/api/public/posts',
    POST_BY_ID: '/api/public/posts',
    POST_BY_SLUG: '/api/public/posts/slug',
    CATEGORIES: '/api/public/categories',
    TEAM_MEMBERS: '/api/public/team-members',
  ANALYTICS_TRACK: '/api/analytics/track',
  }
};

export const getApiUrl = (endpoint: string) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Helper function untuk handle path gambar
export const getImageUrl = (imagePath?: string) => {
  if (!imagePath) return "/assets/placeholder.svg";
  if (imagePath.startsWith('http')) return imagePath;

  // Handle different path formats
  if (imagePath.startsWith('uploads/')) {
    const filename = imagePath.replace('uploads/', '');
    return `${API_CONFIG.BASE_URL}/storage/${filename}`;
  }
  if (imagePath.startsWith('books/')) {
    return `${API_CONFIG.BASE_URL}/storage/${imagePath}`;
  }
  if (imagePath.startsWith('team_members/')) {
    return `${API_CONFIG.BASE_URL}/storage/${imagePath}`;
  }
  if (imagePath.startsWith('team-members/')) {
    return `${API_CONFIG.BASE_URL}/storage/${imagePath}`;
  }
  if (imagePath.startsWith('storage/')) {
    return `${API_CONFIG.BASE_URL}/${imagePath}`;
  }
  if (imagePath.startsWith('assets/')) {
    return `/${imagePath}`;
  }

  return "/assets/placeholder.svg";
};
