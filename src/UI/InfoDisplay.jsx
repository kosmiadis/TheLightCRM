import { Button } from "@nextui-org/react";
import { useState } from "react"

export default function InfoDisplay ({text, type, initialValue}) {

    const [isEditable, setisEditable] = useState(false);
    const [value, setValue] = useState(initialValue);
    
    function handleChange (e) {
        setValue(e.target.value.trim());
    }

    function handleEdit () {
        if (value !== '') {
            setisEditable(prevValue => !prevValue);    
        }
    }

    return <div className="flex w-[100%] justify-between">
        <div className="flex items-center gap-3">
            <label className="pl-2 border-l-5 border-secondary text-md font-bold">{text}</label>
            <input className={`text-md p-2 ${!isEditable ? 'bg-transparent' : ''} outline-none`} type={type} onChange={handleChange} value={value} readOnly={!isEditable}/>
        </div>
        <Button onClick={handleEdit} color={!isEditable ? 'warning' : 'success'} variant='ghost'>{!isEditable ? 'Edit' : 'Save'}</Button>
    </div>
}