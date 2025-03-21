import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { Tabs } from '../../components/ui/tabs';
import { TabsContent, TabsTrigger, TabsList } from '@radix-ui/react-tabs';
  // import CommonForm from '../../components/common-form/index';
  // import { signUpFormControls } from '../../components/common-form/form-control';

function Authpage() {
  const [activeTab, setActiveTab] = useState('signin');

  function handleTabChange(value) {
    setActiveTab(value);
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center border-b'>
        <Link to='/' className='flex items-center justify-center'>
          <GraduationCap className='h-8 w-8 mr-4' />
          <span className='font-extrabold'>LMS Learn</span>
        </Link>
      </header>
      <div className='flex items-center justify-center min-h-screen'>
        <Tabs value={activeTab} defaultValue='signin' onValueChange={handleTabChange} className='w-full max-w-md'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='signin'>Sign In</TabsTrigger>
            <TabsTrigger value='signup'>Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value='signin'>
            {/* <CommonForm formControls={signUpFormControls} /> */}
            Sign In Form
          </TabsContent>
          <TabsContent value='signup'>Sign Up Form</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Authpage;
