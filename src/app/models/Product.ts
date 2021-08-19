import { Brand } from "./Brand";
import { Category } from "./Category";
import { VehicleBrand } from "./VehicleBrands";
import { VehicleModel } from "./VehicleModel";

export interface Product {
  id: number;
  product_code: string;
  title: string;
  description: string;
  quantity: number;
  category: Category;
  price: string;
  offer: string;
  offer_status: boolean;
  status: string;
  brand: Brand;
  featured_status: 1
  media: Media[];
  slug: string;
  vehicle_brand: VehicleBrand;
  vehicle_model: VehicleModel;
}

export interface Media {
  id: number;
  published_product_id: number;
  file_name: string;
  file_type: string;
  created_at: Date;
  updated_at: Date;
}
