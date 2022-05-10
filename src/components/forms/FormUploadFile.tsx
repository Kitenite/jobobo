import { useState } from "react";

export default function FormUploadFile(props: any) {
  const [attachedFile, setAttachedFile] = useState();
  const [dragCounter, setDragCounter] = useState(0);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter + 1);
  };
  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter - 1);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      updateAttachedFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
    setDragCounter(0);
  };

  const handleFileSelect = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files && e.target.files.length > 0) {
      updateAttachedFile(e.target.files[0]);
    }
  };

  const fileBrowserComponent = (
    <div>
      <div
        className={`max-w-xl ${dragCounter > 0 ? "bg-slate-200" : ""}`}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDrag(e)}
        onDragEnter={(e) => handleDragIn(e)}
        onDragLeave={(e) => handleDragOut(e)}
      >
        <label className="flex h-32 w-full cursor-pointer appearance-none justify-center rounded-md border-2 border-dashed border-gray-300  px-4 transition hover:border-gray-400 focus:outline-none">
          <span className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="font-medium text-gray-600">
              Drop files to Attach, or
              <span className="text-blue-600 underline"> browse</span>
            </span>
          </span>
          <input
            type="file"
            name="file_upload"
            className="hidden"
            onChange={handleFileSelect}
          />
        </label>
      </div>
    </div>
  );

  const uploadResume = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Upload file: ");
    console.log(attachedFile);
  };

  const clearFiles = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAttachedFile(undefined);
    console.log("Clearing file: ");
  };

  const updateAttachedFile = (file) => {
    setAttachedFile(file);
  };

  const fileAttachedComponent = (
    <div className="bg-slated-300 mt-3 flex flex-col space-y-5">
      <label>{attachedFile?.name}</label>
      <div className="space-x-5">
        <button
          onClick={uploadResume}
          className="rounded bg-green-300 py-2 px-4 font-bold text-gray-800 hover:bg-green-400"
        >
          Upload resume
        </button>
        <button
          onClick={clearFiles}
          className="rounded bg-slate-100 py-2 px-4 text-gray-800 hover:bg-slate-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );

  return (
    <div>{attachedFile ? fileAttachedComponent : fileBrowserComponent}</div>
  );
}
