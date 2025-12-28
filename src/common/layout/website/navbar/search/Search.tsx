import { IoIosSearch } from "react-icons/io";
import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SearchResults from "./components/SearchResult";
import { Axios } from "@/lib/axios/Axios";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleShowSearch = () => setShowSearch((prev) => !prev);
  const DEBOUNCE_INTERVAL = 400;
  const { t } = useTranslation();
  // const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState({ value: "", deferred: "" });

  const dropdownRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleInputChange = useCallback((val: string) => {
    // update immediate value
    setSearch((prev) => ({ ...prev, value: val }));

    // if empty input, clear deferred immediately (avoid stale queries)
    if (!val.trim()) {
      // clear any scheduled deferred update
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
      // clear deferred so enabled becomes false
      setSearch({ value: "", deferred: "" });
      return;
    }

    // otherwise debounce updating deferred
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setSearch((prev) => ({ ...prev, deferred: val }));
      debounceRef.current = null;
    }, DEBOUNCE_INTERVAL);
  }, []);

  const clearSearch = useCallback(() => {
    // clear both value & deferred and any pending timeout
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
    setSearch({ value: "", deferred: "" });
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { data: products, isFetching } = useQuery({
    queryKey: [apiRoutes.search, search.deferred],
    enabled: !!search.deferred,
    queryFn: async ({ queryKey, signal }) => {
      const [, term] = queryKey as [string, string];

      const params: any = { name: term };

      const response = await Axios.get(apiRoutes.search, {
        params,
        signal,
      });

      return response.data.data;
    },

    staleTime: 1000 * 30,
  });

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
    };
  }, []);

  const hasSearchValue = !!search.value.trim();
  const hasDeferredValue = !!search.deferred.trim();

  const searchState = useMemo(() => {
    if (!hasDeferredValue) return "idle";
    if (isFetching) return "loading";
    if (products?.length === 0) return "empty";
    if (products?.length > 0) return "success";
    return "idle";
  }, [hasDeferredValue, isFetching, products]);

  const showResults = isFocused && hasDeferredValue;
  const onClose = () => setShowSearch(false);
  return (
    <>
      <button onClick={toggleShowSearch}>
        <IoIosSearch size={20} />
      </button>
      <div
        className={`duration-300 transition-all  ${
          showSearch
            ? "fixed top-0 left-0 w-screen h-screen bg-black/60 z-[40000] flex items-center justify-center"
            : "hidden"
        } `}
      >
        <div className="containerr">
          <div
            ref={dropdownRef}
            className=" bg-slate-50/80 border border-darkBlue w-full md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px] mx-auto rounded-md p-3 min-w-0 relative"
          >
            <input
              type="text"
              aria-label={t("search")}
              className=" capitalize border-none outline-none bg-transparent caret-orangeColor truncate w-full"
              placeholder={t("search")}
              value={search.value}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              onChange={(e) => handleInputChange(e.target.value)}
              aria-busy={isFetching}
            />

            {showResults && (
              <div className="absolute top-full left-0 w-full bg-white border rounded shadow-lg z-[1000]  max-h-[350px]">
                <SearchResults
                  products={products}
                  isLoading={searchState === "loading"}
                  hasSearchValue={hasSearchValue}
                  onClear={clearSearch}
                  onClose={onClose}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
