import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { editAPlaylist, getAPlaylist, getPlaylists } from '../../store/playlists';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getSongs } from '../../store/songs';



const EditPlaylists = ({editFormOpen}) => {
    const dispatch = useDispatch()
    const {id} = useParams();
    const playlists = useSelector(state => state.playlists)
    const eachPlaylist = []
    Object.values(playlists).map((playlist) => (eachPlaylist.push(playlist)))
    const playlist = eachPlaylist.find(onePlaylist => +id === onePlaylist.id)


    const [name, setName] = useState(playlist.name);
    const [imageURL, setImageURL] = useState(playlist.imageURL);
    const [description, setDescription] = useState(playlist.description);

    const sessionUser = useSelector(state => state.session.user);
    const [validationErrors, setValidationErrors] = useState([]);
    const userId = sessionUser.id;
    const history = useHistory();

    const updateName = (e) => setName(e.target.value);
    const updateImageURL = (e) => setImageURL(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value) 
    
    useEffect(() => {
        dispatch(getPlaylists())
    }, [dispatch]);

    const validate = () => {
        const validationErrors = [];
        if(!name) validationErrors.push('Please enter a playlist name');
        return validationErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createdPlaylist = {
          userId,
          name,
          imageURL,
          description
        };

    const errors = validate();

        if (errors.length > 0) {
            setValidationErrors(errors);
        } else {
            setValidationErrors([]);
            const edited = await dispatch(editAPlaylist(createdPlaylist, id));
            if(edited) {
              editFormOpen(false)
              history.push(`/playlists/${edited.id}`)

            }
            
        };
  };





  return (
    <>
        
                {validationErrors.length > 0 && (
                <div className="errors">
                    <p className="error-title"> The following errors were found: </p>
                    <ul className="error-list">
                        {validationErrors.map(error => <li className="error" key={error}>{error}</li>)}
                    </ul>
                </div>
                )}
        <div className="add-form-container">
            <form onSubmit={handleSubmit}>
              <div className="add-form-con">
                <label className="edit-form-label" >Name:</label>
                        <input
                        placeholder="Enter a name for your playlist"
                        className="edit-form-input"
                        value={name}
                        onChange={updateName}
                        required/>
                <label className="edit-form-label" >Image URL:</label>
                        <input
                        placeholder="Add an image"
                        className="edit-form-input"
                        value={imageURL}
                        onChange={updateImageURL}
                        required/>
                <label className="edit-form-label" >Description:</label>
                        <textarea
                        placeholder="Enter a description for your playlist"
                        className="edit-form-input"
                        value={description}
                        onChange={updateDescription}
                        required/>
                      
                <button className="edit-form-button" type="submit">Submit</button>
              </div>
              
            </form>
        </div>

    </>

  );
}

export default EditPlaylists;