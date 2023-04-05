import { async } from "@firebase/util";

export const imageUpload = async (formData) => {
  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=ff5497ebe4563f1b7237ec788407871b`,
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await res.json();
  return data;
};
