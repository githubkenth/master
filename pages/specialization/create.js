import { useState } from 'react';
import LayoutAuth from '../../components/layout_auth';
import PageControlButton from '../../components/page_control_button'
import { postData } from '../../assets/js/utils';
import { useParams } from 'react-router-dom';
export default function SpecializationCreate(){

    const params = useParams();

    const [specializationName, setSpecializationName] = useState('');
    const [specializationDescription, setSpecializationDescription] = useState('');

    const fireAction = async(event) => {
        event.preventDefault();
        const response = await postData('/api/specializations', 'POST', {
            specializationName : specializationName,
            specializationDescription : specializationDescription
        });

        if(response) {
            window.location.href = '/specialization/index';
        }
    }

    const pageContent = () => {
        return(
            <div className='col-md-6 mx-auto'>
                <div className='card'>
                    <div className='card-header'>
                        <h4 className='card-title'>Add New Specialization</h4>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={fireAction}>
                            <div className="form-group">
                                <label className="form-label">Specialization Name</label>
                                <input className="form-control" onChange={(event) => {
                                    setSpecializationName(event.target.value)
                                }}></input>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Specialization Description</label>
                                <input className="form-control" onChange={(event) => {
                                    setSpecializationDescription(event.target.value)
                                }}></input>
                            </div>

                            <div className="form-group mt-3">
                                <input type="submit" className="btn btn-primary btn-sm" value="Submit"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    const pageButtons = [
        <PageControlButton url='/specialization/index' label="Specializations"></PageControlButton>
    ];

    return (
        <LayoutAuth element={pageContent} pageTitle='Specialization Management'
        pageButtons={pageButtons}></LayoutAuth>
    );
}