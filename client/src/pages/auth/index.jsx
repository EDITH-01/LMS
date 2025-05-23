import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { Tabs ,TabsContent,TabsTrigger, TabsList} from '../../components/ui/tabs';
import { Card, CardHeader,CardContent,CardDescription,CardTitle} from '../../components/ui/card';
import CommonForm from '../../components/common-form';
import { signUpFormControls,signInFormControls } from '../../config';
import { AuthContext } from '../../context/auth-context';


function Authpage() {
  const [activeTab, setActiveTab] = useState('signin');
  const{  signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser} = useContext(AuthContext);
  function handleTabChange(value) {
    setActiveTab(value)
  }

  function checkIfSignInFormIsValid(){
    return signInFormData && signInFormData.userEmail !== '' && signInFormData.password !== ''
  }
  function checkIfSignUpFormIsValid(){
    return signUpFormData && signUpFormData.userName !=='' && signUpFormData.userEmail !== '' && signUpFormData.password !== ''
  }
  console.log(signInFormControls);
  
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
            {/* <CommonForm formControls={signInFormControls}/> */}
            <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Sign in to your account</CardTitle>
                <CardDescription>
                  Enter your email and password to access your accounnt
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
               <CommonForm formControls={signInFormControls}
               buttonText={"Sign In"}
               formData={signInFormData}
               setFormData={setSignInFormData}
               isButtonDisabled={!checkIfSignInFormIsValid()}></CommonForm>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='signup'>
          <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Create a new account</CardTitle>
                <CardDescription>
                  Enter your details to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
               <CommonForm 
               formControls={signUpFormControls}
               buttonText={"Sign Up"}
               formData={signUpFormData}
               setFormData={setSignUpFormData}
               isButtonDisabled={!checkIfSignUpFormIsValid()}
               handleSubmit={handleRegisterUser}></CommonForm>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Authpage;
