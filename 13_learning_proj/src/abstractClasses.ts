// abstract class  is like blueprint you can not create objects directly from it but you
// can create objects of classes that extends it
abstract class takePhoto {
  constructor(public cameraMode: string, public scale: number) {}
  abstract getReels(): void; //this are compulsary to implement in child classes no matter how
  getReelTime(): number {
    // complex logic
    return 8;
  }
}
// let m = new takePhoto() error is Cannot create an instance of an abstract class

class instagrfam extends takePhoto {
  constructor(public cameraMode: string, public scale: number) {
    super(cameraMode, scale);
  }
  getReels(): void {
    console.log("reels");
  }
}

let mahesh = new instagrfam("test", 2);
mahesh.getReelTime();
