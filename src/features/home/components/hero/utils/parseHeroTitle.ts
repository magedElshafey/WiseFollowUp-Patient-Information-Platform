type ParsedTitle = {
    highlight?: string;
    rest: string;
};

/**
 * Smart title parser
 * - Supports:
 *   "Find your answer"
 *   "Find | your answer"
 *   "Find - your answer"
 */
export const parseHeroTitle = (title?: string): ParsedTitle => {
    if (!title) {
        return { rest: "" };
    }

    // priority 1 → explicit delimiter
    const explicitDelimiters = ["|", "—", "-"];

    for (const delimiter of explicitDelimiters) {
        if (title.includes(delimiter)) {
            const [highlight, ...rest] = title.split(delimiter);
            return {
                highlight: highlight.trim(),
                rest: rest.join(delimiter).trim(),
            };
        }
    }

    // fallback → first word highlighted
    const words = title.split(" ");

    if (words.length <= 1) {
        return { rest: title };
    }

    return {
        highlight: words[0],
        rest: words.slice(1).join(" "),
    };
};
