
// import necessary testing functions from Vitest
// describe the test suite for CheckFunctions
// it defines a test case for the add function
// expect checks if the result 
import { describe, it, expect } from 'vitest';
// import the evenOrOdd function from index1.ts
import { evenOrOdd, evenOrOdd2  } from '../algo/evenOrOdd';


// Test suite for the evenOrOdd function
describe('evenOrOdd', () => {
  it('should return true for even numbers', () => {
    expect(evenOrOdd(2)).toBe(true);
    expect(evenOrOdd(0)).toBe(true);
    expect(evenOrOdd(-4)).toBe(true);
  });

  it('should return false for odd numbers', () => {
    expect(evenOrOdd(3)).toBe(false);
    expect(evenOrOdd(-1)).toBe(false);
    expect(evenOrOdd(7)).toBe(false);
  });
  
  it('should throw an error for non-integer inputs', () => {
    expect(() => evenOrOdd(2.5)).toThrow();
    expect(() => evenOrOdd('string')).toThrow();
    expect(() => evenOrOdd(null)).toThrow();
    expect(() => evenOrOdd(undefined)).toThrow();
    expect(() => evenOrOdd({})).toThrow();
  });

});

describe('evenOrOdd2', () => {
  it('should return "Ce nombre est pair." for even numbers', () => {
    expect(evenOrOdd2(2)).toBe('Ce nombre est pair.');
    expect(evenOrOdd2(0)).toBe('Ce nombre est pair.');
    expect(evenOrOdd2(-4)).toBe('Ce nombre est pair.');
  });

  it('should return "Ce nombre est impair." for odd numbers', () => {
    expect(evenOrOdd2(3)).toBe('Ce nombre est impair.');
    expect(evenOrOdd2(-1)).toBe('Ce nombre est impair.');
    expect(evenOrOdd2(7)).toBe('Ce nombre est impair.');
  });
  
  it('should throw an error for non-integer inputs', () => {
    expect(() => evenOrOdd2(2.5)).toThrow();
    expect(() => evenOrOdd2('string')).toThrow();
    expect(() => evenOrOdd2(null)).toThrow();
    expect(() => evenOrOdd2(undefined)).toThrow();
    expect(() => evenOrOdd2({})).toThrow();
  });

});

