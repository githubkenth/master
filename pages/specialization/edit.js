import { useEffect, useState } from "react";
import LayoutAuth from "../../components/layout_auth";
import PageControlButton from "../../components/page_control_button";
import SpecializationForm from "./form";
import { useParams } from "react-router-dom";
import { getData, postData } from "../../assets/js/utils";

export default function SpecializationEdit() {
    const params = useParams();
    const [specialization, setSpecialization] = useState('');
    const [specializationCode, setSpecializationCode] = useState('');
    const [specializationName, setSpecializationName] = useState('');
    const [specializationDescription, setSpecializationDescription] = useState('');

    const fireAction = async(event) => {
        event.preventDefault();

        const updateForm = await postData('/api/specializations/' + params.id, 'PUT', {
            specializationName : specializationName,
            specializationDescription : specializationDescription 
        });

        if(updateForm) {
            window.location.href = '/specialization/index';
        }
    }

    const deleteSpecialization = async(event) => {
        let response = await postData('/api/specializations/' + params.id, 'DELETE');
        window.location.href = '/specialization/index';
    }

    const pageContent = () => {
        return(
            <>
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Edit Specialization</h4>
                            <button onClick={deleteSpecialization} className="btn btn-danger btn-sm" >Delete</button>
                        </div>
                        <div className="card-body">
                            <form onSubmit={fireAction}>
                                <div className="form-group">
                                    <label className="form-label">Code</label>
                                    <input className="form-control" onChange={(event) => {
                                        setSpecializationName(event.target.value)
                                    }} value={specialization.specializationCode}></input>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Specialization Name</label>
                                    <input className="form-control" onChange={(event) => {
                                        setSpecializationName(event.target.value)
                                    }} value={specializationName}></input>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Specialization Description</label>
                                    <input className="form-control" onChange={(event) => {
                                        setSpecializationDescription(event.target.value)
                                    }} value={specializationDescription}></input>
                                </div>

                                <div className="form-group mt-3">
                                    <input type="submit" className="btn btn-primary btn-sm" value="Submit"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const pageButtons = [
        <PageControlButton url={'/specialization/index'} label={'Specializations'}></PageControlButton>
    ];

    const fetchSpecialization = async () => {
        let response = await getData('/api/specializations?id=' + params.id);
        setSpecializationName(response.specializationName ?? '');
        setSpecializationDescription(response.specializationDescription ?? '');
        setSpecializationCode(response.setSpecializationCode ?? '');
        setSpecialization(response);
    }
    
    useEffect(() => {
        fetchSpecialization();
    }, []);
    
    return(
        <LayoutAuth element={pageContent} pageTitle="Specialization Management" pageButtons={pageButtons}></LayoutAuth>
    );
}