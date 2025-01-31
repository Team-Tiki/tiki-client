export const downloadDocument = (fileUrl: string, name?: string) => {
  fetch(fileUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');

      a.href = url;
      a.download = name || 'downloaded-file';
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);

      document.body.removeChild(a);
    })
    .catch((error) => console.error('Download failed:', error));
};
