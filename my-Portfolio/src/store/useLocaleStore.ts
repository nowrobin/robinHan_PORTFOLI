import { create } from "zustand";

type StoreProp = {
  locale: string;
  updateLocale: (state: string) => void;
};

export const useLocaleStore = create<StoreProp>((set) => ({
  locale: "",
  updateLocale: (state: string) => set(() => ({ locale: state })),
}));
