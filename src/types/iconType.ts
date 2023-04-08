export interface iconType {
  id: number;
  src: string;
  alt: string;
  name: string;
  type: string;
  icons?: iconType[];
  onMoveLink?: Function;
}
