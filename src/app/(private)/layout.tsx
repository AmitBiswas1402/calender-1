import { NavLinks } from "@/components/NavLinks";
import { UserButton } from "@clerk/nextjs";
import { CalendarRange } from "lucide-react";
import { ReactNode } from "react";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className="flex px-2 border-b bg-card">
        <nav className="font-medium flex items-center text-xl gap-6 container p-3">
          <div className="flex items-center gap-2 font-semibold mr-auto">
            <CalendarRange className="size-6" />
            <span className="sr-only md:not-sr-only">Calender</span>
          </div>
          <NavLinks href="/events">Events</NavLinks>
          <NavLinks href="/schedule">Schedule</NavLinks>
          <div className="ml-auto size-10">
            <UserButton
              appearance={{ elements: { userButtonAvatarBox: "size-xl" } }}
            />
          </div>
        </nav>
      </header>
      <main className="container my-1 mx-auto p-3">{children}</main>
    </div>
  );
};
export default PrivateLayout;
