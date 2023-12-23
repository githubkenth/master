import { useEffect, useState } from 'react';
import LayoutAuth from '../../components/layout_auth';
import whoIs from '../../assets/js/whoIs';

export default function DashboardAdmin() {
    const [authData, setAuthData] = useState([]);

    const pageContent = () => {
        return (
            <>
                <h1>Currently Undermaintenance</h1>
            </>
        );
    }

    useEffect(() => {
        console.log(whoIs());
    }, []);

    return (
        <LayoutAuth element={pageContent} pageTitle='Dashboard'></LayoutAuth>
    );
}