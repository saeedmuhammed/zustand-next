"use client";
import { mapperType } from "@/app/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CSS } from "@dnd-kit/utilities";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { Icon } from "@iconify/react/dist/iconify.js";

interface StateCardProps {
  title: string;
  color?: string;
  list: mapperType[];
}

const TaskCard = ({ item }: { item: mapperType }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card className="cursor-pointer hover:bg-gray-100">
        <CardHeader className="flex flex-row justify-between items-center">
          <div>
            <CardTitle className="!mt-0">{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </div>
          <Icon icon="tabler:trash" width="24" height="24" />
        </CardHeader>
      </Card>
    </div>
  );
};

export const StateCard = ({ title, color, list }: StateCardProps) => {
  const ids = list.map((item) => item.id);
  const { setNodeRef } = useDroppable({ id: title });
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
