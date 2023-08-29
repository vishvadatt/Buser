// @mui material components

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Avatar, Card } from "@mui/material";
import { Pagination, Table } from "antd";
import "antd/dist/antd.css";
import "./style.css";

import dataTableData from "layouts/pages/Equipment/data/dataTableData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEquipmentListAction } from "store/actions/actions";
import DataTable from "./components/DataTable";
import { findOneUserAction } from "store/actions/actions";
import DialogBox from "../DialogBox/index";
import { axiosInstance } from "services/AxiosInstance";
import SoftButton from "components/SoftButton";
import ReactSelect from "react-select";

function Equipment() {
  const token = useSelector((state) => state.auth.auth.idToken);
  const userId = useSelector((state) => state.auth.auth._id);
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);
  const [postPerPage, setPostPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const [selectedSearch, setSelectedSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const equipments = useSelector((state) =>
    state?.auth?.equipmentsList ? state?.auth?.equipmentsList : []
  );
  // const totalCount = useSelector((state) =>
  //   state?.auth?.equipmentsList?.totalCount ? state?.auth?.equipmentsList?.totalCount : []
  // );
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);

  const equipmentsList = equipments?.result ? equipments?.result : [];
  const totalCount = equipments?.totalCount ? equipments?.totalCount : 0;

  // console.log("equipmentsList", equipmentsList);
  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get("equipment/userEquipmentCategoryList", {
        headers: {
          authorization: token,
        },
      });
      const options = res?.data?.data;
      const mappedOptions = options.map((option) => ({
        value: option._id,
        label: option.name,
      }));
      setOptions(mappedOptions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    dispatch(
      getEquipmentListAction({
        token,
        page,
        postPerPage,
        filterCategory: searchValue,
      })
    );
    dispatch(findOneUserAction({ userId, token }));
  }, []);

  useEffect(() => {
    dispatch(
      getEquipmentListAction({
        token,
        page,
        postPerPage,
        filterCategory: searchValue,
      })
    );
  }, [page, postPerPage, dispatch, token, searchValue]);

  const onShowSizeChange = (current, pageSize) => {
    setPostPerPage(pageSize);
  };

  // const handleChange = (selectedOption) => {
  //   setSelectedOption(selectedOption);
  // };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => {
        if (image) {
          return <img src={image} alt="Equipment" style={{ width: "100px" }} />;
        } else {
          return <Avatar src="" alt="Demo Equipment" style={{ width: "100px" }} />;
        }
      },
    },
    {
      title: "Note",
      dataIndex: "note",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Category",
      dataIndex: "categoryName",
    },
    {
      title: "Action",
      key: "link",
      dataIndex: "link",
      render: (_, record) => (
        <>
          <SoftButton color="info" href={record.link} target="_blank">
            buy now
          </SoftButton>
        </>
      ),
    },
  ];

  const onHandleChange = (text) => {
    setPage(1);
    setSelectedSearch(text);
    if (text === null) {
      setSearchValue("");
    } else {
      setSearchValue(text?.value);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [page, postPerPage]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox pt={6} pb={3}>
        <Card style={{ minHeight: "200px" }}>
          <SoftBox p={3} lineHeight={1}>
            <h2
              fontWeight="medium"
              style={{
                marginBottom: "16px",
              }}
            >
              EQUIPMENT TABLE
            </h2>
            <SoftTypography variant="h6" fontWeight="regular">
              <p style={{ textAlign: "justify" }}>
                <b style={{ textDecoration: "underline" }}>Please note:</b> The below is an
                extensive list of equipment from 3<sup>rd</sup> party vendors that represents{" "}
                <b>some</b> of the equipment that you may use in the course of your therapy with the
                Buser Institute. Not all clients need all of this equipment, and some don’t need any
                of it. It is recommended that you{" "}
                <b style={{ textDecoration: "underline" }}>
                  DO NOT order any of this equipment unless it is specifically recommended to you by
                  your Buser Institute therapist.
                </b>{" "}
                More often than not, clients only need a total of two or three basic and relatively
                inexpensive pieces of equipment (i.e. a yoga mat, block and strap) to perform their
                corrective exercises. Only if they cannot otherwise furnish a substitute from items
                they already own do we use this list to assist in procuring the equipment they
                specifically need.
              </p>
            </SoftTypography>
          </SoftBox>
          <SoftBox>
            <ReactSelect
              className="report-search"
              isSearchable={false}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  fontSize: "15px !important",
                  borderRadius: "8px",
                }),
              }}
              placeholder="Search here"
              closeMenuOnSelect={true}
              options={options}
              onChange={(e) => {
                onHandleChange(e);
              }}
              value={selectedSearch}
              isClearable={true}
            />
          </SoftBox>
          <SoftBox style={{ overflowX: "scroll" }}>
            <Table columns={columns} dataSource={equipmentsList} pagination={false} />
          </SoftBox>
          {/* <DataTable
            table={{ ...dataTableData, rows: equipmentsList }}
            canSearch
            entriesPerPage={{
              defaultValue: 10,
              entries: [10, 15, 20, 25],
            }}
          /> */}
        </Card>
      </SoftBox>
      <softBox style={{ marginTop: "1rem" }}>
        <Pagination
          pageSize={postPerPage}
          total={totalCount}
          current={page}
          onChange={(value) => setPage(value)}
          showSizeChanger
          showQuickJumper
          onShowSizeChange={onShowSizeChange}
        />
      </softBox>
      <Footer />
      <DialogBox open={informConsentStatus} />
    </DashboardLayout>
  );
}

export default Equipment;
