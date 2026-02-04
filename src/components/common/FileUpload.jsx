import React, { useRef, useState } from 'react'

const FileUpload = ({
  label = 'Upload a JPG, PNG, or PDF file',
  maxSize = 10,
  onChange,
}) => {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  // Allowed file types
  const allowedTypes = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "application/pdf"
  ];
  // Handle click on upload area
  const handleClick = () => {
    inputRef.current.click();
  }
  // Handle file change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    if (!allowedTypes.includes(selectedFile.type)) {
      console.log('Error file type')
      return;
    }
    if (selectedFile.size > maxSize * 1024 * 1024) {
      setError(`Max file size is ${maxSize}MB`);
      return;
    }
    setFile(selectedFile);
    onChange?.(selectedFile);
  }
  // Remove file
  const removeFile = (e) => {
    e.stopPropagation();
    setFile(null);
    inputRef.current.value = "";
    onChange?.(null);
  }
  return (
    <div className="upload-file-group" onClick={handleClick}>
      <div className="upload-file d-flex align-items-center gap-3">
        {/* Icon */}
        {!file ? (
          <div className="upload-icon d-flex align-items-center justify-content-center">
            <i className="bi bi-cloud-upload text-success"></i>
          </div>
        ) : (
          <div className="after-upload-icon">
            <i className="bi bi-file-earmark-text text-success"></i>
          </div>
        )}
        {/* Text */}
        <div
          className="upload-text d-flex align-items-center justify-content-between w-100 position-relative">
          <div>
            <h6 className="font-14">{file ? file.name : label}</h6>
            <small className="">{file ? `${(file.size / 1024 / 1024).toFixed(1)} MB` : `Maxsize: ${maxSize}MB`}</small>
          </div>
          {/* Delete file */}
          <div className="d-flex justify-content-end gap-3">
            {file &&
              <small className="upload-icon-btn remove-text" onClick={removeFile}>
                <i className="bi bi-trash3"></i>
              </small>
            }
          </div>
        </div>
        <input ref={inputRef} type="file" id="pan_card" className="d-none"
          accept=".jpg,.jpeg,.png,.pdf" onChange={handleFileChange} />
      </div>
    </div>
  )
}

export default FileUpload