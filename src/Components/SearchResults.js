import React from "react"
import {v4 as uuid}from "uuid"
import Button from '@mui/material/Button'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function SearchResults(props){
     const SearchElements=props.CreateList.map((data) => {
        //const dataTitle=data.album.title;
        return (
            // <div key={uuid()} className="TitleCard ser">
            // <h3 className='items'>{data.title}</h3>
            // {/* <button onClick={() => props.handleClick(data.title)} className="addButton">Add</button> */}
            // <Button variant="contained" sx={{m:2,marginTop:2,marginBottom:2}}  onClick={() => props.handleClick(data.title)}>Add</Button>
            // </div>
            <ListItem
            key={data.id}
            secondaryAction={
            //   <Checkbox
            //     edge="end"
            //     onChange={handleToggle(value)}
            //     checked={checked.indexOf(value) !== -1}
            //     inputProps={{ 'aria-labelledby': labelId }}
            //   />
            <Button variant="contained" 
            sx={{m:2,marginTop:2,marginBottom:2}}  
            onClick={() => props.handleClick(data.title)}>Add</Button>
            // <Button variant="contained" 
            // sx={{m:2,marginTop:2,marginBottom:2}}  
            // onClick={() => data.artist.preview.play()}>Play</Button>
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
    //    <div className="SearchResults">
    <List dense sx={{ width: '100%',  bgcolor: 'background.paper' }}>
       <h1>Search Results:</h1>
        {SearchElements}
    </List>
    );
}