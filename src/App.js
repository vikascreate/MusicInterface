import axios from 'axios'
import SearchResults from './Components/SearchResults'
import React from 'react'
import PlayList from './Components/PlayList'
import {BrowserRouter,Link,Navigate,Route,Routes} from 'react-router-dom'
import './Components/styles.css'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress';
import { Paper } from '@mui/material'


function App() {
  const [Song,setSong]=React.useState();
  const [name,setName]=React.useState('eminem');
  const [playList,SetPlayList]=React.useState([])
  const [traveltoPlaylist,settraveltoPlaylist]=React.useState(false)
  const [loading,setLoading]=React.useState(false)
  const [value, setValue] = React.useState(0);

  const options = {
    params: {q: {name}},
    headers: {
      'X-RapidAPI-Key': '157db1e0e8mshf0d04a9508cf41ap147f43jsnc960ee994970',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };
  React.useEffect(()=>{
    setLoading(true)
      if(!Song){
        async function f(){
          const data=await axios.get('https://deezerdevs-deezer.p.rapidapi.com/search',options)
          setLoading(false)
          setSong(data.data.data)
        }
        f()
  }
},[])
  React.useEffect(()=>{
    localStorage.setItem('playlists',JSON.stringify(Array.from(new Set(playList)))   )
  //  console.log(playList)
  },[playList])
  const handleSearch = (event) => {
    setLoading(true)
      event.preventDefault();
      async function f(){
        const data=await axios.get('https://deezerdevs-deezer.p.rapidapi.com/search',options)
        setLoading(false)
        setSong(data.data.data)
      }
      f()
    }

    const handleChange=(event) =>{
      setName(event.target.value)
    }
    function GotoPlaylist(){
      settraveltoPlaylist(true)
    }
  return (
    <Container maxWidth="m">
      {traveltoPlaylist && <Navigate to="/playlists"/>}
    <div className='NavBar'>
    {loading&&<LinearProgress />}
    <form onSubmit={handleSearch} div className='form'>
        <TextField fullWidth id="outlined-basic" label="Search" value={name} onChange={handleChange} variant="outlined"  margin="normal"/>
       <Button variant="contained" sx={{m:2,marginTop:2,marginRight:2}} type="submit" >Search</Button>
        </form>
    <div className='Test'>
        {Song?<SearchResults CreateList={Song} handleClick={value => SetPlayList(old => [...old,value])}/>:<h3 className='SearchResults'>No Results</h3>}
    </div>
    <Paper sx={{position:'fixed',bottom:0,left:0,right:0}} elevation={6}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{width:'100%'}}
      >
        <BottomNavigationAction label="Search"   sx={{maxWidth:'100%'}}  />
        <BottomNavigationAction label="PlayList"   sx={{maxWidth:'100%'}} onClick={GotoPlaylist}/>
        
      </BottomNavigation> 
    </Paper>
    </div>
    </Container>
  );
}

export default App;
