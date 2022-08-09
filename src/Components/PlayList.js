import {v4 as uuid} from 'uuid'
export default function PlayList(props){
    //console.log(props.showPlayList)
    const  showPlayLists=props.showPlayList.map((data) => {
        return (
            <div key={uuid()} className="TitleCard play">
            <h3 >{data}</h3>
            <button onClick={() => props.handleClick(data)} className="deleteButton">Delete</button>
            </div>
        )
    })
    return (
        <div className="PlayLists">
        <h1>Your PlayLists</h1>
        {showPlayLists}
        </div>
    );
}