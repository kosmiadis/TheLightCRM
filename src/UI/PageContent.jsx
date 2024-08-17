import { useNavigation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

export default function PageContent ({children, loadingText}) {

    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return <section className='w-[90%] max-w-[700px] mt-[50px] mx-auto flex flex-col'>
        {isLoading && <LoadingSpinner text={loadingText}/>}
        {!isLoading && <>{children}</>}
    </section>
}