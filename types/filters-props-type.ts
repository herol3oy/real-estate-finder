import { Dispatch, SetStateAction } from "react";

export type FiltersPropsType = {
  selectedBaths: string;
  setSelectedBaths: Dispatch<SetStateAction<string>>;
  selectedBeds: string;
  setSelectedBeds: Dispatch<SetStateAction<string>>;
  selectedPropertyType: string;
  setSelectedPropertyType: Dispatch<SetStateAction<string>>;
  selectedOrderBy: string;
  setSelectedOrderBy: Dispatch<SetStateAction<string>>;
};
