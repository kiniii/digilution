import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout"
import styled from "styled-components";
import Widget from "../../components/fields/Widget";

const Account = () => {
    return (
        <Layout title="Account">
            <Box right="0%" bottom="0%" m="1.5rem">
                <Box display="grid" gap="1.5rem" gridTemplateColumns={"1fr 1fr 1fr"}>
                    <Widget >
                        <h1>Test</h1>
                    </Widget>
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                </Box>
            </Box>
        </Layout>
    );
}

export default Account;