"use client";
import { AddTaskPopup } from "@/components/addTaskPopup";
import { StateCard } from "@/components/StateCard";
import useTasks from "@/store";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useMemo } from "react";

export default function Home() {
  const tasks = useTasks((state) => state.tasks);
  const ids = useMemo(() => tasks.map((task) => task.id), [tasks]);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10, // Move 5 pixels to detect the drag
      },
    })
  );
  return (
    <div className="flex flex-col gap-5 p-10">
      <div className="text-2xl font-semibold flex items-center gap-5">
        Tasks Dashboard
        <AddTaskPopup />
      </div>
      <DndContext
        onDragEnd={() => {}}
        collisionDetection={closestCenter}
        sensors={sensors}
      >
        <div className="flex gap-8">
          <SortableContext items={ids} strategy={verticalListSortingStrategy}>
            <StateCard title="Todo" status="todo" />
            <StateCard
              title="InProgress"
              color="mediumseagreen"
              status="inprogress"
            />
            <StateCard title="InReview" color="darkorange" status="inreview" />
            <StateCard title="Done" color="darkslateblue" status="done" />
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
}
