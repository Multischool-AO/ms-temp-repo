import { ReactNode } from "react";
import Sidebar from "./sidebar";
import { ThemeSwitcher } from "../ui/theme-switcher";
import User from "./user";
import Notification from "../sheets/notification";
import NavHeading from "./nav-heading";
import { SidebarProvider } from "../ui/sidebar";

const Nav = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
    <SidebarProvider>
      <Sidebar/>
      <div className="scrollbar-thin max-h-screen w-full overflow-y-scroll">
        <nav className="sticky top-0 z-10 flex w-full items-center justify-between border-b bg-white px-3 py-4 dark:bg-dark md:py-5">
          <NavHeading />
          <div className="flex items-center gap-3">
            <Notification />
            <ThemeSwitcher />
            <User />
          </div>
        </nav>
        <main className="mx-auto min-h-[calc(100vh_-_90px)] max-w-7xl flex-1 px-3 py-4">
          {children}
        </main>
      </div>
    </SidebarProvider>
    </div>
  );
};

export default Nav;
