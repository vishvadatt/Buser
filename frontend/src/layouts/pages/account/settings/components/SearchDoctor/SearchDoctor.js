import React, { useState, useEffect } from "react";
import { components } from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { getAllDoctors } from "store/selectors/selector.js";
import { default as ReactSelect } from "react-select";
import { popupAction } from "store/actions/actions";

const Option = (props) => {
  const [data, setData] = useState(props);

  useEffect(() => {
    setData(props)
  }, [props])

  return (
    <div>
      <components.Option {...props} >
        {/* { console.log(props)} */}
        <input
          type="checkbox"
          value={data.value}
          checked={data.isSelected}
          onChange={() => null}
        />{" "}
        <label>{data.label}</label>
      </components.Option>
    </div>
  );
};

const SearchDoctor = () => {
  useEffect(() => {
    dispatch({ type: "GET_ALL_DOCTORS_ACTION" });
  }, [])
  const getAllDoctor = useSelector(getAllDoctors);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const userdata = useSelector((state) => state.auth.auth.userdata);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    optionSelected: null
  });



  useEffect(() => {
    setState({
      optionSelected: userdata.selctedDoctors
    });

  }, [userdata.selctedDoctors])
  const [doctor] = useState(getAllDoctor.map(item => Object.assign({ value: item._id, label: item.name })))

  console.log("doctor,,", doctor)


  const handleChange = selected => {
    setState({
      optionSelected: selected
    });

    dispatch(popupAction({ id: UserId, data: { selctedDoctors: selected }, token }));
  };


  return (
    <span
      //   className="d-inline-block"
      data-toggle="popover"
      data-trigger="focus"
      data-content="Please search doctors"
    >
      <ReactSelect
        options={doctor}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        maxMenuHeight={100}
        components={{
          Option
        }}
        onChange={handleChange}
        allowSelectAll={true}
        value={state.optionSelected}
      />
    </span>
  );
}

export default SearchDoctor;

