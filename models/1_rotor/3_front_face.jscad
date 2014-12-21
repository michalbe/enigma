// title: PHOQSE / 1. Rotor / 3. Front Face
// author: Michal Budzynski <michal@virtualdesign.pl>

//
var objectHeight = 1;
function main() {
  var ringSize = alphabetHoleSize - cylinderThickness;
  var mainRing = ring(ringSize, ringSize - hubDiameter, objectHeight);
  mainRing = circularHoles({
    base: mainRing,
    numberOfHoles: 3,
    holeRadius: screwHoleSize,
    distanceFromCenter: fontScrewRadius
  });

  mainRing = circularHoles({
    base: mainRing,
    numberOfHoles: 26,
    holeRadius: pinHoleSize,
    distanceFromCenter: pinRadius
  });
  var wholePart = mainRing;
  return wholePart;
}
