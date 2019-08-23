// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(num){
        this.length = num.length;
        this.width = num.width;
        this.height = num.height;
        }
  

  volume(){
    return this.length * this.width * this.length;
  }
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMaker extends CuboidMaker{
    constructor(cubeMakerAttrs){
        super(cubeMakerAttrs);
    }
    cubeVolume(){
        return this.length**3;
    }
    cubeSurfaceArea(){
        return 6 * ((this.length**3)**2);
    }
  }


  
   const cuboid = new CubeMaker({
    length: 4,
    width: 5,
    height: 5
  });
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cuboid.cubeVolume());
console.log(cuboid.cubeSurfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.