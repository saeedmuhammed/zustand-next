"use client";
import { AddTaskPopup } from "@/components/addTaskPopup";
import { StateCard } from "@/components/StateCard";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-10">
      <div className="text-2xl font-semibold flex items-center gap-5">
        Tasks Dashboard
        <AddTaskPopup />
      </div>
      <DndContext onDragEnd={() => {}} collisionDetection={closestCenter}>
        <div className="flex gap-8">
          <SortableContext
            items={[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
            ]}
            strategy={verticalListSortingStrategy}
          >
            <StateCard
              title="Todo"
              list={[
                {
                  id: "1",
                  title: "Create project",
                  description: "Create a new project to start adding tasks to.",
                },
                {
                  id: "2",
                  title: "Create project",
                  description: "Create a new project to start adding tasks to.",
                },
                {
                  id: "3",
                  title: "Create project",
                  description: "Create a new project to start adding tasks to.",
                },
              ]}
            />
            <StateCard
              title="InProgress"
              color="mediumseagreen"
              list={[
                {
                  id: "4",
                  title: "Create project",
                  description: "Create a new project to start adding tasks to.",
                },
                {
                  id: "5",

                  title: "Create project",
                  description: "Create a new project to start adding tasks to.",
                },
                {
                  id: "6",

                  title: "Create project",
                  description: "Create a new project to start adding tasks to.",
                },
              ]}
            />
            <StateCard
              title="InReview"
              color="darkorange"
              list={[
                {
                  id: "7",

                  title: "Create project",
                  description: "Create a new project to start adding tasks to.",
                },
                {
                  id: "8",

                  title: "Create project",
                  description: "Create a new project to start adding tasks to.",
                },
                {
                  id: "9",

                  title: "Create project",
                  description: "Create a new project to start adding tasks to.",
                },
              ]}
            />
            <StateCard
              title="Done"
              color="darkslateblue"
              list={[
                {
                  id: "10",

                  title: "Create project",
                  description: "Create a new project to start adding tasks to.",
                },
                {
                  id: "11",

                  title: "Create project",
                  description: "Create a new project to start adding tasks to.",
                },
                {
                  id: "12",

                  title: "Create project",
                  description: "Create a new project to start adding tasks to.",
                },
              ]}
            />
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
}
