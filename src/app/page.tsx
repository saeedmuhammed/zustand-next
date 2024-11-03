import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-10">
      <div className="text-2xl font-semibold">Tasks Dashboard</div>
      <div className="flex gap-10">
        <Card className="w-[400px] min-h-[700px] ">
          <CardHeader className="flex flex-row gap-2 items-center">
            <div className="w-6 h-6 bg-slate-700 rounded-sm"></div>
            <CardTitle className="!mt-0 text-xl">Todo</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Card className="cursor-pointer hover:bg-gray-100">
              <CardHeader>
                <CardTitle className="!mt-0">Create project</CardTitle>
                <CardDescription>
                  Create a new project to start adding tasks to.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="!mt-0">Create project</CardTitle>
                <CardDescription>
                  Create a new project to start adding tasks to.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="!mt-0">Create project</CardTitle>
                <CardDescription>
                  Create a new project to start adding tasks to.
                </CardDescription>
              </CardHeader>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
