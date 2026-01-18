// src/features/medical-calculators/components/inputs/BooleanToggle.tsx
import React from "react";

type Props = {
  label: string;
  value?: boolean;
  onChange: (value: boolean) => void;
};

const BooleanToggle: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-text-main">{label}</legend>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onChange(true)}
          aria-pressed={value === true}
          className={`px-4 py-2 rounded-pill text-sm border transition
            ${
              value === true
                ? "bg-primary text-white border-primary"
                : "bg-bg-surface border-border-subtle text-text-main"
            }`}
        >
          Yes
        </button>

        <button
          type="button"
          onClick={() => onChange(false)}
          aria-pressed={value === false}
          className={`px-4 py-2 rounded-pill text-sm border transition
            ${
              value === false
                ? "bg-primary text-white border-primary"
                : "bg-bg-surface border-border-subtle text-text-main"
            }`}
        >
          No
        </button>
      </div>
    </fieldset>
  );
};

export default BooleanToggle;
