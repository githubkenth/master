import { useEffect, useState } from "react";
import LayoutAuth from "../../components/layout_auth";
import PageControlButton from "../../components/page_control_button";
import { getData } from "../../assets/js/utils";
import { Link } from "react-router-dom";

export default function SpecializationIndex() {
    const [specializations, setSpecializations] = useState(['']);

    const fetchSpecializations = async() => {
        const response = await getData('/api/specializations');
        setSpecializations(response);
    };

    useEffect(() => {
        fetchSpecializations();
    }, []);

    const pageContent = () => {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Specializations</h4>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Specizalition</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {specializations.map((val, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{val.specializationCode}</td>
                                        <td>{val.specializationName}</td>
                                        <td>{val.specializationDescription}</td>
                                        <td><Link to={"/specialization/edit/" + val._id}>Edit</Link></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    const pageButtons = [
        <PageControlButton url='/specialization/create' label='Add New Specialization'></PageControlButton>
    ];

    return (
        <LayoutAuth element={pageContent} pageButtons={pageButtons} pageTitle="Specialization Management"></LayoutAuth>
    );
}