import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addAPlaylist, getPlaylists } from '../../store/playlists';
import { useState } from 'react';
import { useHistory } from 'react-router';



const AddPlaylists = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [description, setDescription] = useState('');

    const sessionUser = useSelector(state => state.session.user);
    const [validationErrors, setValidationErrors] = useState([]);
    const userId = sessionUser.id;
    const history = useHistory();

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
            dispatch(addAPlaylist(createdPlaylist));
            // setShowModal(false)
            
        };
  };





  return (
    <>
        
                {validationErrors.length > 0 && (
                <div className="">
                    <p className="error-title"> The following errors were found: </p>
                    <ul className="error-list">
                        {validationErrors.map(error => <li className="error" key={error}>{error}</li>)}
                    </ul>
                </div>
                )}
        <div className="">
            <h1 className="">Add a Playlist</h1>
            <form onSubmit={handleSubmit}>
              <div className="">
                <label className="" >Name:</label>
                        <input
                        placeholder="Enter a name for your playlist"
                        className=""
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required/>
                <label className="" >Image URL:</label>
                        <input
                        placeholder="Add an image"
                        className=""
                        value={imageURL}
                        onChange={(e) => setName(e.target.value)}
                        required/>
                <label className="" >Description:</label>
                        <textarea
                        placeholder="Enter a description for your playlist"
                        className=""
                        value={description}
                        onChange={(e) => setName(e.target.value)}
                        required/>
                      
                <button className="" type="submit">Submit</button>
              </div>
              
            </form>
        </div>

    </>

  );
}

export default AddPlaylists;