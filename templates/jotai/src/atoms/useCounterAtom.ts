import { atom, useAtom } from 'jotai';

const counterAtom = atom(0); // Initial counter state is 0

export const useCounterAtom = () => {
  return useAtom(counterAtom);
};
