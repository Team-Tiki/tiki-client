export const handleDownload = (fileUrl: string, name?: string) => {
  const a = document.createElement('a');
  a.href = fileUrl;
  name && (a.download = name);
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    window.URL.revokeObjectURL(fileUrl);
  }, 1000);
  a.remove();
};
