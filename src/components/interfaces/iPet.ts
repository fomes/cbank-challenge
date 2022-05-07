export interface iPet {
  id: number;
  name: string;
  species: string;
  weight: number;
  age: number;
  photo: {
    thumb: string;
  }
  favorite: boolean,
  available: boolean
}
