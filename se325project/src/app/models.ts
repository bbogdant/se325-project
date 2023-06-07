export interface Vehicle {
  id: number,
  imageUrl: string,
  make: string,
  model: string,
  year: number,
  price: number,
  fuel: string,
  transmission: string

}

export interface Team {
  image: string;
  name: string;
  title: string;
}


export interface User {
  username: string;
  password: string;
}
