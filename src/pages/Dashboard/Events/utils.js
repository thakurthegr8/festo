import axios from "axios";
import moment from "moment";

export const validateFormData = (formData) => {
  formData.name = formData.name.toLowerCase();
  if (moment(formData.date).diff(new Date()) < 0)
    throw new Error("please choose future date");
  formData.date = new Date(formData.date).toISOString();
  return formData;
};


export const uploadImage = async (imageBlob) => {
    if (imageBlob === null) throw new Error("please select image");
    const form = new FormData();
    form.append("file", imageBlob);
    form.append("upload_preset", process.env.NEXT_PUBLIC_STORAGE_PRESET);
    const uploadReq = await axios.post(
      process.env.NEXT_PUBLIC_STORAGE_URL,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const uploadRes = await uploadReq.data;
    return uploadRes;
  };
