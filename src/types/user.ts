import * as firebase from "firebase";
export type User = {
  id?: string;
  name: string;
  updatedAt: firebase.default.firestore.Timestamp;
  createdAt: firebase.default.firestore.Timestamp;
};

export const initialUser: User = {
  name: "",
  updatedAt: firebase.default.firestore.Timestamp.now(),
  createdAt: firebase.default.firestore.Timestamp.now(),
};
