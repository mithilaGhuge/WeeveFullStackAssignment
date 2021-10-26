import React, { useEffect, useState } from "react";
import { makeStyles, Container, Grid, IconButton } from "@material-ui/core";
import { Pageview } from "@material-ui/icons";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { DataGrid,GridColDef } from "@mui/x-data-grid";
import { FormControlLabel } from "@material-ui/core";
import { Create,Delete} from "@material-ui/icons";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NearMeIcon from '@mui/icons-material/NearMe';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { borders } from '@mui/system';

const userStyle = makeStyles({
  headerTitleStyle: {
    paddingLeft: 100,
    color: "#4A4A4A",
  },
  subHeaderSpacing: {
    paddingLeft: 100,
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
  const handleEditClick = () => {
    // Alert
    alert('hi')
  };
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
    const newRecord = await response.json(); // parses JSON response into native JavaScript objects
    setState((prevState) => [...prevState, newRecord]);
  };

  return (
    <Container>
      <div>
        <h3 className={classes.headerTitleStyle}>Your Data Services</h3>
      </div>
      <Grid container direction="row">
        <Grid item>
          <p className={classes.subHeaderSpacing}>
            Click on the rocket to deploy the data service you would like to
            send down to your weeve Edge-Nodes
          </p>
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
