import { useState } from 'react';
import axios from 'axios';
import '../styles/Submit.css';

const Submit = () => {
  /*
  //  file: File: Stores file after uploaded image
  //  imageUrl: string: Stores local url for image once uploaded
  //  status: string: Controls status paragraph content and rendering
  */
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");

  const API_PATH = "notarealpath";

  // Handles drop of file on the input
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setStatus("");
    setFile(droppedFiles[0]);
    displayImage(droppedFiles[0]);
  };

  // Handles input through native OS file system
  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    setStatus("");
    setFile(selectedFile);
    displayImage(selectedFile);
  };

  // Handles displaying image in the input
  const displayImage = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      // Loads the image
      reader.readAsDataURL(file);
    }
  };

  // Handles submitting the form data
  const submitForm = async () => {
    if (!file) {
      setStatus("Please submit an image.");
      return;
    }

    const fileNameLength = file.name.lastIndexOf(".");

    if (fileNameLength > 50) {
      setStatus("File name must be under 50 characters.");
      clearFile();
      return;
    }

    try {
      await axios.put(API_PATH + file.name, file, {
        headers: {
          "Content-Type": file.type,
        },
      });
      
      setStatus("Image uploaded successfully!");
    } catch (err) {
      setStatus("Error submitting data. Please try again.");
    }

    // Reset the form after submission
    clearFile();
  };

  // Reset state for the file
  const clearFile = () => {
    setFile(null);
    setImageUrl("");
  }

  return (
    <div className="submit-container">
      <div className="file-upload-container" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
        <input
          type="file"
          id="file-input"
          multiple={false}
          accept=".jpg, .jpeg, .png"
          onChange={handleFileInputChange}
          className="file-input"
          required
        />
        <label htmlFor="file-input" className="file-label">
          {imageUrl ? (
            <img src={imageUrl} alt="Uploaded" className="uploaded-image" />
          ) : (
            'Drag & Drop a JPG or PNG file here or click to select.'
          )}
        </label>
        <button id="submit-btn" onClick={submitForm} className="submit-btn">
          Submit
        </button>
        {status && <p className={`form-status ${status.includes('successfully') ? 'success' : 'error'}`}>{status}</p>}
      </div>
    </div>
  );
}

export default Submit;