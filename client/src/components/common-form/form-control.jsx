

function FormControls({formControls =[],formData,setFormData}){
    function renderComponentByType(getControlItem){
        let element = null;
        switch (getControlItem.componentType) {
            case 'input':
                element=<Input
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                type={getControlItem.type}/>
                break;
            case 'select':
                element=<Select>
                    <SelectTriggger>
                        <SelectValue placeholder={getControlItem.SelectValue}/>
                    </SelectTriggger>
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
                placeholder={getControlItem.placeholder}/>
                
                 break;               
            default:
                element=<Input
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                type={getControlItem.type}/>
                break;
        }
        return element;

    }
    return(
     <div className="flex flex-col gap-3">
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