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
    min?: number;
    max?: number;
    step?: number;
    options?: CalculatorOption[];
    description?: string;
}

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
    calculate: (values: Record<string, any>) => CalculatorResult;
}
