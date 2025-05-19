// FileUpload.jsx
import { useState } from 'react';

const FileUpload = ({ 
  onUpload, 
  accept = '.pdf,.doc,.docx', 
  label = 'Upload a file', 
  description = 'PDF, DOC, DOCX up to 10MB',
  darkMode = false 
}) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setError(null);
    
    if (!selectedFile) return;
    
    if (selectedFile.size > 10 * 1024 * 1024) {
      setError('File size exceeds 10MB');
      return;
    }

    setFile(selectedFile);
    handleUpload(selectedFile);
  };

  const handleUpload = (fileToUpload) => {
    setIsUploading(true);
    setUploadSuccess(false);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadSuccess(true);
          if (onUpload) onUpload(fileToUpload);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  // Dark mode classes
  const borderColor = darkMode ? 'border-gray-600' : 'border-gray-300';
  const textColor = darkMode ? 'text-gray-300' : 'text-gray-600';
  const labelColor = darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500';
  const descColor = darkMode ? 'text-gray-400' : 'text-gray-500';
  const bgColor = darkMode ? 'bg-gray-800' : 'bg-white';
  const iconColor = darkMode ? 'text-gray-400' : 'text-gray-400';

  return (
    <div className="space-y-4">
      <div className={`flex justify-center px-6 pt-5 pb-6 border-2 ${borderColor} border-dashed rounded-md ${bgColor}`}>
        <div className="space-y-1 text-center">
          <svg
            className={`mx-auto h-12 w-12 ${iconColor}`}
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className={`flex text-sm ${textColor}`}>
            <label
              htmlFor="file-upload"
              className={`relative cursor-pointer rounded-md font-medium ${labelColor} focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 ${darkMode ? 'focus-within:ring-indigo-500' : 'focus-within:ring-indigo-500'}`}
            >
              <span>{label}</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                accept={accept}
                onChange={handleFileChange}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className={`text-xs ${descColor}`}>{description}</p>
        </div>
      </div>

      {/* Progress and status messages remain the same */}
      {isUploading && (
        <div className="pt-2">
          <div className={`flex justify-between text-sm ${textColor} mb-1`}>
            <span>{file?.name}</span>
            <span>{uploadProgress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-indigo-500 h-2.5 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {uploadSuccess && (
        <div className={`rounded-md ${darkMode ? 'bg-green-900/30' : 'bg-green-50'} p-4`}>
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className={`text-sm font-medium ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                File uploaded successfully!
              </p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className={`rounded-md ${darkMode ? 'bg-red-900/30' : 'bg-red-50'} p-4`}>
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className={`text-sm font-medium ${darkMode ? 'text-red-300' : 'text-red-800'}`}>{error}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;