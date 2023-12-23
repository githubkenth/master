import { useState } from "react";
import { cleanJson, postData } from "../../assets/js/utils";

export default function SpecializationForm({
    actionURL, id = null
}) {
    const [specializationName, setSpecializationName] = useState('');
    const [specializationDescription, setSpecializationDescription] = useState('');

    const fireAction = async(event) => {
        if(typeof id == null) {
            //update

            const updateForm = await postData(actionURL, 'POST', {
                specializationName : specializationName,
                specializationDescription : specializationDescription 
            });

            console.log(updateForm);

        } else {
            //create
            const updateForm = await postData(actionURL, 'PUT', {
                specializationName : specializationName,
                specializationDescription : specializationDescription,
                id : id
            });

            console.log(updateForm);
        }
    }
    return (
        <>
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
        </>
    );
}