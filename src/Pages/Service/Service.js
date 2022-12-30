// USED PACKAGES
import React,{useEffect} from 'react'
import { useParams } from 'react-router';
import { useHistory } from 'react-router'

// USED CUSTOM HOOK
import useService from '../../Hooks/getService';

// USED COMPONENTS
import ListBoxServices from '../../Components/ListBox/ListBoxServices';

const Service = () => {
    const history = useHistory();
    const params = useParams();
    const service = useService(params.service);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <>
            { service.length === 0 ? history.push('/') : <ListBoxServices service = {service[0]} /> }
        </>
    )
}

export default Service
