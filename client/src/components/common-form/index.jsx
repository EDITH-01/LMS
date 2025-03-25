import FormControls from "./form-control";
import {Button} from "../ui/button"

function CommonForm({
    handleSubmit,
    buttonText,
    formControls =[],
    formData,
    setFormData,
    isButtonDisabled = false,
   }) {
    return(
        <form onSubmit={handleSubmit}>
            <FormControls 
            formControls={formControls} 
            formData={formData} 
            setFormData={setFormData}/>
         <Button disabled={isButtonDisabled} type="submit" className="bg-black text-white mt-5 w-full">
            {buttonText || 'Submit'}
            </Button>
        </form>
    )
} 

export default CommonForm;