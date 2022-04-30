import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { StyledTextField } from "./StyledComponents";
import {
  remoteUpdateUser,
  fetchUserByEmail,
} from "../../../app/Reducers/userSlice";
export const EditProfile = () => {
  const user = useAppSelector((state) => state.user.data);
  const [userInfo, setUserInfo] = useState({ ...user });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(remoteUpdateUser(userInfo))
      .then(() => dispatch(fetchUserByEmail(userInfo.email)))
      .then(() => {
        navigate(`/Profile/${user._id}`);
      })
      .catch((err) => {
        console.log(err);
        alert("Algo salió mal, intente de nuevo");
      });
  };
  return (
    <Container sx={{ paddingBottom: "16px", paddingTop: "20px" }}>
      <Paper sx={{ paddingBottom: "16px" }}>
        <Box
          sx={{
            padding: "2rem",
          }}
        >
          <Typography variant="h4" color="primary" gutterBottom>
            Edita tu información personal
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
            <StyledTextField
              variant="filled"
              label="Nombre"
              name="first_name"
              value={userInfo.first_name}
              onChange={(event) => handleInputChange(event)}
              error={userInfo.first_name === ""}
              helperText={userInfo.first_name === "" ? "Campo obligatorio" : ""}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
            <StyledTextField
              sx={{ margin: "0px 16px 0px 16px", width: "100%" }}
              variant="filled"
              label="Apellido"
              name="last_name"
              value={userInfo.last_name}
              onChange={(event) => handleInputChange(event)}
              error={userInfo.last_name === ""}
              helperText={userInfo.last_name === "" ? "Campo obligatorio" : ""}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
            <StyledTextField
              variant="filled"
              label="Nombre de Usuario"
              name="user_name"
              value={userInfo.user_name}
              onChange={(event) => handleInputChange(event)}
              error={userInfo.user_name === ""}
              helperText={userInfo.user_name === "" ? "Campo obligatorio" : ""}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
            <StyledTextField
              variant="filled"
              label="País"
              name="country"
              value={userInfo.country}
              onChange={(event) => handleInputChange(event)}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
            <StyledTextField
              variant="filled"
              label="Ciudad"
              name="city"
              value={userInfo.city}
              onChange={(event) => handleInputChange(event)}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
            <StyledTextField
              variant="filled"
              label="Foto de Perfil"
              name="profile_picture"
              value={userInfo.profile_picture}
              onChange={(event) => handleInputChange(event)}
            ></StyledTextField>
          </Grid>

          <Grid item xs={11} sm={12} sx={{ paddingRight: "16px" }}>
            <StyledTextField
              variant="filled"
              multiline
              label="Biografía"
              name="biography"
              value={userInfo.biography}
              onChange={(event) => handleInputChange(event)}
              minRows={3}
              maxRows={5}
            ></StyledTextField>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              paddingRight: "16px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              color="primary"
              variant="contained"
              onClick={handleSave}
              disabled={
                userInfo.first_name === "" ||
                userInfo.last_name === "" ||
                userInfo.user_name === ""
              }
            >
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
