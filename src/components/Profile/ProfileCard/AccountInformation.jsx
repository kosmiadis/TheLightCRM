import PageSection from '../../../UI/PageSection';
import { Avatar } from '@nextui-org/react';

export default function AccountInformation ({ user }) {

    const { firstName, lastName, email, image } = user;

    return <PageSection title={'Account Info'}>
        <div className='flex gap-4 items-center'>
            <Avatar showFallback fallback={firstName.split('')[0] + lastName.split('')[0]} src={image} isBordered color="secondary"/>
            <div className='flex flex-col gap-0'>
                <span>Logged In as</span>
                <p className='font-semibold italic'>{email}</p>
            </div>
        </div>
    </PageSection>
}