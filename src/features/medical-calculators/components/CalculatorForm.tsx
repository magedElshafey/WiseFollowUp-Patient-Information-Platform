// import { useState } from "react";
// import { buildCalculatorSchema } from "../schemas/calculator.schema";
// import CalculatorInputRenderer from "./CalculatorInputRenderer";
// import CalculatorResult from "./CalculatorResult";
// import { CalculatorDefinition } from "../types/calculator.types";

// const CalculatorForm = ({
//   calculator,
// }: {
//   calculator: CalculatorDefinition;
// }) => {
//   const [values, setValues] = useState<Record<string, any>>({});
//   const [result, setResult] = useState<any>(null);
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const schema = buildCalculatorSchema(calculator.inputs);

//   const submit = () => {
//     const parsed = schema.safeParse(values);

//     if (!parsed.success) {
//       const errs: Record<string, string> = {};
//       parsed.error.errors.forEach((e) => {
//         errs[e.path[0] as string] = e.message;
//       });
//       setErrors(errs);
//       return;
//     }

//     setErrors({});
//     setResult(calculator.calculate(values));
//   };

//   return (
//     <form
//       className="space-y-5"
//       onSubmit={(e) => {
//         e.preventDefault();
//         submit();
//       }}
//     >
//       {calculator.inputs.map((input) => (
//         <CalculatorInputRenderer
//           key={input.key}
//           input={input}
//           value={values[input.key]}
//           onChange={(val) => setValues((v) => ({ ...v, [input.key]: val }))}
//         />
//       ))}

//       <button className="rounded-pill bg-primary px-6 py-2 text-white">
//         Calculate
//       </button>

//       {result && <CalculatorResult result={result} />}
//     </form>
//   );
// };

// export default CalculatorForm;
import { useState } from "react";
import { ZodIssue } from "zod";
import { buildCalculatorSchema } from "../schemas/calculator.schema";
import CalculatorInputRenderer from "./CalculatorInputRenderer";
import CalculatorResult from "./CalculatorResult";
import { CalculatorDefinition } from "../types/calculator.types";

type FormValues = Record<string, unknown>;
type FormErrors = Record<string, string>;

const CalculatorForm = ({
  calculator,
}: {
  calculator: CalculatorDefinition;
}) => {
  const [values, setValues] = useState<FormValues>({});
  const [result, setResult] = useState<any>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const schema = buildCalculatorSchema(calculator.inputs);

  const submit = () => {
    const parsed = schema.safeParse(values);

    if (!parsed.success) {
      const fieldErrors: FormErrors = {};

      parsed.error.issues.forEach((issue: ZodIssue) => {
        const field = issue.path[0];
        if (typeof field === "string") {
          fieldErrors[field] = issue.message;
        }
      });

      setErrors(fieldErrors);
      setResult(null);
      return;
    }

    setErrors({});
    setResult(calculator.calculate(parsed.data));
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
        <div key={input.key} className="space-y-1">
          <CalculatorInputRenderer
            input={input}
            value={values[input.key]}
            onChange={(val) => setValues((v) => ({ ...v, [input.key]: val }))}
          />

          {errors[input.key] && (
            <p className="text-sm text-red-500">{errors[input.key]}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="rounded-pill bg-primary px-6 py-2 text-white"
      >
        Calculate
      </button>

      {result && <CalculatorResult result={result} />}
    </form>
  );
};

export default CalculatorForm;
