export interface TimeBlockCreate {
  name: string;
  color: string;
  startDate: string;
  endDate: string;
  blockType: string;
  files: Map<string, string>;
}
