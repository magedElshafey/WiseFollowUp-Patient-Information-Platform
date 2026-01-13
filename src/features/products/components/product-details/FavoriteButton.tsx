import { FC } from "react";
import { useTranslation } from "react-i18next";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Loader from "@/common/components/loader/spinner/Loader";
import useAddFavorite from "../../api/useAddFavorite";

interface FavoriteButtonProps {
  productId: number;
  isInWishlist?: boolean;
  className?: string;
  showLabel?: boolean;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({
  productId,
  isInWishlist = false,
  className = "",
  showLabel = true,
}) => {
  const { t } = useTranslation();
  const { mutate: toggleFavorite, isPending } = useAddFavorite();

  const handleToggleFavorite = () => {
    toggleFavorite(productId);
  };

  return <></>;
};

export default FavoriteButton;
