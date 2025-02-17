import React, { useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify";

const Media = () => {
  const [image, setImage] = useState(null); // Initialize state to store image file
  const [error, setError] = useState(""); // State for displaying error messages

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      setError("Please select an image before submitting.");
      return;
    }

    // Validate file type (only allow images)
    const fileTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!fileTypes.includes(image.type)) {
      setError("Please upload a valid image (JPEG, PNG).");
      return;
    }

    // Reset error message before submission
    setError("");

    // Prepare form data to send to backend
    const formData = new FormData();
    formData.append('image', image);

    try {
      const { data } = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/admin/upload-media', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',  // Ensure proper content-type for file uploads
        },
      });

      // Handle server response
      if (data.success) {
        console.log(data.imageUrl)
        alert('Uploaded successfully')
          // Clear image state after successful upload
      } else {
        console.log(data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error during upload:", error);
      toast.error(error.message || "An error occurred during the upload");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="w-full max-w-md mx-auto p-4">
      <div className="shadow-md shadow-black w-full p-8 rounded-md">
        <h2 className="text-xl mb-4">Upload Media</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}

        <div className="my-4">
          <input
            type="file"
            id="image"
            accept="image/jpeg, image/png"
            onChange={(e) => setImage(e.target.files[0])}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <button className="bg-blue-500 text-white rounded px-4 py-2 w-full">Upload</button>
      </div>
    </form>
  );
};

export default Media;
