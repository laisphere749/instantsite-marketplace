export interface User {
  id: string;
  email: string;
  role: 'merchant' | 'customer' | 'admin';
  created_at: string;
}

export interface Project {
  id: string;
  user_id: string;
  shop_name: string;
  subdomain: string;
  theme_config: Record<string, any>;
  status: 'active' | 'suspended';
}

export interface Product {
  id: string;
  project_id: string;
  title: string;
  description: string;
  price_pkr: number;
  stock_quantity: number;
  image_url: string;
  sentiment_score: number;
}