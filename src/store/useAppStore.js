import { create } from "zustand";

export const useAppStore = create((set, get) => ({
    workspace: {},
    addToWorkspace: (id, caseType, complainant, accused, victim, allegations, facts, date, representing,image) => {
        set((state) => ({
            workspace: {
                ...state.workspace,
                [id]: {
                    caseType,
                    complainant,
                    accused,
                    victim,
                    allegations,
                    facts,
                    date,
                    representing,
                    image
                },
            },
        }));
    },


}));
