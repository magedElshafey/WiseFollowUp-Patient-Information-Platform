import { useTranslation } from "react-i18next";
const NHSLabel = () => {
  const { t } = useTranslation();
  return (
    <div className="w-screen overflow-x-hidden py-3 bg-slate-50/80 flex items-center justify-center">
      <div className="containerr flex items-center gap-5">
        <div className="py-1 px-2 flex-center bg-darkBlue text-white uppercase">
          nhs
        </div>
        <p className="flex-1 text-slate-900">
          {t(
            "Our clinical information meets NHS England's Information Standard."
          )}
        </p>
      </div>
    </div>
  );
};

export default NHSLabel;
