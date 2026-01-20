import React, { createContext, useContext, useMemo } from "react";
import useGetWebsiteSettings from "@/features/settings/api/useGetWebsiteSettings";
import type { Setting } from "@/features/settings/types/settings.type";
import {
  useYearStats,
  YearStat,
} from "@/features/uk-hierarchy/components/hierarchy-filter/components/years-filter/useYearStats";

type WebsiteSettingsContextValue = {
  settings?: Setting;
  isLoading: boolean;
  loadingYears: boolean;
  yearFrom?: number;
  yearto?: number;
  years?: YearStat[];
};

const WebsiteSettingsContext =
  createContext<WebsiteSettingsContextValue | null>(null);

export const WebsiteSettingsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const query = useGetWebsiteSettings();
  const yearsQuery = useYearStats();
  const value = useMemo(
    () => ({
      settings: query.data,
      isLoading: query.isLoading,
      yearFrom: yearsQuery?.data?.from,
      yearto: yearsQuery?.data?.to,
      years: yearsQuery?.data?.data,
      loadingYears: yearsQuery?.isLoading,
    }),
    [query.data, query.isLoading, yearsQuery],
  );

  return (
    <WebsiteSettingsContext.Provider value={value}>
      {children}
    </WebsiteSettingsContext.Provider>
  );
};

export const useWebsiteSettings = () => {
  const ctx = useContext(WebsiteSettingsContext);
  if (!ctx) {
    throw new Error(
      "useWebsiteSettings must be used inside WebsiteSettingsProvider",
    );
  }
  return ctx;
};
