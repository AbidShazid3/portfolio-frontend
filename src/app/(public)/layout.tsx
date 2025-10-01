import Navbar from "@/components/shared/Navbar";
import React from "react";


const PublicLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
            <main>{children}</main>
        </div>
    );
};

export default PublicLayout;