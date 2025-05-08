import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import { HomeIcon, SearchIcon, XCircleIcon, MessageSquareIcon, PlaneIcon, UsersIcon, MessageSquareTextIcon, Airplay as Airplane } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const userNavItems = [
    {
      title: 'Dashboard',
      href: '/',
      icon: HomeIcon,
    },
    {
      title: 'Search Flights',
      href: '/search',
      icon: SearchIcon,
    },
    {
      title: 'My Bookings',
      href: '/bookings',
      icon: Airplane,
    },
    {
      title: 'Send Feedback',
      href: '/feedback',
      icon: MessageSquareIcon,
    },
  ];
  
  const adminNavItems = [
    {
      title: 'Dashboard',
      href: '/admin',
      icon: HomeIcon,
    },
    {
      title: 'Manage Flights',
      href: '/admin/flights',
      icon: PlaneIcon,
    },
    {
      title: 'Manage Users',
      href: '/admin/users',
      icon: UsersIcon,
    },
    {
      title: 'Feedback',
      href: '/admin/feedback',
      icon: MessageSquareTextIcon,
    },
  ];
  
  const navItems = isAdmin ? adminNavItems : userNavItems;
  
  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href === '/admin' && location.pathname === '/admin') return true;
    return location.pathname.startsWith(href) && href !== '/' && href !== '/admin';
  };
  
  return (
    <aside
      className={cn(
        "fixed inset-y-0 z-40 flex flex-col border-r bg-muted/40 transition-all lg:left-0 max-w-64",
        isOpen ? "left-0" : "-left-64"
      )}
    >
      <div className="sticky top-0 flex h-16 items-center justify-between px-4 md:px-6 border-b">
        <div className="flex items-center gap-2">
          <PlaneIcon className="h-6 w-6 text-primary" />
          <span className="font-semibold tracking-tight">
            {isAdmin ? 'Admin Panel' : 'SkyWay Airlines'}
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <span className="sr-only">Close sidebar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, i) => (
            <Button
              key={i}
              variant={isActive(item.href) ? "secondary" : "ghost"}
              className={cn(
                "group relative flex h-10 justify-start gap-3 px-4 text-foreground",
                isActive(item.href) && "bg-secondary text-secondary-foreground"
              )}
              onClick={() => {
                navigate(item.href);
                if (window.innerWidth < 1024) {
                  setIsOpen(false);
                }
              }}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Button>
          ))}
        </nav>
      </div>
    </aside>
  );
}