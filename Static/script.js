let selectedFiles = [];
const fileSourceDropdown = document.getElementById("file-source");
const fileListElement = document.getElementById("file-list");
const fileCountElement = document.getElementById("file-count");
const filePreviewElement = document.getElementById("file-preview");

function handleSourceChange() {
  const selectedSource = fileSourceDropdown.value;

  if (selectedSource === 's3') {
    // Fetch and display S3 bucket files (Mocked here for demo)
    fetchS3Files();
  } else {
    // Allow file uploads from device
    allowFileUpload();
  }
}

function fetchS3Files() {
  // Mock data for S3 files (replace with real API call)
  selectedFiles = ["file1.pdf", "file2.pdf", "file3.jpg"];
  updateFileList();
}

function allowFileUpload() {
  const input = document.createElement("input");
  input.type = "file";
  input.multiple = true;
  input.onchange = (event) => {
    selectedFiles = Array.from(event.target.files);
    updateFileList();
  };
  input.click();
}

function updateFileList() {
  fileListElement.innerHTML = "";
  fileCountElement.textContent = `Selected Files: ${selectedFiles.length}`;

  selectedFiles.forEach(file => {
    const listItem = document.createElement("li");
    listItem.textContent = typeof file === 'string' ? file : file.name;
    listItem.onclick = () => previewFile(file);
    fileListElement.appendChild(listItem);
  });
}

function previewFile(file) {
  filePreviewElement.innerHTML = "";

  if (typeof file === "string") {
    // This is for S3 bucket files (Mock)
    filePreviewElement.textContent = `Preview of ${file} from S3 bucket`;
  } else {
    const fileType = file.type.split("/")[0]; // Get file type (image, text, etc.)
    
    if (fileType === "image") {
      const imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(file);
      imgElement.style.maxWidth = "100%";
      imgElement.alt = "Image Preview";
      filePreviewElement.appendChild(imgElement);
    } else if (file.type === "application/pdf") {
      const pdfElement = document.createElement("embed");
      pdfElement.src = URL.createObjectURL(file);
      pdfElement.type = "application/pdf";
      pdfElement.width = "100%";
      pdfElement.height = "500px";
      filePreviewElement.appendChild(pdfElement);
    } else if (fileType === "text") {
      const reader = new FileReader();
      reader.onload = (e) => {
        filePreviewElement.textContent = e.target.result;
      };
      reader.readAsText(file);
    } else {
      filePreviewElement.textContent = `File preview not available for this type: ${file.type}`;
    }
  }
}

function resetFiles() {
  selectedFiles = [];
  updateFileList();
  filePreviewElement.innerHTML = "Select a file to preview it here";
}

function processFiles() {
  if (selectedFiles.length === 0) {
    alert("No files selected for processing.");
    return;
  }

  // Send files to the backend for processing (this is a mock call)
  console.log("Processing files:", selectedFiles);
  alert("Files sent for processing.");
}
