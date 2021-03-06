import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addAPlaylist } from "../../store/playlists";
import { useState } from "react";
import { useHistory } from "react-router";
import "./playlists.css";

const AddPlaylists = ({ openAddForm }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const sessionUser = useSelector((state) => state.session.user);
  const [validationErrors, setValidationErrors] = useState([]);
  const userId = sessionUser.id;
  const history = useHistory();

  const validate = () => {
    const validationErrors = [];
    if (!name) validationErrors.push("Please enter a playlist name");
    if (name.length > 15)
      validationErrors.push("Playlist name must be less than 15 characters.");
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdPlaylist = {
      userId,
      name,
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/3/3c/No-album-art.png",
      description,
    };

    const errors = validate();

    if (errors.length > 0) {
      setValidationErrors(errors);
    } else {
      setValidationErrors([]);
      const added = await dispatch(addAPlaylist(createdPlaylist));
      if (added) {
        openAddForm(false);
        history.push(`/playlists/${added.id}`);
      }
    }
  };

  return (
    <>
      {validationErrors.length > 0 && (
        <div className="errors">
          <p className="error-title"> The following errors were found: </p>
          <ul className="error-list">
            {validationErrors.map((error) => (
              <li className="error" key={error}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="add-form-container">
        <form onSubmit={handleSubmit}>
          <div className="add-form-con">
            <label className="form-label">Name:</label>
            <input
              placeholder="Playlist name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="form-label">Description:</label>
            <textarea
              placeholder="Playlist description"
              className="form-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <button className="form-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPlaylists;
