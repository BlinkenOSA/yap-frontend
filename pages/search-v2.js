import AppLayout from "../components/LayoutV2/Layout";
import React from "react";
import {useRouter} from "next/router";
import {Col, Row} from "antd";
import ResultPage from "../components/SearchV2/ResultPage/ResultPage";
import Head from "next/head";

const Search = () => {
  const router = useRouter();
  const params = router.query;

  return (
    <AppLayout>
      <Head>
        <title>YAP (Yugoslavia Archive Project) - Search</title>
      </Head>
      <Row>
        <Col xs={24}>
          <ResultPage {...params} />
        </Col>
      </Row>
    </AppLayout>
  );
};

export default Search;
