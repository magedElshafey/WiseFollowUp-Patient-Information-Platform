import { CalculatorDefinition } from "../types/calculator.types";

export const calculators: CalculatorDefinition[] = [
    {
        id: "bmi",
        slug: "bmi",
        title: "BMI Calculator",
        category: "General health",
        description: "Body mass index with lifestyle modifiers",
        inputs: [
            { key: "height", label: "Height", type: "height", required: true },
            { key: "weight", label: "Weight", type: "weight", required: true },
            { key: "age", label: "Age", type: "age", required: true },
            { key: "sex", label: "Sex", type: "sex", required: true },
            {
                key: "conditions",
                label: "Existing conditions",
                type: "checkbox",
                options: [
                    { label: "Diabetes", value: "diabetes" },
                    { label: "Hypertension", value: "htn" },
                    { label: "Heart disease", value: "heart" },
                ],
            },
        ],
        calculate(values) {
            const h = values.height / 100;
            const bmi = values.weight / (h * h);

            return {
                value: bmi.toFixed(1),
                interpretation:
                    bmi < 18.5
                        ? "Underweight"
                        : bmi < 25
                            ? "Normal weight"
                            : bmi < 30
                                ? "Overweight"
                                : "Obese",
            };
        },
    },
    {
        id: "egfr",
        slug: "egfr",
        title: "eGFR Calculator",
        category: "Renal",
        description: "Estimate kidney function",
        inputs: [
            { key: "age", label: "Age", type: "age", required: true },
            { key: "sex", label: "Sex", type: "sex", required: true },
            {
                key: "creatinine",
                label: "Creatinine",
                type: "number",
                unit: "µmol/L",
                required: true,
                min: 20,
                max: 1500,
            },
        ],
        calculate(values) {
            const factor = values.sex === "female" ? 0.85 : 1;
            const egfr = ((140 - values.age) * factor) / values.creatinine;

            return {
                value: egfr.toFixed(1),
                interpretation:
                    egfr >= 90
                        ? "Normal kidney function"
                        : egfr >= 60
                            ? "Mild reduction"
                            : egfr >= 30
                                ? "Moderate reduction"
                                : "Severe reduction",
            };
        },
    },

    {
        id: "ascvd",
        slug: "ascvd-risk",
        title: "ASCVD Risk Calculator",
        category: "Cardiology",
        description: "Estimate 10-year cardiovascular risk",
        inputs: [
            { key: "age", label: "Age", type: "age", required: true },
            { key: "sex", label: "Sex", type: "sex", required: true },
            { key: "smoker", label: "Current smoker", type: "boolean" },
            {
                key: "cholesterol",
                label: "Total cholesterol",
                type: "number",
                unit: "mg/dL",
            },
            {
                key: "activity",
                label: "Physical activity",
                type: "select",
                options: [
                    { label: "Low", value: "low" },
                    { label: "Moderate", value: "moderate" },
                    { label: "High", value: "high" },
                ],
            },
        ],
        calculate(values) {
            let risk = values.age * 0.15;
            if (values.smoker) risk += 5;
            if (values.activity === "low") risk += 3;

            return {
                value: `${Math.min(risk, 30).toFixed(1)}%`,
                interpretation:
                    risk > 20 ? "High cardiovascular risk" : "Low to moderate risk",
            };
        },
    },
    {
        id: "pain",
        slug: "pain-score",
        title: "Pain Severity Score",
        category: "General",
        description: "Assess current pain severity",
        inputs: [
            {
                key: "pain",
                label: "Pain intensity",
                type: "range",
                min: 0,
                max: 10,
                step: 1,
                required: true,
            },
            {
                key: "scale",
                label: "Scale used",
                type: "readOnly",
            },
        ],
        calculate(values) {
            return {
                value: values.pain,
                interpretation:
                    values.pain <= 3
                        ? "Mild pain"
                        : values.pain <= 6
                            ? "Moderate pain"
                            : "Severe pain",
            };
        },
    },
    {
        id: "pregnancy",
        slug: "pregnancy-due-date",
        title: "Pregnancy Due Date",
        category: "Obstetrics",
        description: "Estimate expected delivery date",
        inputs: [
            {
                key: "lmp",
                label: "First day of last menstrual period",
                type: "date",
                required: true,
            },
            {
                key: "ivf",
                label: "IVF pregnancy",
                type: "boolean",
            },
        ],
        calculate(values) {
            const lmp = new Date(values.lmp);
            const due = new Date(lmp);
            due.setDate(due.getDate() + 280);

            return {
                value: due.toDateString(),
                interpretation: "Estimated delivery date",
            };
        },
    },
    {
        id: "cha2ds2vasc",
        slug: "cha2ds2-vasc",
        title: "CHA₂DS₂-VASc Score",
        category: "Cardiology",
        description: "Estimate stroke risk in atrial fibrillation",
        inputs: [
            {
                key: "age75", label: "Age ≥ 75", type: "radio", options: [
                    { label: "Yes", value: 2 },
                    { label: "No", value: 0 },
                ]
            },
            {
                key: "conditions",
                label: "Risk factors",
                type: "checkbox",
                options: [
                    { label: "Heart failure", value: 1 },
                    { label: "Diabetes", value: 2 },
                    { label: "Vascular disease", value: 3 },
                ],
            },
        ],
        calculate(values) {
            const base = Number(values.age75 ?? 0);
            const extra = (values.conditions ?? []).reduce(
                (a: number, b: number) => a + b,
                0
            );

            const score = base + extra;

            return {
                value: score,
                interpretation:
                    score >= 2
                        ? "High stroke risk – anticoagulation recommended"
                        : "Low risk",
            };
        },
    }

];
