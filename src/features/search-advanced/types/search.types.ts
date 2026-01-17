export type SearchMode = "normal" | "advanced";

export type AdvancedSearchKey =
    | "author"
    | "trust_id"
    | "date"
    | undefined;

export type AdvancedSearchValue =
    | string
    | {
        from: string;
        to?: string;
    };

export type SearchPayload = {
    key?: AdvancedSearchKey;
    value: AdvancedSearchValue;
};
