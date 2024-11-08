import { Task } from "@/types";
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface TaskState {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  removeTask: (id: string) => void;
}
const useTasks = create<TaskState>((set) => ({
  tasks: [
    {
      id: "1",
      title: "Create project",
      description: "Create a new project to start adding tasks to.",
      status: "todo",
    },
    {
      id: "2",
      title: "Create project",
      description: "Create a new project to start adding tasks to.",
      status: "todo",
    },
    {
      id: "3",
      title: "Create project",
      description: "Create a new project to start adding tasks to.",
      status: "todo",
    },
    {
      id: "4",
      title: "Create project",
      description: "Create a new project to start adding tasks to.",
      status: "inprogress",
    },
    {
      id: "5",

      title: "Create project",
      description: "Create a new project to start adding tasks to.",
      status: "inprogress",
    },
    {
      id: "6",

      title: "Create project",
      description: "Create a new project to start adding tasks to.",
      status: "inprogress",
    },
  ],
  addTask: (title: string, description: string) =>
    set((state: { tasks: Task[] }) => ({
      tasks: [
        ...state.tasks,
        {
          id: uuidv4(),
          title,
          description,
          status: "todo",
        },
      ],
    })),
  removeTask: (id: string) =>
    set((state: { tasks: Task[] }) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));

export default useTasks;
