import AppLayout from "../components/Layout/Layout";
import React from "react";
import {useRouter} from "next/router";
import {Col, Row} from "antd";
import ResultPage from "../components/Search/ResultPage/ResultPage";
import {Media} from "../components/Media/Media";
import Head from "next/head";
import ResultPageMobile from "../components/Search/ResultPage/ResultPageMobile";

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
          <Media lessThan="md"><ResultPageMobile {...params} /></Media>
          <Media greaterThan="sm"><ResultPage {...params} /></Media>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default Search;
