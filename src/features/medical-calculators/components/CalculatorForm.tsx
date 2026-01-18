// import { useState } from "react";
// import MainInput from "@/common/components/inputs/MainInput";
// import MainSelect from "@/common/components/inputs/MainSelect";
// import { CalculatorDefinition } from "../types/calculator.types";
// import CalculatorResult from "./CalculatorResult";

// const CalculatorForm = ({
//   calculator,
// }: {
//   calculator: CalculatorDefinition;
// }) => {
//   const [values, setValues] = useState<Record<string, any>>({});
//   const [result, setResult] = useState<any>(null);

//   const submit = () => {
//     setResult(calculator.calculate(values));
//   };

//   return (
//     <div className="space-y-5">
//       {calculator.inputs.map((input) => {
//         if (input.type === "number") {
//           return (
//             <MainInput
//               key={input.key}
//               label={input.label}
//               type="number"
//               placeholder={input.unit}
//               value={values[input.key] ?? ""}
//               onChange={(e) =>
//                 setValues((v) => ({
//                   ...v,
//                   [input.key]: Number(e.target.value),
//                 }))
//               }
//             />
//           );
//         }

//         if (input.type === "radio") {
//           return (
//             <MainSelect
//               key={input.key}
//               label={input.label}
//               options={
//                 input.options?.map((o, i) => ({
//                   id: i,
//                   name: o.label,
//                   value: o.value,
//                 })) as any
//               }
//               onSelect={(opt: any) =>
//                 setValues((v) => ({ ...v, [input.key]: opt.value }))
//               }
//             />
//           );
//         }

//         return null;
//       })}

//       <button
//         onClick={submit}
//         className="rounded-pill bg-primary px-6 py-2 text-white"
//       >
//         Calculate
//       </button>

//       {result && <CalculatorResult result={result} />}
//     </div>
//   );
// };

// export default CalculatorForm;
// src/features/medical-calculators/components/CalculatorForm.tsx
import { useState } from "react";
import { buildCalculatorSchema } from "../schemas/calculator.schema";
import CalculatorInputRenderer from "./CalculatorInputRenderer";
import CalculatorResult from "./CalculatorResult";
import { CalculatorDefinition } from "../types/calculator.types";

const CalculatorForm = ({
  calculator,
}: {
  calculator: CalculatorDefinition;
}) => {
  const [values, setValues] = useState<Record<string, any>>({});
  const [result, setResult] = useState<any>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = buildCalculatorSchema(calculator.inputs);

  const submit = () => {
    const parsed = schema.safeParse(values);

    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.errors.forEach((e) => {
        errs[e.path[0] as string] = e.message;
      });
      setErrors(errs);
      return;
    }

    setErrors({});
    setResult(calculator.calculate(values));
  };

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      {calculator.inputs.map((input) => (
        <CalculatorInputRenderer
          key={input.key}
          input={input}
          value={values[input.key]}
          onChange={(val) => setValues((v) => ({ ...v, [input.key]: val }))}
        />
      ))}

      <button className="rounded-pill bg-primary px-6 py-2 text-white">
        Calculate
      </button>

      {result && <CalculatorResult result={result} />}
    </form>
  );
};

export default CalculatorForm;
