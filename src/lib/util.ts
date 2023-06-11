// These are a hack because webstorm doesn't understand how types move through #each blocks
export type Unarray<T> = T extends Array<infer U> ? U : T

export const fixType = <T>(array: T, element: unknown): Unarray<T> => {
    return element as Unarray<T>;
}
export const getNiceDate = () => {
    return new Date().toLocaleString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: "short",
        hour: '2-digit',
        hour12: true,
        minute: '2-digit',
        second: '2-digit'
    });
}

export const formDataToObject = (formData: FormData) => {
    const json = Object.fromEntries(formData.entries());
    return Object.entries(json).reduce((acc: Record<string, string | string[]>, [key, value]) => {
        if (key.includes("[")) {
            const [k, i] = key.split("[");
            acc[k] = acc[k] || [];
            acc[k][i.slice(0, -1)] = value;
        } else {
            acc[key] = value;
        }
        return acc;
    }, {})
}


/**
 * Add the proper ordinal suffix to a number
 * Source: https://stackoverflow.com/a/13627586/429544
 *
 * rules:
 * st is used with numbers ending in 1 (e.g. 1st, pronounced first)
 * nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
 * rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
 * As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
 * th is used for all other numbers (e.g. 9th, pronounced ninth).
 * @param i number to generate suffix for
 */
export const ordinalSuffixOf = (i: number) => {
    const j = i % 10;
    const k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

export const base64 = btoa;
export const base64decode = atob;