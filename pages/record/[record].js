import React from "react";
import { useRouter } from 'next/router'
import useSWR from "swr";
import {API, fetcher} from "../../utils/api";
import AppLayout from "../../components/Layout/Layout";
import Record from "../../components/Record/Record";

const RecordPage = () => {
  const router = useRouter();
  const { record } = router.query;

  const { data, error } = useSWR(record ? `${API}/repository/records/${record}/` : null, fetcher);

  return (
    <AppLayout withBackground={true}>
      <div className="container">
        {data ? <Record data={data}/> : ''}
      </div>
    </AppLayout>
  )
};

export default RecordPage
