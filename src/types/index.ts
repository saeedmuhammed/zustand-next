export type mapperType = {
  [key: string]: any;
};
export type TaskStatus = "todo" | "inprogress" | "inreview" | "done";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
};
