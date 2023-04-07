import Layout from "../../components/Layout/Layout";
import Widget from "../../components/fields/Widget";
import Box from "../../components/Layout/Box";

const Account = () => {
  return (
    <Layout title="Account">
      <Box m="1.5rem" rigth="0%" bottom="0%">
        <Box display="grid" gridGap="1.5rem" gridTemplateColumns={"1fr 1fr 1fr"}>
          <Widget>
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
};

export default Account;
