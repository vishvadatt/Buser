import SoftBox from "components/SoftBox";
import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SoftButton from "components/SoftButton";
import "./pagistyles.css";
import { Pagination, Table } from "antd";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "services/AxiosInstance";
import ReactSelect from "react-select";

const ClientList = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState("");
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [searchList, setSearchList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedSearch, setSelectedSearch] = useState("");

  // console.log(searchList, "list");
  // console.log(data, "data");

  const fetchList = async () => {
    const response = await axiosInstance.get(
      `labReports/doctorAllPatientList/${UserId}?pageNo=${page}&limit=${pageSize}&searchText=${searchValue}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    const res = response?.data?.data;
    console.log(res);

    setTotal(res?.totalCount);
    setData(res?.result);

    setSearchList(
      res?.result?.map((data, i) => {
        return {
          value: data?._id,
          label: data?.clientName,
        };
      })
    );
  };

  // useEffect(() => {
  //   fetchList();
  // }, []);

  useEffect(() => {
    fetchList();
  }, [page, pageSize, searchValue]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [page, pageSize]);

  const columns = [
    {
      title: "Name",
      dataIndex: "clientName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    // {
    //   title: " Upload Date",
    //   dataIndex: "createdAt",
    //   key: "date",
    //   render: (_, record) => {
    //     const date = new Date(record?.day);
    //     const day = date.getDate();
    //     const month = date.toLocaleString("en-US", { month: "long" });
    //     const year = date.getFullYear();

    //     return <>{`${day}-${month}-${year}`}</>;
    //   },
    // },
    {
      title: "View",
      key: "view",
      dataIndex: "tags",
      render: (_, record) => (
        <>
          <SoftButton
            onClick={() => {
              navigate(`/labs/client-report?clientId=${record._id}`);
            }}
          >
            View
          </SoftButton>
        </>
      ),
    },
    {
      title: "Add Report",
      key: "view",
      dataIndex: "tags",
      render: (_, record) => (
        <>
          <SoftButton
            style={{ backgroundColor: "#3a416f", color: "#fdfdfd" }}
            onClick={() => {
              navigate(`/labs/upload-report?clientId=${record._id}`);
            }}
          >
            Add Report
          </SoftButton>
        </>
      ),
    },
  ];
  const onShowSizeChange = (current, value) => {
    setPageSize(value);
  };

  const onHandleChange = (text) => {
    setSelectedSearch(text);
    if (text === null) {
      setSearchValue("");
    } else {
      setSearchValue(text?.label);
    }
  };
  return (
    <SoftBox p={2}>
      <SoftBox>
        <ReactSelect
          className="report-search"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              fontSize: "15px !important",
              borderRadius: "8px",
            }),
          }}
          placeholder="Search here"
          closeMenuOnSelect={true}
          options={searchList}
          onChange={(e) => {
            onHandleChange(e);
          }}
          value={selectedSearch}
          isClearable={true}
        />
      </SoftBox>
      <SoftBox style={{ overflowX: "scroll", overflowY: "hidden" }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </SoftBox>
      <SoftBox p={1}>
        <Pagination
          pageSize={pageSize}
          total={total}
          current={page}
          onChange={(value) => setPage(value)}
          showSizeChanger
          showQuickJumper
          onShowSizeChange={onShowSizeChange}
        />
      </SoftBox>
    </SoftBox>
  );
};

export default ClientList;
