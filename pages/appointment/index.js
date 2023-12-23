import { useEffect, useState } from "react";
import LayoutAuth from "../../components/layout_auth";
import { Link } from "react-router-dom";
import PageControlButton from "../../components/page_control_button";

export default function AppointmentIndex() {
    const [appointments, setAppointments] = useState(['']);
    const pageControls = [
        <PageControlButton url="/appointments/create" label="Create Appointment"></PageControlButton>
    ];

    const pageContent = () => {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Appointments</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Guest</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Appointment Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {appointments.map((val,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{val.guestName}</td>
                                        <td>{val.guestEmail}</td>
                                        <td>{val.guestMobileNumber}</td>
                                        <td>{val.appointmentDate}</td>
                                        <td>{val.status}</td>
                                        <td><Link to={"/appointments/edit/" + val._id}>Show</Link></td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    useEffect(() => {
        fetchAppointments();
        // console.log(appointments);
    },[])

    const fetchAppointments = async () => {
        let fetchAppointmentResponse = await fetch('/api/appointments');
        let fetchAppointmentResponseData = await fetchAppointmentResponse.json();
        setAppointments(fetchAppointmentResponseData);
    };


    return(
        <LayoutAuth element={pageContent} pageTitle="Appointments"
        pageButtons={pageControls}></LayoutAuth>
    );
}