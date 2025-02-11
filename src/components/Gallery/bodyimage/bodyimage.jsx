import React, { useState, useEffect } from "react";
import styles from "./bodyimage.module.scss";

const BodyImage = () => {
  const initialImages = [
    "/h1.jpg",
    "/makeup.jpg",
    "/adept.png",
    "/couple.png",
    "/card1.png",
    "/h2.jpg",
    "/Haircolour.jpg",
    "/makeup.jpg",
    "/adept.png",
    "/couple.png",
    "/card1.png",
    "/h1.jpg",
    "/makeup.jpg",
    "/adept.png",
    "/couple.png",
    "/card1.png",
    "/h1.jpg",
    "/makeup.jpg",
    "/adept.png",
    "/couple.png",
    "/card1.png",
    "/bleach.jpg",
    "/Consultation.jpg",
    "/bookingform.jpg",
    "/component1-service.png"
  ];

  const [previewImage, setPreviewImage] = useState(null);
  const [previewImageIndex, setPreviewImageIndex] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [galleryImages, setGalleryImages] = useState(initialImages); // Store both initial and uploaded images
  const [uploadedImages, setUploadedImages] = useState([]); // Store uploaded images separately

  useEffect(() => {
    // Check if the user is already logged in from localStorage
    const storedFormValid = localStorage.getItem("isFormValid");
    if (storedFormValid === "true") {
      setIsFormValid(true); // If valid, user is logged in
    }

    // Automatically log out the user when page is refreshed or navigated away
    const handleBeforeUnload = () => {
      localStorage.removeItem("isFormValid");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Function to set the preview image
  const handleImageClick = (image, index) => {
    setPreviewImage(image);
    setPreviewImageIndex(index);
  };

  // Function to close the preview
  const closePreview = () => {
    setPreviewImage(null);
    setPreviewImageIndex(null);
  };

  // Function to move to the next image in the gallery
  const nextImage = (e) => {
    e.stopPropagation(); // Prevent the overlay click from closing the preview
    if (previewImageIndex !== null) {
      const nextIndex = (previewImageIndex + 1) % galleryImages.length;
      setPreviewImage(galleryImages[nextIndex]);
      setPreviewImageIndex(nextIndex);
    }
  };

  // Function to move to the previous image in the gallery
  const prevImage = (e) => {
    e.stopPropagation(); // Prevent the overlay click from closing the preview
    if (previewImageIndex !== null) {
      const prevIndex =
        previewImageIndex === 0 ? galleryImages.length - 1 : previewImageIndex - 1;
      setPreviewImage(galleryImages[prevIndex]);
      setPreviewImageIndex(prevIndex);
    }
  };

  // Function to handle form submission and validation
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate the form inputs
    if (username === "123" && email === "123@gmail.com" && password === "123") {
      setIsFormValid(true);
      localStorage.setItem("isFormValid", "true"); // Store validation status in localStorage
      setIsFormVisible(false); // Hide form after successful validation
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      const uploadedImageURL = URL.createObjectURL(uploadedFile);
      setUploadedImages([...uploadedImages, uploadedImageURL]); // Add the uploaded image
      setGalleryImages([...galleryImages, uploadedImageURL]); // Add uploaded image to gallery
    }
  };

  // Function to handle image deletion
  const handleImageDelete = (image) => {
    const newGallery = galleryImages.filter((img) => img !== image);
    setGalleryImages(newGallery); // Remove the image from the gallery
    closePreview(); // Close the preview after deletion
  };

  // Function to automatically logout the user
  const handleLogout = () => {
    localStorage.removeItem("isFormValid"); // Remove validation status from localStorage
    setIsFormValid(false); // Reset validation state
  };

  return (
    <div className={styles.galleryContainer}>
      <p className={styles.description}>
        Explore our amazing collection of images in this gallery.
      </p>

      <div className={styles.gallery}>
        {galleryImages.map((image, index) => (
          <div className={styles.item} key={index}>
            <img
              src={image}
              alt={`Gallery Item ${index + 1}`}
              onClick={() => handleImageClick(image, index)} // Clicking the image sets the preview
            />
          </div>
        ))}
      </div>

      {/* Image preview overlay */}
      {previewImage && (
        <div className={styles.previewOverlay} onClick={closePreview}>
          <div className={styles.previewContainer}>
            <button className={`${styles.arrow} ${styles["arrow-left"]}`} onClick={prevImage}>
              &lt;
            </button>

            <img
              src={previewImage}
              alt="Preview"
              className={styles.previewImage}
            />

            {/* Delete icon in the top-right corner of the preview */}
            {isFormValid && (
              <button
                className={styles.deleteIcon}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent closing the preview when deleting
                  handleImageDelete(previewImage); // Delete the previewed image
                }}
              >
                🗑️
              </button>
            )}

            <button className={`${styles.arrow} ${styles["arrow-right"]}`} onClick={nextImage}>
              &gt;
            </button>
          </div>
        </div>
      )}

      {/* Add More Button */}
      <div className={styles.addMoreContainer}>
        <button className={styles.addMoreButton} onClick={() => setIsFormVisible(true)}>
          Add More
        </button>
      </div>

      {/* Overlay Form for username, email, and password */}
      {isFormVisible && !isFormValid && (
        <div className={styles.formOverlay}>
          <div className={styles.form}>
            <h2>Enter Details</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
            </form>
            <button className={styles.closeButton} onClick={() => setIsFormVisible(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Show image upload section after form validation */}
      {isFormValid && (
        <div className={styles.uploadSection}>
          <h2>Upload New Images</h2>
          <input type="file" onChange={handleImageUpload} />
        </div>
      )}

      {/* Automatic logout after refresh or navigation away */}
      {isFormValid && (
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      )}
    </div>
  );
};

export default BodyImage;
