import { useState } from 'react';
import LayoutAuth from '../../components/layout_auth';
import PageControlButton from '../../components/page_control_button';
import { postData } from '../../assets/js/utils';

export default function ServiceCreate() {
    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [serviceAmount, setServiceAmount] = useState('');

    const fireAction = async (event) => {
        event.preventDefault();

        console.log({
            serviceName : serviceName,
            serviceAmount : serviceAmount,
            serviceDescription : serviceDescription
        });
        
        let response = await postData('/api/services', 'POST', {
            serviceName : serviceName,
            serviceAmount : serviceAmount,
            serviceDescription : serviceDescription
        });

        if(response) {
            window.location.href = '/services/index';
        }
    }
    
    const pageContent = () => {
        return (
            <div className='col-md-6 mx-auto'>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Create Service</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={fireAction}>
                            <div className='form-group'>
                                <label className='form-label'>Service Name</label>
                                <input type='text' className='form-control' 
                                    onChange={(event) => {
                                        setServiceName(event.target.value)
                                    }}></input>
                            </div>

                            <div className='form-group'>
                                <label className='form-label'>Service Description</label>
                                <textarea className='form-control'
                                onChange={(event) => {
                                    setServiceDescription(event.target.value)
                                }}
                                value={serviceDescription}></textarea>
                            </div>

                            <div className='form-group'>
                                <label className='form-label'>Service Amount</label>
                                <input type='text' className='form-control' 
                                    onChange={(event) => {
                                        setServiceAmount(event.target.value)
                                    }}></input>
                            </div>

                            <div className='form-group'>
                                <input type='submit' className='btn btn-primary btn-sm mt-3' value={'Submit'}></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    const pageButtons = [
        <PageControlButton url={'/services/index'} label={'Services'}></PageControlButton>
    ];
    return (
        <LayoutAuth element={pageContent} pageTitle='Service Management'
        pageButtons={pageButtons}></LayoutAuth>
    );
}