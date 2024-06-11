import { LuLoader2 } from "react-icons/lu";
function ContentWrapperSkeleton() {
  return (
    <div className="rounded bg-white flex  items-center justify-center   h-40 shadow-sm  p-4 dark:bg-slate-800 font-montserrat">
      <LuLoader2 size={40} className="animate-spin dark:text-white" />
    </div>
  );
}

export default ContentWrapperSkeleton;
