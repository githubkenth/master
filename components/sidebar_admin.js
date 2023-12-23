export default function SidebarAdmin() {
    return (
        <>
            <div
                className="fixed-top d-flex flex-column flex-shrink-0 p-3 text-white bg-success"
                style={{ width: 280}}
                >
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                    <svg className="bi me-2" width={40} height={32}>
                    <use xlinkHref="#bootstrap" />
                    </svg>
                    <span className="fs-4">Administrator</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-white" aria-current="page">
                            <svg className="bi me-2" width={16} height={16}>
                            <use xlinkHref="#home" />
                            </svg>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/users/index" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                            <use xlinkHref="#speedometer2" />
                            </svg>
                            Users
                        </a>
                    </li>
                    <li>
                        <a href="/specialization/index" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                            <use xlinkHref="#table" />
                            </svg>
                            Specializations
                        </a>
                    </li>
                    <li>
                        <a href="/services/index" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                            <use xlinkHref="#table" />
                            </svg>
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/appointments/index" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                            <use xlinkHref="#grid" />
                            </svg>
                            Appointments
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                            <use xlinkHref="#people-circle" />
                            </svg>
                            General Reports
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}>
                            <use xlinkHref="#people-circle" />
                            </svg>
                            Profile
                        </a>
                    </li>
                </ul>
                <hr />
            </div>
        </>
    );
}