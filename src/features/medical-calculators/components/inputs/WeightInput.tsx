// src/features/medical-calculators/components/inputs/WeightInput.tsx
import { useState } from "react";
import MainInput from "@/common/components/inputs/MainInput";

type Props = {
  value?: number; // kg
  onChange: (value: number) => void;
};

const WeightInput = ({ value, onChange }: Props) => {
  const [unit, setUnit] = useState<"kg" | "lb">("kg");

  const handleChange = (v: number) => {
    if (unit === "kg") onChange(v);
    else onChange(Number((v * 0.453592).toFixed(1)));
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-text-main">Weight</label>

        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value as any)}
          className="text-xs border border-border-subtle rounded px-2 py-1"
        >
          <option value="kg">kg</option>
          <option value="lb">lb</option>
        </select>
      </div>

      <MainInput
        type="number"
        placeholder={unit}
        value={value ?? ""}
        onChange={(e) => handleChange(Number(e.target.value))}
      />
    </div>
  );
};

export default WeightInput;
