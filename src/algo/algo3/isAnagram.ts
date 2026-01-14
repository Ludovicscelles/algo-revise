import { checkIsString } from "../../utils/CheckFunctions";
import { stringWithoutSpaces } from "../../utils/Normalize";

export function isAnagram(str1: unknown, str2: unknown): boolean {
  if (str1 === undefined || str2 === undefined)
    throw new Error(`Deux arguments sont requis`);

  checkIsString(str1);
  checkIsString(str2);

  const s1: string = stringWithoutSpaces(str1).toLowerCase();
  const s2: string = stringWithoutSpaces(str2).toLowerCase();

  const lengthS1: number = s1.length;
  const lengthS2: number = s2.length;

  if (lengthS1 !== lengthS2) return false;

  let sortedS1: string = s1.split("").sort().join("");
  let sortedS2: string = s2.split("").sort().join("");

  if (sortedS1 !== sortedS2) return false;

  return true;
}

export function isAnagram2(str1: unknown, str2: unknown): boolean {
  if (str1 === undefined || str2 === undefined)
    throw new Error(`Deux arguments sont requis`);

  checkIsString(str1);
  checkIsString(str2);

  const s1: string = stringWithoutSpaces(str1).toLowerCase();
  const s2: string = stringWithoutSpaces(str2).toLowerCase();

  const lengthS1: number = s1.length;
  const lengthS2: number = s2.length;

  if (lengthS1 !== lengthS2) return false;

  let map: Map<string, number> = new Map();

  for (let i = 0; i < lengthS1; i++) {
    map.set(s1[i], (map.get(s1[i]) ?? 0) + 1);
  }

  for (let i = 0; i < lengthS2; i++) {
    if (!map.has(s2[i])) {
      return false;
    }
    map.set(s2[i], map.get(s2[i])! - 1);
  }

  for (let value of map.values()) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
}

export function isAnagram3(str1: unknown, str2: unknown): boolean {
  if (str1 === undefined || str2 === undefined)
    throw new Error(`Deux arguments sont requis`);

  checkIsString(str1);
  checkIsString(str2);

  const s1: string = stringWithoutSpaces(str1).toLowerCase();
  const s2: string = stringWithoutSpaces(str2).toLowerCase();

  const lengthS1: number = s1.length;
  const lengthS2: number = s2.length;

  if (lengthS1 !== lengthS2) return false;

  let count: Record<string, number> = {};

  for (let char of s1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of s2) {
    if (!count[char]) return false;
    count[char]--;
  }

  for (let val of Object.values(count)) {
    if (val !== 0) return false;
  }

  return true;
}
