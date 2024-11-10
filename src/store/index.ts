import { Task, TaskStatus } from "@/types";
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { persist, createJSONStorage, PersistOptions } from "zustand/middleware";

interface TaskState {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  changeStatus: (id: string, status: TaskStatus) => void;
  removeTask: (id: string) => void;
}

const useTasks = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
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
      changeStatus: (id: string, status: TaskStatus) => {
        set((state: { tasks: Task[] }) => {
          const newTasks = state.tasks.map((task) => {
            if (task.id === id) {
              return {
                ...task,
                status,
              };
            }
            return task;
          });
          return {
            tasks: newTasks,
          };
        });
      },
      removeTask: (id: string) =>
        set((state: { tasks: Task[] }) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
    }),
    {
      name: "task-storage",
    }
  )
);

export default useTasks;
