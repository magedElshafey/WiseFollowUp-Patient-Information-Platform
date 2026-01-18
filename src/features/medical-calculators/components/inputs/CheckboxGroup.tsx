type Props = {
  label: string;
  options: { label: string; value: any }[];
  value: any[];
  onChange: (val: any[]) => void;
};

const CheckboxGroup = ({ label, options, value = [], onChange }: Props) => {
  const toggle = (v: any) => {
    onChange(value.includes(v) ? value.filter((x) => x !== v) : [...value, v]);
  };

  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium">{label}</legend>

      {options.map((o) => (
        <label key={o.value} className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={value.includes(o.value)}
            onChange={() => toggle(o.value)}
          />
          {o.label}
        </label>
      ))}
    </fieldset>
  );
};

export default CheckboxGroup;
