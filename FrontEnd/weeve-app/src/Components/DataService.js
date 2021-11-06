import borders from '@mui/system'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import React, { useEffect, useState } from "react"
import NearMeIcon from '@mui/icons-material/NearMe'
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import { Create, Delete, Pageview} from "@material-ui/icons"
import { makeStyles, Container, Grid, IconButton, Typography, FormControlLabel } from "@material-ui/core"

const userStyle = makeStyles({
  headerTitleStyle: {
    paddingLeft: 100,
    color: "#4A4A4A",
  },
  subHeaderSpacing: {
    paddingLeft: 100,
    paddingTop: 10,
    color: "#4A4A4A",
    opacity: 1,
    fontSize: 14,
    fontFamily: "Roboto",
  },
  iconStyle: {
    paddingLeft: 350,
  },
  tableStyle: {
    paddingLeft: 50,
    paddingRight: 40,
    height: 700,
    width: "100%",
    border: "none!important",
    rowHight: 5,
  },
  columnHeaderStyle:{
      border: "#4A4A4A",
      border:"rounded-circle"
  }
});

// icon
const MatEdit = ({ index }) => {
  return (
    <FormControlLabel
      control={
          <div>
        <IconButton
          onClick={() => alert("You Clicked on Deployment Icon")}
        >
        <NearMeIcon />
        </IconButton>
        
        <IconButton
          onClick={() => alert("You Clicked on Edit Icon")}
        >
        <Create style={{ color: "#4A4A4A" }} />
        </IconButton>

        <IconButton
          onClick={() => alert("You Clicked on Delete Icon")}
        >
         <Delete/>
        </IconButton>
        
        <IconButton
          onClick={() => alert("You Clicked on Menu Icon")}
        >
        <MoreVertIcon style={{ color: "#4A4A4A",paddingRight:0 }} />
        </IconButton>
        </div>
      }
    />
  );
};
export default function DataService() {
  const classes = userStyle();
  const columns : GridColDef[] = [
    { field: "serviceName", headerName: "NAME", width: 300, headerAlign: 'center'},
    { field: "created", headerName: "CREATED", width: 150, headerAlign: 'center'},
    { field: "modified", headerName: "MODIFIED", width: 150,headerAlign: 'center'},
    { field: "createdBy", headerName: "CREATED BY", width: 150,headerAlign: 'center'},
    { field: "", headerName: "", width: 140 },
      {
      field: "actions",
      headerName: "",
      sortable: false,
      align:"right",
      width:200,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <MatEdit index={params.row.id} />
          </div>
        );
      },
    },
  ];

  const [state, setState] = useState([]);
  const [form, setForm] = useState({
    name: "",
    user: "",
  });

  useEffect(() => {
    fetch("http://localhost:9000/data")
      .then((response) => response.json())
      .then((data) =>
        data === undefined || data === null ? setState([]) : setState(data)
      );
  }, []);

  const addHandler = async () => {
    const record = {
      serviceName: form.name,
      createdBy: form.user,
    };

    const response = await fetch("http://localhost:9000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(record), // body data type must match "Content-Type" header
    });
    console.log(response);
  };

  return (
    <Container>
      <div>
        <Typography className={classes.headerTitleStyle}>
        Your Data Services
        </Typography> 
      </div>
      <Grid container direction="row">
        <Grid item>
          <Typography className={classes.subHeaderSpacing}>
            Click on the rocket to deploy the data service you would like to
            send down to your weeve Edge-Nodes
          </Typography>
        </Grid>
        <Grid className={classes.iconStyle}>
          <IconButton onClick={() => alert("You Clicked on Search Icon")}>
            <Pageview />
          </IconButton>
          <IconButton onClick={() => alert("You Clicked on Filter Icon")}>
            <FilterAltIcon />
          </IconButton>
        </Grid>
      </Grid>
      <div className={classes.tableStyle}>
        <DataGrid
          className={classes.tableStyle}
          rows={state}
          columns={columns}
        />
      </div>
    </Container>
  );
}
