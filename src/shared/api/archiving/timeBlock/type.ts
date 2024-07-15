export interface fileResponse {
  fileName: string;
  url: string;
}

export interface fileData {
  fileFormat: string;
}

export interface timeBlockData {
  name: string;
  color: string;
  startDate: string;
  endDate: string;
  files: Map<string, string>;
}
