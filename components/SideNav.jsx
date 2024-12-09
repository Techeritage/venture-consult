import { Text } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function SideNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Text className={``} strokeWidth={1.3} size={32} />
      </SheetTrigger>
      <SheetContent side = "top" className="bg-primaryBg text-white">
        <div></div>
      </SheetContent>
    </Sheet>
  );
}
