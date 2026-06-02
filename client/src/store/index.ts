export interface AppState {
  theme: "light" | "dark";
  user: any;
  notifications: any[];
}

export const initialState: AppState = {
  theme: "dark",
  user: null,
  notifications: [],
};
