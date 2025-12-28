import { FC } from "react";
import { Link } from "react-router-dom";
import ProductRate from "./ProductRate";
import { useTranslation } from "react-i18next";
import { ProductDetails } from "../../types/product.types";
import HtmlConverter from "../../../../common/components/htmlConverter/HtmlConverter";
import ShareButton from "./ShareButton";
type Props = {
  product: ProductDetails;
};

const ProductInfo: FC<Props> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div className="px-2 flex flex-col gap-4">
      <div className="border-b pb-4">
        <p className="text-inherit text-xl mb-2 text-wrap">{product?.name}</p>
        <ProductRate
          rating={product?.average_rate}
          reviewCount={product?.reviews.length}
        />
      </div>

      <div className="appearance-auto">
        <HtmlConverter html={product?.description} />
      </div>
      <div
        className={`text-sm w-fit flex items-center gap-4 rounded border py-1 px-2 ${
          product?.stock_status === "in_stock"
            ? "bg-background-green/20 border-background-green"
            : "bg-red-50 border-red-300"
        }`}
      >
        <p>{t("availability")}</p>
        <p
          className={
            product?.stock_status === "in_stock"
              ? "text-background-green"
              : "text-red-600"
          }
        >
          {product?.stock_quantity} {t("currently available")}
        </p>
      </div>
      {product?.stock_quantity > 0 ? (
        <div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 mt-1"></div>
        </div>
      ) : (
        <></>
      )}

      <div className="flex items-center gap-5 pb-4 border-b">
        <ShareButton product={product} />
      </div>

      {/* Product Metadata Section */}
      <div className="space-y-3">
        {/* Brand */}
        {product?.brand && (
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700 me-2">
              {t("brand")}:
            </span>
            <Link
              to={`/products?filter-brand=${product?.brand.id}`}
              className="text-gray-600 hover:text-orangeColor hover:underline transition-colors duration-200"
            >
              {product?.brand.name}
            </Link>
          </div>
        )}

        {/* Category */}
        {product?.category && (
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700 me-2">
              {t("category")}:
            </span>
            <Link
              to={`/products?filter-category=${product?.category.id}`}
              className="text-gray-600 hover:text-orangeColor hover:underline transition-colors duration-200"
            >
              {product?.category.name}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
