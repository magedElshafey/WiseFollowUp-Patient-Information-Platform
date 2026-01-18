type Props = {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (v: number) => void;
};

const RangeInput = ({ label, min, max, step = 1, value, onChange }: Props) => {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value ?? min}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
      <p className="text-xs text-text-muted">Value: {value}</p>
    </div>
  );
};

export default RangeInput;
