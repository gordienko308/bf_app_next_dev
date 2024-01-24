import NavLinks from '@/app/ui/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
/*import { signOut } from '@/auth';*/

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-1 py-6 md:px-2">
      
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
