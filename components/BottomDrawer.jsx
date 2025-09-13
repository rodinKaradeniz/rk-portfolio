import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "./Button";
import { icons } from "@/data";

const BottomDrawer = ({ menu, onClick }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button title="Click to view more" IconRight={icons.arrow_right} />
      </SheetTrigger>

      <SheetContent
        side="bottom"
        className="ml-24 p-0 border-none rounded-tl-lg text-secondary bg-gradient-primary"
      >
        <div className="h-full py-10 pl-8 flex flex-col justify-between">
          <div className="flex flex-col justify-center gap-6">
            {menu.map((item, index) => {
              const ind = index;
              return (
                <div
                  key={item}
                  className="text-xl cursor-pointer"
                  onClick={() => onClick(ind)}
                >
                  <SheetClose asChild>
                    <h4 className="h4">{item}</h4>
                  </SheetClose>
                </div>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BottomDrawer;
