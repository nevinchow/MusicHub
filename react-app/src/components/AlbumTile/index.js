

function AlbumTile({album}) {
    
    return (
        <>
        <p>{`${album.title}`}</p>
        <img src={`${album.imageURL}`}></img>
        <p>{`${album.year}`}</p>

        </>

    )
}


export default AlbumTile