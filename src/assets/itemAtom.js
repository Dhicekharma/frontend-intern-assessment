// Import the atomWithStorage function from the Jotai utils module
import { atomWithStorage } from "jotai/utils";

// Create an atom state named itemAtom using atomWithStorage
export const itemAtom = atomWithStorage('item', {});
