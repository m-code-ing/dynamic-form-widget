import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { Grid } from "@mui/material";

type BasicSelectProps = {
  addInputType: (inputType: string) => void;
};

export default function BasicSelect(props: BasicSelectProps) {
  const [inputType, setInputType] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setInputType(event.target.value as string);
  };
  const addInputType = () => {
    if (inputType === "") return;
    props.addInputType(inputType);
    setInputType("");
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Input Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputType}
          label="Age"
          onChange={handleChange}>
          <MenuItem value="RadioButton">
            <RadioButtonCheckedIcon />
            Radio Button
          </MenuItem>
          <MenuItem value="CheckBox">
            <CheckBoxIcon />
            CheckBox
          </MenuItem>
        </Select>
      </FormControl>
      <Grid my={2}>
        <Button variant="outlined" onClick={addInputType}>
          Add
        </Button>
      </Grid>
    </Box>
  );
}
