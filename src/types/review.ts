import * as firebase from "firebase";

type UserRef = {
  id: string;
  name: string;
};

type ShopRef = {
  id: string;
  name: string;
};

export type Review = {
  id?: string;
  text: string;
  score: number;
  imageUrl: string;
  user: UserRef;
  shop: ShopRef;
  updatedAt: firebase.default.firestore.Timestamp;
  createdAt: firebase.default.firestore.Timestamp;
};
