// src/features/medical-calculators/components/inputs/HeightInput.tsx
import { useState } from "react";
import MainInput from "@/common/components/inputs/MainInput";

type Props = {
  value?: number; // cm
  onChange: (value: number) => void;
};

const HeightInput = ({ value, onChange }: Props) => {
  const [unit, setUnit] = useState<"cm" | "ft">("cm");

  const cmValue = value ?? "";

  const handleFeetChange = (ft: number, inch: number) => {
    const cm = ft * 30.48 + inch * 2.54;
    onChange(Number(cm.toFixed(1)));
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-text-main">Height</label>

        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value as any)}
          className="text-xs border border-border-subtle rounded px-2 py-1"
        >
          <option value="cm">cm</option>
          <option value="ft">ft / in</option>
        </select>
      </div>

      {unit === "cm" ? (
        <MainInput
          type="number"
          placeholder="cm"
          value={cmValue}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <MainInput
            type="number"
            placeholder="ft"
            onChange={(e) => handleFeetChange(Number(e.target.value), 0)}
          />
          <MainInput
            type="number"
            placeholder="in"
            onChange={(e) => handleFeetChange(0, Number(e.target.value))}
          />
        </div>
      )}
    </div>
  );
};

export default HeightInput;
