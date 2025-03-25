import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '../ui/select';


function FormControls({formControls =[],formData,setFormData}){
    function renderComponentByType(getControlItem){
        let element = null;
        const  currentControlItemValue =formData[getControlItem.name] || ''
        switch (getControlItem.componentType) {
            case 'input':
                element=<Input
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                type={getControlItem.type}
                value={currentControlItemValue}
                onChange={(event)=> setFormData({
                    ...formData,
                    [getControlItem.name] : event.target.value
                })}/>
                break;
            case 'select':
                element=<Select
                onValueChange={(value)=>setFormData({
                    ...formData,
                    [getControlItem.name] : value
                })}
                value={currentControlItemValue}>
                    <SelectTrigger>
                        <SelectValue placeholder={getControlItem.SelectValue}/>
                    </SelectTrigger>
                    <SelectContent>
                        {
                            getControlItem.options && getControlItem.options.length>0 ?
                            getControlItem.options.map(optionItem=><SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>): null
                        }
                    </SelectContent>
                </Select>   
                 break;
            case 'textarea':
                element=<Textarea
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}value={currentControlItemValue}
                onChange={(event)=> setFormData({
                    ...formData,
                    [getControlItem.name] : event.target.value
                })}/>
                
                 break;               
            default:
                element=<Input
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                type={getControlItem.type}value={currentControlItemValue}
                onChange={(event)=> setFormData({
                    ...formData,
                    [getControlItem.name] : event.target.value
                })}/>
                break;
        }
        return element;

    }
    return(
     <div className="flex flex-col gap-4">
        {
            formControls.map(controleItems=>
                <div key={controleItems.name}>
                    <Label htmlFor={controleItems.name}>{controleItems.label}</Label>
                    {
                        renderComponentByType(controleItems)
                    }
                    </div>
            )
        }
     </div>
    )
}
export default FormControls;