import { sortableKeys } from "../constants/products.constants";


type SortByKey<T> = T extends string ? `${T}-asc` | `${T}-desc` : never;

export interface Filters {
  year_from?: string;
  year_to?: string;
  country_id?: string;
  county_id?: string;
  organization_type_id?: string;
  organization_id?: string;
  department_id?: string;

}

export interface ProductsFiltersContext {
  sortBy?: SortByKey<(typeof sortableKeys)[number]>;
  filters: Filters;
  isDrawerOpen: boolean;
  setSortBy: (sortBy: ProductsFiltersContext["sortBy"]) => void;
  setIsDrawerOpen: (isOpen: boolean) => void;
  handleChangeFilters: (
    key: keyof Filters,
    value: Filters[typeof key],
    debounce?: boolean
  ) => void;
  resetFilters: () => void;
  appliedFilters: Record<string, string | []>;
}

export interface ProductsViewContext {
  view: "list" | "cards";
  setView: (view: ProductsViewContext["view"]) => void;
}

// Legacy interface for backward compatibility if needed
export interface ProductsContext
  extends ProductsFiltersContext,
  ProductsViewContext { }
