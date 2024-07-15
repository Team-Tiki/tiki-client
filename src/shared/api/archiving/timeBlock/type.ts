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
  files: Map<string, string>;
}
