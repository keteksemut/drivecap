import { create } from 'zustand';

export const useStore = create((set, get) => ({
  headerData: null,
  setHeaderData: (data) => set({ headerData: data }),

  footerData: undefined,
  setFooterData: (data) => set({ footerData: data }),

  lenis: undefined,
  setLenis: (lenis) => set({ lenis })
}));
