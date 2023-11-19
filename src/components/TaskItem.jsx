import { Alert, Box, Button, Snackbar, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import TaskIcon from "@mui/icons-material/Task";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
export default function TaskItem(props) {
  const [stateUpdate, setStateUpdate] = useState(false);
  const { id, employee, title, content, taskDelete, taskUpdate } = props;
  const [valueTitle, setValueTitle] = useState(title);
  const [valueContent, setValueContent] = useState(content);
  const [valueEmployee, setValueEmployee] = useState(employee);
  const [stateOpen, setStateOpen] = useState(false)
  const [stateComplatedıcon, setStateComplatedıcon] = useState(false)
  const clickDelete = () => {
    taskDelete(id);
  };
  const clickUpdate = () => {
    setStateUpdate(true);
  };
  const handleChangeTitle = (e) => {
    setValueTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setValueContent(e.target.value);
  };
  const handleChangeEmployee = (e) => {
    setValueEmployee(e.target.value);
  };
  const clickSave = () => {
    taskUpdate(id, valueTitle, valueContent, valueEmployee);
    setStateUpdate(false);
  };
  const clickComplated = () => {
    setStateOpen(true)
    setStateComplatedıcon(true)
  };
  const handleCloseSnackBar = ()=>{
    setStateOpen(false)
  }
  
  return (
    <Box
      sx={{
        width: 400,
        border: "solid",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        margin: 1,
      }}
    >
      {stateUpdate ? (
        <Stack sx={{ alignItems: "center" }}>
          <TextField
            sx={{ width: 200, margin: 2 }}
            value={valueTitle}
            onChange={handleChangeTitle}
            id="outlined-basic"
            label="Başlık"
            variant="outlined"
            placeholder="Başlık"
          />
          <TextField
            sx={{ width: 300, margin: 1 }}
            value={valueContent}
            onChange={handleChangeContent}
            id="outlined-basic"
            label="İşiniz"
            variant="outlined"
            placeholder="İşinizi Yazınız.."
            multiline
            rows={5}
          />
          <TextField
            value={valueEmployee}
            onChange={handleChangeEmployee}
            id="outlined-basic"
            label="Görevli"
            variant="outlined"
            placeholder="Görevli"
          />
          <Button
            onClick={clickSave}
            sx={{ margin: 1 }}
            variant="contained"
            color="success"
          >
            <BeenhereIcon />
            Save
          </Button>
        </Stack>
      ) : (
        <Stack sx={{ alignItems: "center" }} spacing={2}>
          <Typography sx={{ color: "red" }} variant="h5">
            {title}
          </Typography>
          <Typography variant="body">{content}</Typography>
          <Typography sx={{ color: "darkblue" }} variant="body">
            Görevli:{employee}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button
              sx={{ margin: 1 }}
              onClick={clickDelete}
              variant="contained"
              color="error"
            >
              <DeleteIcon />
              Sil
            </Button>
            <Button
              onClick={clickUpdate}
              variant="contained"
              href="#contained-buttons"
              sx={{ margin: 1 }}
            >
              <UpdateIcon />
              Güncelle
            </Button>
            <Button
              onClick={clickComplated}
              variant="contained"
              color={stateComplatedıcon ? "success" : "error"}
              href="#contained-buttons"
              sx={{ margin: 1 }}
            >
              {stateComplatedıcon ? <TaskIcon/> : <HourglassEmptyIcon /> }
              {stateComplatedıcon ? "Tamamlandı" : "Tamamla"}
            </Button>
            <Snackbar open={stateOpen} autoHideDuration={2000} onClose={handleCloseSnackBar} 
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
              <Alert
                onClose={handleCloseSnackBar}
                severity="success"
                sx={{ width: "100%" }}
              >
                Görev Tamamlandı Olarak Kaydedildi
              </Alert>
            </Snackbar>
          </Box>
        </Stack>
      )}
    </Box>
  );
}
