export {};

declare global {

  interface Period {
    start: Date;
    end?: Date;
    finished: boolean;
  }
  interface Task {
    id: string;
    title: string;
    periods?: Period[];
  }
}
