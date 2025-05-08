import { ReactNode, useState } from 'react';
import { Sidebar } from './Sidebar';
import { Toaster } from '@/components/ui/toaster';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { PlaneIcon, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 h-16 border-b bg-card/80 backdrop-blur flex items-center px-4 md:px-6 justify-between">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden"
            >
              <span className="sr-only">Toggle sidebar</span>
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
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
            <div className="flex items-center gap-2">
              <PlaneIcon className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold text-primary tracking-tight">
                SkyWay Airlines
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <span className="font-medium">{user.name}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <span className="text-sm text-muted-foreground">{user.email}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full capitalize">
                      {user.role}
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </header>
        
        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
      
      <Toaster />
    </div>
  );
}