import {
  Box,
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export default function TaskCreate(props) {
  const { funckTask } = props;
  const [valueTitle, setValueTitle] = useState("");
  const [valueContent, setValueContent] = useState("");
  const [valueEmployee, setValueEmployee] = useState("")
  const handleChangeTitle = (e) => {
    setValueTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setValueContent(e.target.value);
  };
  const clickButton = () => {
   
    funckTask(valueEmployee,valueTitle, valueContent);
    setValueTitle("");
    setValueContent("");
    setValueEmployee("")
  };
  const handleChangeEmployee = (e)=>{
    setValueEmployee(e.target.value)

  }

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 3,
        }}
      >
        <Stack sx={{ width: 300 }}>
          <FormControl>
          <TextField
              value={valueEmployee}
              onChange={handleChangeEmployee}
              id="outlined-basic"
              label="Görevli"
              variant="outlined"
              placeholder="Görevli"
            />
            <TextField
              value={valueTitle}
              onChange={handleChangeTitle}
              id="outlined-basic"
              label="Başlık"
              variant="outlined"
              placeholder="Başlık"
            />
            <TextField
              value={valueContent}
              onChange={handleChangeContent}
              id="outlined-basic"
              label="İşiniz"
              variant="outlined"
              placeholder="İşinizi Yazınız.."
              multiline
              rows={5}
            />
            <Button onClick={clickButton} variant="contained">
              Ekle
            </Button>
          </FormControl>
        </Stack>
      </Box>
    </Container>
  );
}
