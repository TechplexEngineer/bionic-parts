import { test, expect, describe } from "vitest";
import { labelCompare, LabelEquality } from "./simdata";

describe("labelCompare", () => {
    test("equality", () => {
        expect(labelCompare("Practice 1", "Practice 1")).toBe(LabelEquality.EQUAL);
        expect(labelCompare("Qualification 1", "Qualification 1")).toBe(LabelEquality.EQUAL);
        expect(labelCompare("Playoff 1", "Playoff 1")).toBe(LabelEquality.EQUAL);
        expect(labelCompare("Final 1", "Final 1")).toBe(LabelEquality.EQUAL);
    });
    
    test("practice is less than qual", () => {
        expect(labelCompare("Practice 1", "Qualification 1")).toBe(LabelEquality.LESS);
    });
    
    test("qual is less than playoff", () => {
        expect(labelCompare("Qualification 1", "Playoff 1")).toBe(LabelEquality.LESS);
    });
    
    test("playoff is less than final", () => {
        expect(labelCompare("Playoff 1", "Final 1")).toBe(LabelEquality.LESS);
    });
    
    test("qual 10 is less than qual 30", () => {
        expect(labelCompare("Qualification 10", "Qualification 30")).toBe(LabelEquality.LESS);
    });
    
    test("qual 30 is Greater than qual 10", () => {
        expect(labelCompare("Qualification 30", "Qualification 10")).toBe(LabelEquality.GREATER);
    });
});

// test("labelCompare - greater than", () => {
//     expect(labelCompare("Practice 3", "Practice 2")).toBeGreaterThan(0);
//     expect(labelCompare("Qualification 30", "Qualification 20")).toBeGreaterThan(0);
// });

// test("labelCompare - mixed labels", () => {
//     expect(labelCompare("Practice 1", "Qualification 1")).toBeLessThan(0);
//     expect(labelCompare("Qualification 5", "Practice 5")).toBeGreaterThan(0);
// });