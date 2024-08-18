import PageSection from "../../../UI/PageSection"
import InfoDisplay from '../../../UI/InfoDisplay';

export default function WorkInformation ({user}) {

    const { company } = user;

    const { department, name, title, } = company;

    const workInformation= [
        {text: 'Department', type:'text' , value: department},
        {text: 'Name', type:'text' , value: name},
        {text: 'Works as', type:'text' , value: title},
    ]

    return <PageSection title={'Work Information'} classes={'flex flex-col gap-4'} >
            {workInformation.map(info => (
                <InfoDisplay key={info.text} type={info.type} text={info.text} initialValue={info.value}/>
            ))}
        </PageSection>
}