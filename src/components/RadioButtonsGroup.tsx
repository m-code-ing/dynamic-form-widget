import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Answer 1"
        name="radio-buttons-group">
        <FormControlLabel
          value="Answer 1"
          control={<Radio />}
          label="Answer 1"
        />
        <FormControlLabel
          value="Answer 2"
          control={<Radio />}
          label="Answer 2"
        />
      </RadioGroup>
    </FormControl>
  );
}
