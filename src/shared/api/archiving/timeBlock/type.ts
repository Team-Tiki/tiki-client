export interface fileResponse {
  fileName: string;
  url: string;
}

export interface fileData {
  fileFormat: string;
}

export interface TimeBlockCreate {
  name: string;
  color: string;
  startDate: string;
  endDate: string;
  blockType: string;
  files: Map<string, string>;
}

export interface DeleteFile {
  fileName: string;
}
