import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Avatar, IconButton, ListItemAvatar} from "@mui/material";
import { Navigate } from "react-router-dom";
import { List, ListItem, Paper } from "@mui/material";
import { Delete, PlayArrow } from "@mui/icons-material";
export default function PlayList(props){
    const [value, setValue] = React.useState(1);
    const [traveltoSeacrh,settraveltoSeacrh]=React.useState(false)
    const [playlist,SetPlayList]=React.useState(JSON.parse(localStorage.getItem('playlists')))
    function s(id){
      localStorage.setItem('playlists',JSON.stringify(playlist.filter(val => val.id!==id)))
      SetPlayList(JSON.parse(localStorage.getItem('playlists')))
    }
    const  showPlayLists=playlist.map((data) => {
        return (
          <ListItem key={data.id} secondaryAction={
            <div>
              <IconButton color="success">
                <PlayArrow/>
              </IconButton>
              <IconButton color='error' onClick={()=>s(data.id)}>
                <Delete/>
              </IconButton>
            </div>
          }>
            <ListItemAvatar>
              <Avatar
              alt={`Avatar n°${data.album.id + 1}`}
              src={data.artist.picture_medium}
            />
            </ListItemAvatar>
            <div>
            <h3 >{data.album.title}</h3>
            </div>
            </ListItem>
        )
    })
    function GotoSearch(){
        settraveltoSeacrh(true)

    }
    return (
        <div className="PlayLists">
            { traveltoSeacrh && <Navigate to='/'/>}
        <h1>Your PlayLists</h1>
        <List>
        {showPlayLists}
        </List>
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0,}}
        elevation={6}>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{width:'100%'}}
      >
        <BottomNavigationAction label="Search"   sx={{maxWidth:'100%'}} onClick={GotoSearch} />
        <BottomNavigationAction label="PlayList"   sx={{maxWidth:'100%'}} />
        
      </BottomNavigation> 
      </Paper>
        </div>
    );
}