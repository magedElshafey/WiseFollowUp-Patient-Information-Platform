import MainInput from "@/common/components/inputs/MainInput";
import MainSelect from "@/common/components/inputs/MainSelect";
import WeightInput from "./inputs/WeightInput.tsx";
import { CalculatorInput } from "../types/calculator.types";
import BooleanToggle from "./inputs/BooleanToggle.tsx";
import HeightInput from "./inputs/HeightInput.tsx";
import CheckboxGroup from "./inputs/CheckboxGroup.tsx";
import SexInput from "./inputs/SexInput.tsx";
import DateInput from "./inputs/DateInput.tsx";
import RangeInput from "./inputs/RangeInput.tsx";
import ReadOnlyField from "./inputs/ReadonlyField.tsx";
type Props = {
  input: CalculatorInput;
  value: any;
  onChange: (value: any) => void;
};

const CalculatorInputRenderer = ({ input, value, onChange }: Props) => {
  switch (input.type) {
    case "number":
    case "age":
      return (
        <MainInput
          label={input.label}
          type="number"
          placeholder={input.unit}
          value={value ?? ""}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      );

    case "select":
    case "radio": {
      const options =
        input.options?.map((o, i) => ({
          id: i,
          name: o.label,
          value: o.value,
        })) ?? [];

      const selectedIndex = options.findIndex((o) => o.value === value);
      return (
        <MainSelect
          label={input.label}
          options={options}
          value={selectedIndex >= 0 ? selectedIndex : null}
          onSelect={(opt: any) => onChange(opt.value)}
        />
      );
    }

    case "boolean":
      return (
        <BooleanToggle label={input.label} value={value} onChange={onChange} />
      );

    case "height":
      return <HeightInput value={value} onChange={onChange} />;

    case "weight":
      return <WeightInput value={value} onChange={onChange} />;

    case "checkbox":
      return (
        <CheckboxGroup
          label={input.label}
          options={input.options ?? []}
          value={value ?? []}
          onChange={onChange}
        />
      );
    case "range":
      return (
        <RangeInput
          label={input.label}
          min={input.min ?? 0}
          max={input.max ?? 10}
          step={input.step}
          value={value ?? input.min ?? 0}
          onChange={onChange}
        />
      );

    case "date":
      return (
        <DateInput label={input.label} value={value} onChange={onChange} />
      );

    case "sex":
      return <SexInput value={value} onChange={onChange} />;
    case "readOnly":
      return <ReadOnlyField label={input.label} value={value} />;
    default:
      return null;
  }
};

export default CalculatorInputRenderer;
