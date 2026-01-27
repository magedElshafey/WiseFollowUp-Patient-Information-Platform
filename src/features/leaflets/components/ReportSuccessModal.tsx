import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

type Props = {
    open: boolean;
    onClose: () => void;
    buyMeCoffeeUrl?: string;
};

const ReportSuccessModal: React.FC<Props> = ({
    open,
    onClose,
    buyMeCoffeeUrl = "https://ko-fi.com/wisefollowup",
}) => {
    const { t } = useTranslation();

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <div
                            className="relative w-full max-w-md rounded-card bg-bg-surface p-6 shadow-soft text-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close */}
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 text-text-muted hover:text-text-main"
                            >
                                ✕
                            </button>

                            {/* Content */}
                            <h2 className="text-lg font-semibold text-text-main">
                                {t("Thank you for letting us know")}
                            </h2>

                            <p className="mt-2 text-sm text-text-muted leading-relaxed">
                                {t(
                                    "Our team will review this leaflet as soon as possible. Your feedback helps us keep medical information accurate and free for everyone.",
                                )}
                            </p>

                            {/* Donation */}
                            <a
                                onClick={onClose}
                                href={buyMeCoffeeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="
                  mt-5 inline-flex h-11 w-full items-center justify-center gap-2
                  rounded-pill bg-primary
                  text-sm font-semibold text-white
                  shadow-soft hover:brightness-110
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-primary
                "
                            >
                                <span aria-hidden>☕</span>
                                {t("Buy us a Kofi")}
                            </a>

                            <p className="mt-3 text-[11px] text-text-muted">
                                {t("Your support helps us keep this content free.")}
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ReportSuccessModal;
