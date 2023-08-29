import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      1100,
      1100,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });
export const processMediaFile = async (file) => {
  const { mime, type, uri, path } = file;
  const fileSource = uri || path;
  const includesVideo = mime?.includes("video") || type?.includes("video");
  const includesImage = mime?.includes("image") || type?.includes("image");

  if (includesImage) {
    const image = await resizeFile(file);
    return image;
  }
  return file;
};
