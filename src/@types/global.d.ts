export {};

declare global {

  interface Period {
    start: Date;
    end: Date;
  }
  interface Task {
    title: string;
    periods?: Period[];
  }
}
