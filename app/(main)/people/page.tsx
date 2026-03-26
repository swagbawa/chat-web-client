import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function PeopleScreen() {
  return (
    <ResizablePanelGroup direction="horizontal" className="flex-1">
      <ResizablePanel defaultSize={25}>
        <div className="h-full">
          <h1 className="p-3">Friends</h1>
          <hr />
          <div className="p-3 flex flex-col justify-between">
            <div>
              <div>All</div>
              <div>Pending</div>
            </div>
            <div>
              <div>Add Friend</div>
            </div>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="p-3">Two</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
