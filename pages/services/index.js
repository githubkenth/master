import { useEffect, useState } from "react";
import LayoutAuth from "../../components/layout_auth";
import PageControlButton from "../../components/page_control_button";
import { getData } from "../../assets/js/utils";
import { Link } from "react-router-dom";

export default function ServiceIndex() {
    const [services, setServices] = useState([]);
    const pageContent = () => {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Services</h4>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Code</th>
                                <th>Service Name</th>
                                <th>Service Description</th>
                                <th>Service Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {services.map((element,index) => {
                                return (
                                    <tr>
                                        <td>{++index}</td>
                                        <td>{element.serviceCode}</td>
                                        <td>{element.serviceName}</td>
                                        <td>{element.serviceDescription}</td>
                                        <td>{element.serviceAmount}</td>
                                        <td><Link to={'/services/edit/' + element._id}>Edit</Link></td>
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
        <PageControlButton url={'/services/create'} label={'Add New Service'}></PageControlButton>
    ];

    const fetchService = async () => {
        let response = await getData('/api/services');
        setServices(response);
    }

    useEffect(() => {
        fetchService();
    }, []);
    return (
        <LayoutAuth element={pageContent} pageTitle='Service Management'
        pageButtons={pageButtons}></LayoutAuth>
    );
}