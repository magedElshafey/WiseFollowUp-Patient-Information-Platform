import DialogComponent from "@/common/components/dialog/dialog";
import MainInput from "@/common/components/inputs/MainInput";
// import { emailSchema } from "@/features/auth/schema/emailSchema";
// import { useAuth } from "@/store/AuthProvider";
// import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IoIosNotificationsOutline } from "react-icons/io";
// import z from "zod";
import useAlertUser from "../../api/useAlertUser";
import { toast } from "sonner";
// import toastErrorMessage from "@/utils/toastApiError";

// const reviewSchema = z.object({
//     email: emailSchema
// })

const ProductAlertButton = ({
  children,
  productId,
}: {
  children: ({
    onClick,
    isPending,
  }: {
    onClick?: () => void;
    isPending?: boolean;
  }) => ReactElement;
  productId: number;
}) => {
  // const { user } = useAuth();
  const { t } = useTranslation();
  //   const { mutateAsync, mutate, isPending } = useAlertUser(productId);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    clearErrors,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  function handleReset() {
    reset();
    clearErrors();
  }

  //   const submitForm = handleSubmit(async (data) => {
  //     const response = await mutateAsync(data.email, {
  //       onSuccess: (response) => {
  //         toast.success(response.data.message);
  //         handleReset();
  //       },
  //     });
  //     return response;
  //   });

  return <></>;
};

export default ProductAlertButton;
