export {};

declare global {

  interface Period {
    start: Date;
    end: Date;
  }
  interface Task {
    id: string;
    title: string;
    periods?: Period[];
  }
}
