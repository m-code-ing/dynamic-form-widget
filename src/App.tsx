import { Grid } from "@mui/material";
import React, { useState } from "react";
import CheckboxLabels from "./components/Checkbox";
import DynamicFormInput from "./components/DynamicFormInput";
import RadioButtonsGroup from "./components/RadioButtonsGroup";
import BasicTextFields from "./components/TextField";

function App() {
  const [inputTypeList, setinputTypeList] = useState<string[]>([]);

  const displayInputList = (list: string[]) => {
    setinputTypeList(list);
  };

  console.log(inputTypeList);

  return (
    <Grid container direction="column" alignItems="center" my={3}>
      <Grid item>
        <DynamicFormInput
          displayInputList={displayInputList}></DynamicFormInput>
      </Grid>
      {inputTypeList.map((input, index) => {
        return (
          <Grid item my={2} key={index}>
            {input === "RadioButton" ? (
              <RadioButtonsGroup />
            ) : (
              <CheckboxLabels />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default App;
