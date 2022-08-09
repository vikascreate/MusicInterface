import axios from 'axios'
import SearchResults from './Components/SearchResults'
import React from 'react'
import PlayList from './Components/PlayList'
import './Components/styles.css'
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
//import SwipeableDrawer from '@mui/material/SwipeableDrawer';

function App() {
  const [Song,setSong]=React.useState();
  const [name,setName]=React.useState('');
  const [playList,SetPlayList]=React.useState([])
  //const [Open,setOpen]=React.useState(false)
  const options = {
    params: {q: {name}},
    headers: {
      'X-RapidAPI-Key': '157db1e0e8mshf0d04a9508cf41ap147f43jsnc960ee994970',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };
  React.useEffect(()=>{
    console.log("Playsit is",playList)
  },[playList])
  const handleSearch = (event) => {
      event.preventDefault();
      //alert(`The name you entered was: ${name}`)
      //setName(' ')
      // if(localStorage.getItem(name)){
      //   console.log(JSON.parse(localStorage.getItem(name)))
      //   setSong(JSON.parse(localStorage.getItem(name)))
      // }else{
        axios.get('https://deezerdevs-deezer.p.rapidapi.com/search',options)
         .then(res => {
          console.log(res.data.data)
        setSong(res.data.data)
        //localStorage.setItem(name,JSON.stringify(Song))
          // toggleDrawer(true)
        })
          .catch(err => console.log(err))
        //}
    }
  //   function toggleDrawer(newOpen){
  //   setOpen(newOpen);
  // };
    const handleChange=(event) =>{
      setName(event.target.value)
    }
  return (
    <Container maxWidth="m">
    <div className='NavBar'>
    <form onSubmit={handleSearch} div className='form'>
      {/* <label className='label'>Search </label> */}
        {/* <input type="text" name="input" value={name} onChange={handleChange} placeholder={'Enter Artist,Song,Title'}></input> */}
        <TextField fullWidth id="outlined-basic" label="Search" value={name} onChange={handleChange} variant="outlined"  margin="normal"/>
        {/*  */}
        <Button variant="contained" sx={{m:2,marginTop:2,marginBottom:2}} type="submit" >Search</Button>
        </form>
    <div className='Test'>
       {/* {playList && playList.length>0?<PlayList  showPlayList={playList} handleClick={value => SetPlayList(old => old.filter(item => item!==value))}/>:<h3 className='PlayLists'>No PlayLists</h3>} */}
        {Song?<SearchResults CreateList={Song} handleClick={value => SetPlayList(old => [...old,value])}/>:<h3 className='SearchResults'>No Results</h3>}

    </div>
    </div>
    </Container>
  );
}

export default App;
