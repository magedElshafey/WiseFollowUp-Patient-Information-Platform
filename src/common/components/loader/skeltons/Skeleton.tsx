import ProductSkelton from "./ProductSkelton";
import SliderSkeleton from "./SliderSkelton";
import { SkeletonType } from "../../../../types/SkeltonType";
import BlogSkelton from "./BlogSkelton";
import HeroSkeleton from "./HeroSkeltion";
import FooterSkeleton from "./FooterSkeleton";
import ListSkeleton from "./ListSkeleton";

interface SkeltonProps {
  type: SkeletonType;
}
const Skeleton: React.FC<SkeltonProps> = ({ type }) => {
  switch (type) {
    case "hero":
      return <HeroSkeleton />;
    case "leaflet":
      return <ProductSkelton />;
    case "slider":
      return <SliderSkeleton />;
    case "blog":
      return <BlogSkelton />;
    case "list":
      return <ListSkeleton />;
    case "footer":
      return <FooterSkeleton />;

    default:
      return null;
  }
};

export default Skeleton;
