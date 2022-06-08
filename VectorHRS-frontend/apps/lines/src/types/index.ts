export interface Todo {
  id: string;
  todo: string;
  isDone: boolean;
  priority: string;
}

export type Priorities = 'low' | 'medium' | 'high';
