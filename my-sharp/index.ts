import sharp from "sharp";

(async () => {
  await sharp("./original/heart.png")
    .resize({ fit: "cover", width: 100 })
    .toFile("./original/optimize/heart.png");

  await sharp("./original/room.webp")
    .resize({ fit: "cover", width: 100 })
    .toFile("./original/optimize/room.webp");
})();
