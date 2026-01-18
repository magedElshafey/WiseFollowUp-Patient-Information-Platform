// all inputs type available
export type CalculatorInputType =
    | "number"
    | "select"
    | "radio"
    | "checkbox"
    | "boolean"
    | "range"
    | "date"
    | "age"
    | "sex"
    | "height"
    | "weight"
    | "readOnly";

// type for any options (select , radio , checkbox )
export interface CalculatorOption {
    label: string;
    value: string | number | boolean;
}

export interface CalculatorInput {
    key: string;
    label: string;
    type: CalculatorInputType;
    unit?: string;
    required?: boolean;
    min?: number; // for numbers and range inputs
    max?: number; // for numbers and range inputs
    step?: number; // for numbers and range inputs
    options?: CalculatorOption[];  // for select , radio , checkbox inputs
    description?: string;
}
// POST Methods Response
export interface CalculatorResult {
    value: string | number;
    interpretation?: string;
}

export interface CalculatorDefinition {
    id: string;
    slug: string;
    title: string;
    description: string;
    category: string;
    inputs: CalculatorInput[];
    calculate: (values: Record<string, any>) => CalculatorResult; // Front end Only 
}
