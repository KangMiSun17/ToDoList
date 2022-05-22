export interface Todo {
  id: number;
  done: boolean;
  text: string;
}

export type Action =
  | { type: "CREATE"; todo: { id: number; text: string; done: boolean } }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number };
