import { useEffect, useState } from "react";

import Layout from "../../components/Layout/Layout";
import SubHeader from "../../components/Layout/SubHeader";
import Button from "../../components/buttons/Button";

const Kalender = () => {
    const handleAppointment = () => {
        alert("new appointment")
    }

    return (
        <Layout title="Kalender">
            <SubHeader>
                <Button color="secondary" onClick={handleAppointment}>Nieuw</Button>
            </SubHeader>
        </Layout>
    )
};

export default Kalender;