// src/features/medical-calculators/schemas/calculator.schema.ts
import { z } from "zod";
import { CalculatorInput } from "../types/calculator.types";

export const buildCalculatorSchema = (inputs: CalculatorInput[]) => {
    const shape: Record<string, any> = {};

    inputs.forEach((input) => {
        let field: any = z.any();

        if (input.type === "number" || input.type === "age") {
            field = z
                .number()
                .min(input.min ?? 0)
                .max(input.max ?? 1000);
        }

        if (input.type === "boolean") {
            field = z.boolean();
        }

        if (input.type === "select" || input.type === "radio") {
            field = z.any();
        }

        if (input.required) {
            field = field.refine((v: any) => v !== undefined && v !== null, {
                message: "Required",
            });
        }

        shape[input.key] = field;
    });

    return z.object(shape);
};
