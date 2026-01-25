// import React, { useMemo, useRef, useState } from "react";
// import SectionHeader from "@/common/components/section-header/SectionHeader";
// import BodySystemTile from "./BodySystemTile";
// import type { DepartmentSystem } from "@/features/uk-hierarchy/types/ukHierarchy.types";
// import { useTranslation } from "react-i18next";
// type Props = {
//   systems: DepartmentSystem[];
// };

// const INITIAL_VISIBLE_COUNT = 12;

// const BrowseByBodySection: React.FC<Props> = ({ systems }) => {
//   const { t } = useTranslation();
//   const [showAll, setShowAll] = useState(false);
//   const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

//   const visibleSystems = useMemo(() => {
//     return showAll ? systems : systems.slice(0, INITIAL_VISIBLE_COUNT);
//   }, [systems, showAll]);

//   const hasMore = systems.length > INITIAL_VISIBLE_COUNT;

//   const handleToggle = () => {
//     setShowAll((prev) => !prev);

//     // UX & Accessibility: رجّع الفوكس للزر بعد التغيير
//     requestAnimationFrame(() => {
//       toggleButtonRef.current?.focus();
//     });
//   };

//   return (
//     <section aria-labelledby="browse-by-body-heading" className="section-shell">
//       <div className="containerr">
//         <SectionHeader
//           title="Browse by body system"
//           titleId="browse-by-body-heading"
//           description="Choose the area of the body to explore related patient leaflets"
//           hasViewAll={false}
//         />

//         <ul
//           role="list"
//           className="
//             grid gap-4
//             grid-cols-2 md:grid-cols-3
//             lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
//           "
//         >
//           {visibleSystems.map((system) => (
//             <li key={system.id}>
//               <BodySystemTile system={system} />
//             </li>
//           ))}
//         </ul>

//         {hasMore && (
//           <div className="mt-6 flex justify-center">
//             <button
//               ref={toggleButtonRef}
//               type="button"
//               onClick={handleToggle}
//               className="
//                 rounded-lg border border-gray-300
//                 px-6 py-2 text-sm font-medium
//                 transition hover:bg-gray-100
//                 focus:outline-none focus-visible:ring
//                 focus-visible:ring-primary-500
//               "
//               aria-expanded={showAll}
//               aria-controls="browse-by-body-heading"
//             >
//               {showAll ? t("Show less") : t("View more")}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default BrowseByBodySection;

// import React, { useMemo, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import SectionHeader from "@/common/components/section-header/SectionHeader";
// import BodySystemTile from "./BodySystemTile";
// import type { DepartmentSystem } from "@/features/uk-hierarchy/types/ukHierarchy.types";
// import { useTranslation } from "react-i18next";

// type Props = {
//   systems: DepartmentSystem[];
// };

// const INITIAL_VISIBLE_COUNT = 12;

// const BrowseByBodySection: React.FC<Props> = ({ systems }) => {
//   const { t } = useTranslation();
//   const [showAll, setShowAll] = useState(false);
//   const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

//   const visibleSystems = useMemo(() => {
//     return showAll ? systems : systems.slice(0, INITIAL_VISIBLE_COUNT);
//   }, [systems, showAll]);

//   const hasMore = systems.length > INITIAL_VISIBLE_COUNT;

//   const handleToggle = () => {
//     setShowAll((prev) => !prev);

//     // UX & Accessibility: رجوع الفوكس للزر
//     requestAnimationFrame(() => {
//       toggleButtonRef.current?.focus();
//     });
//   };

//   return (
//     <section aria-labelledby="browse-by-body-heading" className="section-shell">
//       <div className="containerr">
//         <SectionHeader
//           title="Browse by body system"
//           titleId="browse-by-body-heading"
//           description="Choose the area of the body to explore related patient leaflets"
//           hasViewAll={false}
//         />

//         <AnimatePresence initial={false}>
//           <motion.ul
//             key={showAll ? "expanded" : "collapsed"}
//             role="list"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="
//               overflow-hidden
//               grid gap-4
//               grid-cols-2
//               md:grid-cols-3
//               lg:grid-cols-4
//               xl:grid-cols-5
//               2xl:grid-cols-6
//             "
//           >
//             {visibleSystems.map((system) => (
//               <motion.li
//                 key={system.id}
//                 initial={{ opacity: 0, y: 12 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.25 }}
//               >
//                 <BodySystemTile system={system} />
//               </motion.li>
//             ))}
//           </motion.ul>
//         </AnimatePresence>

//         {hasMore && (
//           <div className="mt-6 flex justify-center">
//             <button
//               ref={toggleButtonRef}
//               type="button"
//               onClick={handleToggle}
//               className="
//                 rounded-lg
//                 border border-gray-300
//                 px-6 py-2
//                 text-sm font-medium
//                 transition
//                 hover:bg-gray-100
//                 focus:outline-none
//                 focus-visible:ring
//                 focus-visible:ring-primary-500
//               "
//               aria-expanded={showAll}
//             >
//               {showAll ? t("Show less") : t("View more")}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default BrowseByBodySection;

// import React, { useMemo, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import SectionHeader from "@/common/components/section-header/SectionHeader";
// import BodySystemTile from "./BodySystemTile";
// import type { DepartmentSystem } from "@/features/uk-hierarchy/types/ukHierarchy.types";
// import { useTranslation } from "react-i18next";

// type Props = {
//   systems: DepartmentSystem[];
// };

// const INITIAL_VISIBLE_COUNT = 12;

// const BrowseByBodySection: React.FC<Props> = ({ systems }) => {
//   const { t } = useTranslation();
//   const [showAll, setShowAll] = useState(false);
//   const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

//   const visibleSystems = useMemo(() => {
//     return showAll ? systems : systems.slice(0, INITIAL_VISIBLE_COUNT);
//   }, [systems, showAll]);

//   const hasMore = systems.length > INITIAL_VISIBLE_COUNT;

//   const handleToggle = () => {
//     setShowAll((prev) => !prev);
//     requestAnimationFrame(() => {
//       toggleButtonRef.current?.focus();
//     });
//   };

//   return (
//     <section aria-labelledby="browse-by-body-heading" className="section-shell">
//       <div className="containerr">
//         <SectionHeader
//           title="Browse by body system"
//           titleId="browse-by-body-heading"
//           description="Choose the area of the body to explore related patient leaflets"
//           hasViewAll={false}
//         />

//         <ul
//           role="list"
//           className="
//             grid gap-4
//             grid-cols-2
//             md:grid-cols-3
//             lg:grid-cols-4
//             xl:grid-cols-5
//             2xl:grid-cols-6
//           "
//         >
//           {visibleSystems.map((system, index) => {
//             const isNewItem = showAll && index >= INITIAL_VISIBLE_COUNT;

//             return (
//               <motion.li
//                 key={system.id}
//                 initial={isNewItem ? { opacity: 0, y: 6 } : false}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.2, ease: "easeOut" }}
//               >
//                 <BodySystemTile system={system} />
//               </motion.li>
//             );
//           })}
//         </ul>

//         {hasMore && (
//           <div className="mt-6 flex justify-center">
//             <button
//               ref={toggleButtonRef}
//               type="button"
//               onClick={handleToggle}
//               className="
//                 rounded-lg
//                 border border-gray-300
//                 px-6 py-2
//                 text-sm font-medium
//                 transition
//                 hover:bg-gray-100
//                 focus:outline-none
//                 focus-visible:ring
//                 focus-visible:ring-primary-500
//               "
//               aria-expanded={showAll}
//             >
//               {showAll ? t("Show less") : t("View more")}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default BrowseByBodySection;


import React, { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/common/components/section-header/SectionHeader";
import BodySystemTile from "./BodySystemTile";
import type { DepartmentSystem } from "@/features/uk-hierarchy/types/ukHierarchy.types";
import { useTranslation } from "react-i18next";

type Props = {
  systems: DepartmentSystem[];
};

const INITIAL_VISIBLE_COUNT = 12;

const BrowseByBodySection: React.FC<Props> = ({ systems }) => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  const visibleSystems = useMemo(() => {
    return showAll ? systems : systems.slice(0, INITIAL_VISIBLE_COUNT);
  }, [systems, showAll]);

  const hasMore = systems.length > INITIAL_VISIBLE_COUNT;

  const handleToggle = () => {
    setShowAll((prev) => !prev);
    requestAnimationFrame(() => {
      toggleButtonRef.current?.focus();
    });
  };

  return (
    <section aria-labelledby="browse-by-body-heading" className="section-shell">
      <div className="containerr">
        <SectionHeader
          title="Browse by body system"
          titleId="browse-by-body-heading"
          description="Choose the area of the body to explore related patient leaflets"
          hasViewAll={false}
        />

        <ul
          role="list"
          className="
            grid gap-4
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
          "
        >
          <AnimatePresence>
            {visibleSystems.map((system, index) => {
              const isExtraItem = index >= INITIAL_VISIBLE_COUNT;

              return (
                <motion.li
                  key={system.id}
                  initial={
                    showAll && isExtraItem ? { opacity: 0, y: 6 } : false
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <BodySystemTile system={system} />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>

        {hasMore && (
          <div className="mt-6 flex justify-center">
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={handleToggle}
              className="
                rounded-lg
                border border-gray-300
                px-6 py-2
                text-sm font-medium
                transition
                hover:bg-gray-100
                focus:outline-none
                focus-visible:ring
                focus-visible:ring-primary-500
              "
              aria-expanded={showAll}
            >
              {showAll ? t("Show less") : t("View more")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseByBodySection;
