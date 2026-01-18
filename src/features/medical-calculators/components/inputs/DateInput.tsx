import MainDate from "@/common/components/inputs/MainDateInput";
const DateInput = ({ label, value, onChange }: any) => (
  <MainDate
    label={label}
    value={value ?? ""}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default DateInput;
