import { Grid } from "@mui/material";
import { useState } from "react";
import CustomizedMenus from "./Dropdown";

type DynamicFormInputProps = {
  displayInputList: (inputList: string[]) => void;
};

const DynamicFormInput = (props: DynamicFormInputProps) => {
  const [inputTypeList, setinputTypeList] = useState<string[]>([]);

  const addInputType = (inputType: string) => {
    setinputTypeList([...inputTypeList, inputType]);
    props.displayInputList(inputTypeList);
  };

  return (
    <Grid>
      <CustomizedMenus addInputType={addInputType}></CustomizedMenus>
    </Grid>
  );
};

export default DynamicFormInput;
