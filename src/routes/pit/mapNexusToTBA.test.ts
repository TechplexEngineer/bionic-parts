import { describe, it, expect } from 'vitest';
import { nexusToTBA } from './mapNexusToTBA';

describe('nexusToTBA', () => {
    it('should convert "Qualification 1" to "qm1"', () => {
        expect(nexusToTBA('Qualification 1')).toBe('qm1');
    });

    it('should convert "Qualification 10" to "qm10"', () => {
        expect(nexusToTBA('Qualification 10')).toBe('qm10');
    });

    it('should convert "Playoff 2" to "sf2m1"', () => {
        expect(nexusToTBA('Playoff 2')).toBe('sf2m1');
    });

    it('should convert "Playoff 5" to "sf5m1"', () => {
        expect(nexusToTBA('Playoff 5')).toBe('sf5m1');
    });

    it('should convert "Final 3" to "f1m3"', () => {
        expect(nexusToTBA('Final 3')).toBe('f1m3');
    });

    it('should convert "Final 1" to "f1m1"', () => {
        expect(nexusToTBA('Final 1')).toBe('f1m1');
    });

    it('should return an empty string for unrecognized patterns', () => {
        expect(nexusToTBA('Unknown 1')).toBe('');
    });

    it('should return an empty string for empty input', () => {
        expect(nexusToTBA('')).toBe('');
    });

    // it('should return an empty string for malformed input', () => {
    //     expect(nexusToTBA('Playoff')).toBe('');
    //     expect(nexusToTBA('Qualification')).toBe('');
    //     expect(nexusToTBA('Final')).toBe('');
    // });
});