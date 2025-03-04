import React from 'react';
import { Tabs} from "@/components/ui/tabs";
import { Link } from 'react-router-dom';
import { GraduationCap} from 'lucide-react';

const Authpage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center border-b'>
       <Link to={'/'} className='flex items-center justify-center'>
       <GraduationCap className="h-8 w-8 mr-4"/>
       <span className="font-extrabold">LMS Learn</span>
       </Link>
      </header>
      <div className='flex items-center justify-center min-h-screen'>
      <Tabs></Tabs>
      </div>
    </div>
  )
}

export default Authpage;