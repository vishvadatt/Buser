import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({
  corePath: "https://unpkg.com/@ffmpeg/core@0.9.0-alpha.2/dist/ffmpeg-core.js",
  log: true,
});

const videoConvertor = async (inputBlobUrl) => {
  await ffmpeg.load();
  const response = await fetchFile(inputBlobUrl);
  const inputArrayBuffer = await response.arrayBuffer();
  const inputUint8Array = new Uint8Array(inputArrayBuffer);
  console.log("response", response);

  ffmpeg.FS("writeFile", "input.mp4", inputUint8Array);

  await ffmpeg.run(
    "-i",
    "input.mp4",
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    "22",
    "output.mp4"
  );

  const data = ffmpeg.FS("readFile", "output.mp4");
  console.log("dataFS", data);
  const convertedFile = URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" }));

  return convertedFile;
};

export default videoConvertor;
