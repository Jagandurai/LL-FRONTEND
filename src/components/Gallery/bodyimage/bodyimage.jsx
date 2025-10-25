import React, { useState, useEffect } from "react";
import styles from "./bodyimage.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";

// ✅ API base URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_URL + "/api/gallery";

const BodyImage = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [previewImageIndex, setPreviewImageIndex] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true); // ✅ skeleton loader

  const navigate = useNavigate();

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    const storedEmail = localStorage.getItem("userEmail");

    if (storedLogin === "true" && storedEmail) {
      setIsLoggedIn(true);
      setUserEmail(storedEmail);
      checkIfAdmin(storedEmail);
    }
    fetchImages();
  }, []);

  // ✅ Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!previewImage) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closePreview();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewImage, previewImageIndex, filteredImages]);

  // ✅ Handle Android back button
  useEffect(() => {
    const handlePopState = (e) => {
      if (previewImage) {
        e.preventDefault();
        closePreview();
        window.history.pushState(null, "", window.location.href);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [previewImage]);

  // ✅ Fetch images with loading state
  const fetchImages = async (type = "") => {
    try {
      setIsLoading(true); // start skeleton
      const res = await axios.get(API_BASE_URL, { params: type ? { type } : {} });
      setGalleryImages(res.data);
      setFilteredImages(res.data);
    } catch (err) {
      console.error("Error fetching images:", err);
      toast.error("Failed to load gallery");
    } finally {
      setIsLoading(false); // end skeleton
    }
  };

  const checkIfAdmin = async (email) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/check-admin`, { email });
      if (res.data.success) {
        setIsAdmin(true);
      } else {
        handleLogout(false);
        toast.error("You are not an admin");
      }
    } catch (err) {
      console.error("Admin check error:", err);
    }
  };

  const compressImage = (file, quality = 0.9) => {
    return new Promise((resolve) => {
      if (file.size <= 9 * 1024 * 1024) {
        resolve(file);
        return;
      }
      toast.info("⚡ Compressing image...");
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            (blob) => {
              resolve(new File([blob], file.name, { type: file.type }));
            },
            file.type,
            quality
          );
        };
      };
    });
  };

  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

  const handleUploadClick = async () => {
    if (!selectedFile) return toast.warn("Please choose a file first");
    if (!selectedType) return toast.warn("Please select a type (Makeup / Hairstyle)");

    let fileToUpload = selectedFile;
    if (selectedFile.size > 9 * 1024 * 1024) fileToUpload = await compressImage(selectedFile, 0.9);

    const formData = new FormData();
    formData.append("image", fileToUpload);
    formData.append("type", selectedType);

    const uploadToast = toast.loading("⏳ Uploading...");

    try {
      await axios.post(API_BASE_URL, formData, {
        headers: { "Content-Type": "multipart/form-data", "x-user-email": userEmail },
      });
      await fetchImages();
      setSelectedFile(null);
      setSelectedType("");
      toast.update(uploadToast, { render: "Image uploaded successfully!", type: "success", isLoading: false, autoClose: 2000 });
    } catch (err) {
      console.error("Upload error:", err);
      toast.update(uploadToast, { render: "Failed to upload image", type: "error", isLoading: false, autoClose: 2000 });
    }
  };

  const handleImageDelete = async (image) => {
    try {
      await axios.delete(`${API_BASE_URL}/${image.id}`, { headers: { "x-user-email": userEmail } });
      const newImages = galleryImages.filter((img) => img.id !== image.id);
      setGalleryImages(newImages);
      setFilteredImages(newImages);
      closePreview();
      toast.success("🗑️ Image deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Failed to delete image");
    }
  };

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const email = decoded.email;
      setIsLoggedIn(true);
      setUserEmail(email);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);

      const res = await axios.post(`${API_BASE_URL}/check-admin`, { email });
      if (res.data.success) {
        setIsAdmin(true);
        toast.success(`Welcome: ${email}`);
      } else {
        handleLogout(false);
        toast.error("You are not an admin");
      }
    } catch (err) {
      console.error("JWT/Login error:", err);
      toast.error("Failed to process login.");
    }
  };

  const handleLogout = (showToast = true) => {
    googleLogout();
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
    setIsAdmin(false);
    if (showToast) toast.info("Logged out successfully");
  };

  const handleImageClick = (image, index) => {
    setPreviewImage(image.image_url || image);
    setPreviewImageIndex(index);
    window.history.pushState(null, "", window.location.href);
  };

  const closePreview = () => {
    setPreviewImage(null);
    setPreviewImageIndex(null);
  };

  const nextImage = () => {
    if (previewImageIndex !== null) {
      const nextIndex = (previewImageIndex + 1) % filteredImages.length;
      setPreviewImage(filteredImages[nextIndex].image_url);
      setPreviewImageIndex(nextIndex);
    }
  };

  const prevImage = () => {
    if (previewImageIndex !== null) {
      const prevIndex = previewImageIndex === 0 ? filteredImages.length - 1 : previewImageIndex - 1;
      setPreviewImage(filteredImages[prevIndex].image_url);
      setPreviewImageIndex(prevIndex);
    }
  };

  const handleBookNowClick = () => navigate("/service");

  const filterByType = (type) => {
    setActiveFilter(type);
    setFilteredImages(type === "all" ? galleryImages : galleryImages.filter((img) => img.type === type));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className={styles.galleryContainer}>
      <p className={styles.description}>Explore our amazing Makeup & Hairstyle collections.</p>

      <button onClick={handleBookNowClick} className={styles.bookButton}>View Our Service</button>

      {!isLoggedIn && (
        <div style={{ marginTop: "20px" }}>
          <GoogleLogin onSuccess={handleLoginSuccess} onError={() => toast.error("Google Login Failed")} />
        </div>
      )}

      {isLoggedIn && isAdmin && (
        <div className={styles.actions}>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <div className={styles.checkboxGroup}>
            <label className={selectedType === "makeup" ? styles.active : ""}>
              <input type="radio" name="imageType" value="makeup" checked={selectedType === "makeup"} onChange={(e) => setSelectedType(e.target.value)} /> Makeup
            </label>
            <label className={selectedType === "hairstyle" ? styles.active : ""}>
              <input type="radio" name="imageType" value="hairstyle" checked={selectedType === "hairstyle"} onChange={(e) => setSelectedType(e.target.value)} /> Hairstyle
            </label>
          </div>
          <button onClick={handleUploadClick} disabled={!selectedFile || !selectedType} className={styles.uploadButton}>Upload Files</button>
          <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
        </div>
      )}

      <div className={styles.filterButtons}>
        <button onClick={() => filterByType("all")} className={activeFilter === "all" ? styles.active : ""}>All</button>
        <button onClick={() => filterByType("makeup")} className={activeFilter === "makeup" ? styles.active : ""}>Makeup</button>
        <button onClick={() => filterByType("hairstyle")} className={activeFilter === "hairstyle" ? styles.active : ""}>Hairstyle</button>
      </div>

      <div className={styles.gallery}>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => <div key={index} className={styles.skeletonItem}></div>)
          : filteredImages.length > 0
          ? filteredImages.map((image, index) => (
              <div className={styles.item} key={image.id || index}>
                <img src={image.image_url || image} alt={`Gallery Item ${index + 1}`} onClick={() => handleImageClick(image, index)} />
              </div>
            ))
          : <p className={styles.noImages}>No images found.</p>
        }
      </div>

      {previewImage && (
        <div className={styles.previewOverlay}>
          <div className={styles.previewTopBar}>
            <button className={styles.iconButton} onClick={closePreview}><X size={24} /></button>
          </div>

          <div className={styles.previewContainer} {...swipeHandlers}>
            <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={prevImage}><ChevronLeft size={28} /></button>
            <img src={previewImage} alt="Preview" className={styles.previewImage} />
            {isLoggedIn && isAdmin && (
              <button className={styles.deleteIcon} onClick={(e) => { e.stopPropagation(); handleImageDelete(filteredImages[previewImageIndex]); }}>🗑️</button>
            )}
            <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={nextImage}><ChevronRight size={28} /></button>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </div>
  );
};

export default BodyImage;
