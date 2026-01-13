import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";

import ProductCard from "../card/ProductCard";
import ProductListCard from "../card/ProductListCard";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";
import useInfiniteProducts from "../../api/useInfiniteProducts";
import MainBtn from "@/common/components/buttons/MainBtn";
import ProductSkelton from "@/common/components/loader/skeltons/ProductSkelton";

const ProductsList: FC = () => {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const queryResult = useInfiniteProducts();
  console.log("query from leaflet", queryResult?.data);
  const products = (queryResult.data?.pages || []).flatMap((page) => page.data);
  console.log("products", products);
  return (
    <div className="w-full flex-1">
      <div className="bg-white rounded-lg">
        <FetchHandler queryResult={queryResult} skeletonType="product">
          {products.length > 0 ? (
            <div>
              {products.map((product) => (
                <Link className="block mb-5" to={`/leaflets/${product?.slug}`}>
                  {product?.title}
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center py-12">
              <div className="text-gray-500 text-2xl xl:text-4xl">
                {t("No products found")}
              </div>
            </div>
          )}

          {queryResult.isFetchingNextPage && <ProductSkelton />}

          {queryResult.hasNextPage && !queryResult.isFetchingNextPage && (
            <div className="py-10 flex-center">
              <MainBtn
                onClick={() => {
                  const nextPage = pageFromUrl + 1;

                  // update URL
                  setSearchParams(
                    (prev) => {
                      const params = new URLSearchParams(prev);
                      params.set("page", String(nextPage));
                      return params;
                    },
                    { replace: true }
                  );

                  queryResult.fetchNextPage();
                }}
              >
                {t("load more")}
              </MainBtn>
            </div>
          )}
        </FetchHandler>
      </div>
    </div>
  );
};

export default memo(ProductsList);
