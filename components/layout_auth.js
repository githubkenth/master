import React from "react";
import NavigationAuthenticated from "./navigation_authenticated";
import SidebarAdmin from "./sidebar_admin";
export default function LayoutAuth({element, pageTitle = '', pageButtons = []}) {
    return(
        <>
            <SidebarAdmin></SidebarAdmin>
            <NavigationAuthenticated></NavigationAuthenticated>
            <main id="mainContent">
                <div className="d-flex w-100 align-items-center" style={{
                    marginBottom: 40
                }}>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h1 className="h3 mb-0 text-gray-800">{pageTitle}</h1>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{
                        textAlign:"right"
                    }}>
                        {pageButtons.map((element,index) => {
                            return (element);
                        })}
                    </div>
                </div>
                <hr/>
                {element()}
            </main>
        </>
    );
}


