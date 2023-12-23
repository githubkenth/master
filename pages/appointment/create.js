import { useState } from "react";
import LayoutAuth from "../../components/layout_auth";
import { postData } from "../../assets/js/utils";
import PageControlButton from "../../components/page_control_button";

export default function AppointmentCreate() {
    const [guestName, setGuestName] = useState('');
    const [guestMobileNumber, setGuestMobileNumber] = useState('');
    const [guestEmail, setGuestEmail] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [notes, setNotes] = useState('');

    const pageControls = [
        <PageControlButton url="/appointments/index" label="Appointments"></PageControlButton>
    ];

    const createAppointment = async (event) => {
        event.preventDefault();

        const createAppointmentResponse = await postData('/api/appointments', 'POST', {
            guestName : guestName,
            guestMobileNumber : guestMobileNumber,
            guestEmail : guestEmail,
            appointmentDate : appointmentDate,
            notes : notes
        });

        // const responseData = await createAppointmentResponse.json();
        console.log([
            createAppointmentResponse,
        ]);

        window.location.href = '/appointments/index';

    }

    const pageContent = () => {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Create Appointment</h4>
                </div>
                <div className="card-body">
                    <form method="post" onSubmit={createAppointment}>
                        <div className="form-group mb-3">
                            <label>Guest Name</label>
                            <input type="text" className="form-control" id="guest_name"
                                onChange={(event) => {
                                    setGuestName(event.target.value)
                                }}></input>
                        </div>

                        <div className="form-group mb-3">
                            <label>Guest Mobile Number</label>
                            <input type="text" className="form-control" id="guest_mobile_number"
                                onChange={(event) => {
                                    setGuestMobileNumber(event.target.value)
                                }}></input>
                        </div>

                        <div className="form-group mb-3">
                            <label>Guest Email (optional) </label>
                            <input type="text" className="form-control" id="guest_email"
                            onChange={(event) => {
                                setGuestEmail(event.target.value)
                            }}></input>
                        </div>
                        
                        <div className="form-group mb-3">
                            <label>Appointment Date </label>
                            <input type="date" className="form-control" id="date"
                            onChange={(event) => {
                                setAppointmentDate(event.target.value)
                            }}></input>
                        </div>

                        <div className="form-group mb-3">
                            <label>Notes </label>
                            <textarea className="form-control" id="notes"
                            onChange={(event) => {
                                setNotes(event.target.value)
                            }}></textarea>
                        </div>
                        
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary btn-sm" value="Save Appointment"></input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    return (
        <LayoutAuth element={pageContent} pageTitle="Appointment Management" pageButtons={pageControls}></LayoutAuth>
    );   
}