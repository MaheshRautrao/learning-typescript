interface takePhoto {
  cameraMode: string;
  filter: string;
  // it can contain methods also
}
// it basically provides protocol or rule how to do the thing and these are the bare minimum that
// you have you can have more than that it is ok but less is not ok

// class instagram implements takePhoto {
//   constructor(cameraMode: string, filter: string) {}
//   cameraMode = "front";
//   filter = "gray";
// }
// // class twi implements takePhoto {
// //   constructor(cameraMode = "front", filter = "ff") {}
// // }

// class youtube implements takePhoto {
//   cameraMode = "front";
//   filter = "gray";
//   scale: number = 2; //adding new prop is ok
// }

// you can implment more than one interface also
// like class youtube implements takePhoto,createStory{}
