import { axiosInstance } from "../../utils/axios";
import { propertyDetailsAction } from "./propertyDetails-slice";

export const getPropertyDetails = (id) => async (dispatch) => {
  try {
    dispatch(propertyDetailsAction.getListRequest());
    const response = await axiosInstance(`/v1/rent/listing/${id}`);
    if (!response) {
      throw new Error("could not fetch any propertyDetails");
    }
    const { data } = response.data;
    dispatch(propertyDetailsAction.getPropertyDetails(data));
  } catch (error) {
    dispatch(propertyDetailsAction.getErrors(error.response.data.error));
  }
};
