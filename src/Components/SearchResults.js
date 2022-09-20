import React from "react"
import PauseIcon from '@mui/icons-material/Pause';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import LinearProgress from '@mui/material/LinearProgress';
import Avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';
export default function SearchResults(props){
  const [aud,setAud]=React.useState();
  const [l,setL]=React.useState();
  const [curId,setCurId]=React.useState()
  const [play,setPlay]=React.useState()
  
  
     const SearchElements=props.CreateList.map((data) => {
      function toggle(link){
        if(aud){
          if(l===link)
            {
              if(play){
              aud.pause()
              setPlay(false)
            }else{
              aud.play()
              setPlay(true)
            }
              return}
              else{
                aud.pause()
                setPlay(false)
                setL(link)
                let audio=new Audio(link)
        setAud(audio)
        setCurId(data.id)
        console.log(aud)
        audio.play()
        setPlay(true)
        return
              }
        }
        setL(link)
        let audio=new Audio(link)
        setAud(audio)
        setCurId(data.id)
        console.log(aud)
        audio.play()
        setPlay(true)
        }
        return (
            <ListItem 
            key={data.id}
            secondaryAction={
            <div>
            <IconButton color="success" aria-label="add an alarm"
            sx={{m:1,marginTop:2,marginBottom:2}} 
            onClick={() => toggle(data.preview)}>
              {curId===data.id&&play?<PauseIcon/>:<PlayArrowIcon/>}
              </IconButton>
            <IconButton color="primary" aria-label="add an alarm" 
             onClick={() => props.handleClick(data)}>
              <AddIcon/>
             </IconButton>
           </div>
           
            }
           
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${data.id + 1}`}
                  src={data.artist.picture_medium}
                />
              </ListItemAvatar>
              <ListItemText id={data.id} primary={`${data.album.title}`} />
            </ListItemButton>
          </ListItem>
        )
    })
    return(
      <div className="abc">
      <h1>Search Results:</h1>
    <List dense sx={{ width: '100%',  bgcolor: 'background.paper',height:'4000'}}>
        {SearchElements}
    </List>
    </div>
    );
}