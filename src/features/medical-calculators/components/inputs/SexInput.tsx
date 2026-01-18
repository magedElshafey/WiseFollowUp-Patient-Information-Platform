import MainSelect from "@/common/components/inputs/MainSelect";

const SexInput = ({ value, onChange }: any) => (
  <MainSelect
    label="Sex"
    options={[
      { id: 0, name: "Male", value: "male" },
      { id: 1, name: "Female", value: "female" },
    ]}
    value={value === "female" ? 1 : value === "male" ? 0 : null}
    onSelect={(opt: any) => onChange(opt.value)}
  />
);

export default SexInput;
