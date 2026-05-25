import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

// Attach JWT token from localStorage on every request
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const raw = localStorage.getItem("propashop-auth");
    if (raw) {
      try {
        const { state } = JSON.parse(raw);
        if (state?.token) {
          config.headers.Authorization = `Bearer ${state.token}`;
        }
      } catch {
        // ignore parse errors
      }
    }
  }
  return config;
});

// Global error handling
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // Clear auth state and redirect to login
      if (typeof window !== "undefined") {
        localStorage.removeItem("propashop-auth");
        window.location.href = "/login";
      }
    }
    return Promise.reject(err);
  }
);

// ─── API Helpers ───────────────────────────────────────────────────

export const productsApi = {
  list:      (params?: Record<string, unknown>) => api.get("/products", { params }),
  byId:      (id: string)                        => api.get(`/products/${id}`),
  byCollection: (slug: string, params?: Record<string, unknown>) =>
    api.get(`/collections/${slug}/products`, { params }),
};

export const collectionsApi = {
  list:  ()           => api.get("/collections"),
  byId:  (id: string) => api.get(`/collections/${id}`),
};

export const authApi = {
  register: (data: { email: string; password: string; firstName: string; lastName: string; phone?: string }) =>
    api.post("/auth/register", data),
  login:    (data: { email: string; password: string }) =>
    api.post("/auth/login", data),
  me:       ()           => api.get("/auth/me"),
};

export const ordersApi = {
  create:  (data: unknown)  => api.post("/orders", data),
  list:    ()               => api.get("/orders"),
  byId:    (id: string)     => api.get(`/orders/${id}`),
  track:   (id: string)     => api.get(`/orders/${id}/track`),
};

export const deliveryApi = {
  quote: (address: string) =>
    api.post("/delivery/quote", { address }),
};

export const wishlistApi = {
  list:   ()              => api.get("/wishlist"),
  add:    (productId: string) => api.post("/wishlist", { productId }),
  remove: (productId: string) => api.delete(`/wishlist/${productId}`),
};

// ─── Utility ───────────────────────────────────────────────────────

export const formatPrice = (amount: number): string =>
  `R ${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

export const extractErrorMessage = (err: unknown): string => {
  if (axios.isAxiosError(err)) {
    return err.response?.data?.message ?? err.message ?? "Something went wrong";
  }
  return "Something went wrong";
};
