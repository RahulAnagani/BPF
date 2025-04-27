import React, { useState } from 'react';
import axios from 'axios';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const handleFileChange = (e) =>
     {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setMessage('');
    setStatus(null);
  };

  const handleFileUpload = async () => {
    if (!file) {
      setMessage('Please select a file first.');
      setStatus('error');
      return;
    }
    setIsUploading(true);
    const formData = new FormData();
    formData.append('resume', file);
    const api=import.meta.env.VITE_API_URL;
    if(!api)return;
    try {
      const response = await axios.post(`${api}/resume/uploadResume`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Resume uploaded successfully!');
      setStatus('success');
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error uploading the resume. Please try again.');
      setStatus('error');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold name text-gray-800">Upload Your Resume</h2>
        <p className="text-gray-600 duck mt-1">Supported formats: PDF, DOCX, DOC (Max: 5MB)</p>
      </div>

      <div className="mb-6">
        <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
          <input 
            type="file" 
            onChange={handleFileChange} 
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".pdf,.doc,.docx"
          />
          <div className="flex flex-col items-center justify-center">
            <Upload className="w-12 h-12 text-gray-400 mb-3" />
            <p className="text-gray-700 font-medium mb-1">
              {file ? file.name : 'Drag your file here or click to browse'}
            </p>
            <p className="text-sm text-gray-500">
              {file ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` : 'Select your resume to upload'}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleFileUpload}
        disabled={isUploading || !file}
        className={`w-full py-3 px-4 rounded-md font-medium flex items-center justify-center ${
          !file ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
        } transition-colors`}
      >
        {isUploading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Uploading...
          </>
        ) : (
          'Upload Resume'
        )}
      </button>

      {message && (
        <div className={`mt-4 p-3 rounded-md flex items-start ${
          status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          {status === 'success' ? (
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          )}
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};

export default FileUpload;