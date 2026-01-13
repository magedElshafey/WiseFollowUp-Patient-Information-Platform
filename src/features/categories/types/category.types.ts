export interface BaseCategory {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
  icon?: string;
}

export interface Category extends BaseCategory {
  description: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface CategoriesListType extends BaseCategory {
  children?: CategoriesListType[];
}

export interface CountriesListType {
  name: string,
  code: string,
  flag_icon: string,
  created_at: string,
  updated_at: string,
  is_active: boolean,
  id: number,
  counties_count: number,
  organizations_count: number,
}
export interface CountiesListType {
  id: number,
  name: string,
  code: string,
  country_id: number,
  country: CountriesListType,

}