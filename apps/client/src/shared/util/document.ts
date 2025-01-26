export const downloadDocument = (fileUrl: string, name?: string) => {
  fetch(fileUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('response network error');
      }
      return response.blob();
    })
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = name || 'downloaded-file';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error('File download failed:', error);
    });
};
