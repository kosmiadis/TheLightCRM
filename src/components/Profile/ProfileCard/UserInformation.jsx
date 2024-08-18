import PageSection from "../../../UI/PageSection";
import InfoDisplay from '../../../UI/InfoDisplay';

export default function UserInformation ({user}) {

    const { firstName, lastName, email, age, username, phone, address } = user;

    const { country } = address;

    const userInformation = [
        {text: 'First Name', type:'text' , value: firstName},
        {text: 'Last Name', type:'text' ,value: lastName},
        {text: 'Email', type:'email', value: email},
        {text: 'Age', type: 'number', value: age},
        {text: 'Username', type:'text', value: username},
        {text: 'Phone', type:'tel', value: phone},
        {text: 'Country', type:'text', value: country}

    ]

    return <PageSection title={'User Information'} classes={'flex flex-col gap-4'} >
        {userInformation.map(info => (
            <InfoDisplay key={info.text} type={info.type} text={info.text} initialValue={info.value}/>
        ))}
    </PageSection>
}