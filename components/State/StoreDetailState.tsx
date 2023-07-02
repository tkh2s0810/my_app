import { atom } from "recoil";

type placePhoto = {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
};

interface StoreDetails {
  address: string;
  phoneNumber: string;
  name: string;
  website: string;
  photos: placePhoto[]; // photosの型を指定する
}

export const StoreDetailsState = atom<StoreDetails>({
  key: "storeDetailsState",
  default: { address: "", phoneNumber: "", name: "", website: "", photos: [] },
});
