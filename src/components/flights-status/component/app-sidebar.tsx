import * as React from "react"
import { Plus } from "lucide-react"


import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import {DatePicker} from "@/components/book-flight/component/data-picker";
import {Calendars} from "@/components/book-flight/component/calenders";

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    calendars: [
        {
            name: "My Calendars",
            items: ["Personal", "Work", "Family"],
        },
        {
            name: "Favorites",
            items: ["Holidays", "Birthdays"],
        },
        {
            name: "Other",
            items: ["Travel", "Reminders", "Deadlines"],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader className="h-16 border-b border-sidebar-border">
                <NavUser user={data.user} />
            </SidebarHeader>
            <SidebarContent>
                <DatePicker />
                <SidebarSeparator className="mx-0" />
                <Calendars calendars={data.calendars} />
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Plus />
                            <span>New Calendar</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
