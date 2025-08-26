const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL;

export interface Post {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  image: string;
  createdAt: string;
  author: string;
  authorAvatar: string;
  categories: string[];
  tags: string[];
  commentCount: number;
}

export async function fetchPosts(
  page = 1,
  perPage = 6,
  search = ""
): Promise<{ posts: Post[]; totalPages: number }> {
  try {
    const url = `${API_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}&search=${search}`;
    const res = await fetch(url);

    if (!res.ok) {
      console.error("fetchPosts error:", url, res.status, res.statusText);
      return { posts: [], totalPages: 1 };
    }

    const data = await res.json();
    const totalPages = Number(res.headers.get("X-WP-TotalPages") || 1);

    if (!Array.isArray(data)) return { posts: [], totalPages };

    const posts: Post[] = data.map((post: any) => ({
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
      summary: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
      content: post.content.rendered,
      image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/default-thumbnail.jpg",
      createdAt: post.date,
      author: post._embedded?.author?.[0]?.name || "Anonim",
      authorAvatar: post._embedded?.author?.[0]?.avatar_urls?.["96"] || "/author.jpg",
      categories: post._embedded?.["wp:term"]?.[0]?.map((c: any) => c.name) || [],
      tags: post._embedded?.["wp:term"]?.[1]?.map((t: any) => t.name) || [],
      commentCount: post.comment_count || 0,
    }));

    return { posts, totalPages };
  } catch (err) {
    console.error("fetchPosts exception:", err);
    return { posts: [], totalPages: 1 };
  }
}

export async function fetchRecentPosts(perPage = 5) {
  try {
    const url = `${API_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&orderby=date&order=desc`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.map((post: any) => ({
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
    }));
  } catch (err) {
    console.error("fetchRecentPosts exception:", err);
    return [];
  }
}

export async function fetchPopularPosts(perPage = 5) {
  try {
    const url = `${API_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&orderby=comment_count`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.map((post: any) => ({
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
    }));
  } catch (err) {
    console.error("fetchPopularPosts exception:", err);
    return [];
  }
}

export async function fetchCategories() {
  try {
    const url = `${API_URL}/wp-json/wp/v2/categories?per_page=10`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data;
  } catch (err) {
    console.error("fetchCategories exception:", err);
    return [];
  }
}

export async function fetchTags() {
  try {
    const url = `${API_URL}/wp-json/wp/v2/tags?per_page=15`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data;
  } catch (err) {
    console.error("fetchTags exception:", err);
    return [];
  }
}

// Optional: ambil komentar terbaru tiap post
export async function fetchComments(postId: number, perPage = 5) {
  try {
    const url = `${API_URL}/wp-json/wp/v2/comments?post=${postId}&per_page=${perPage}&orderby=date&order=desc`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.map((comment: any) => ({
      id: comment.id,
      authorName: comment.author_name,
      content: comment.content.rendered.replace(/<[^>]+>/g, ""),
      date: comment.date,
    }));
  } catch (err) {
    console.error("fetchComments exception:", err);
    return [];
  }
}
