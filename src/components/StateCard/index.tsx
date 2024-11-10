"use client";
import { Task, TaskStatus } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { Icon } from "@iconify/react/dist/iconify.js";
import useTasks from "@/store";

interface StateCardProps {
  title: string;
  color?: string;
  status: TaskStatus;
}

const TaskCard = ({ item }: { item: Task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const removeTask = useTasks((state) => state.removeTask);
  const handleRemove = () => {
    removeTask(item?.id);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      key={item.id}
    >
      <Card className="cursor-pointer hover:bg-gray-100">
        <CardHeader className="flex flex-row justify-between items-center">
          <div>
            <CardTitle className="!mt-0">{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </div>

          <Icon
            icon="tabler:trash"
            width="24"
            height="24"
            onClick={(e) => {
              e.stopPropagation();
              handleRemove();
            }}
          />
        </CardHeader>
      </Card>
    </div>
  );
};

export const StateCard = ({ title, color, status }: StateCardProps) => {
  const allTasks = useTasks((state) => state?.tasks);
  const list = allTasks.filter((item) => item.status === status);
  const { setNodeRef } = useDroppable({ id: status });
  return (
    <div ref={setNodeRef}>
      <Card className="w-[400px] min-h-[700px] ">
        <CardHeader className="flex flex-row gap-2 items-center">
          <div
            className={`w-6 h-6  rounded-sm`}
            style={{ backgroundColor: color || "slategray" }}
          ></div>
          <CardTitle className="!mt-0 text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {list.map((item) => (
            <TaskCard {...{ item }} key={item?.id} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
