const { isInsidePolygon } = require('./pointsInPolygon');
const testFunc = ({within, polygon_point, coordinates}) => {
  
  coordinates.map((coordinate) => {
    const withinResult = isInsidePolygon(coordinate, polygon_point);
    const expected = within ? "Within" : "OutOfBoundary";
    console.log('Testing coordinate: ', coordinate)
    console.log(`Expected (${expected}): `,within? withinResult : !withinResult)
  });
};
let polygon_point, testCoordinates;

// Test 1
console.log('Test 1');
polygon_point = ["12 11","0 10","0 0","10 0","12 11"];
console.log('Polygon:', polygon_point)
data = {
  within: true,
  polygon_point,
  coordinates: ["5 5", "9 9"],
};
testFunc(data);
data = {
  within: false,
  polygon_point,
  coordinates: ["99 99", "12 12"],
};
testFunc(data);



// Test 2
console.log('Test 2');
polygon_point = ["111 110","100 110","100 100","111 100","111 110"];
console.log('Polygon:', polygon_point)
data = {
  within: true,
  polygon_point,
  coordinates: ["105 109"],
};
testFunc(data);
data = {
  within: false,
  polygon_point,
  coordinates: ["112 112"],
};
testFunc(data);


// Add more testcase below here  ...
// Notes: Number of coordinates in polygon is more than 2, max is unlimited

// Template for adding test 
// console.log('Test TEST_NUM');
// polygon_point = ["lat lng","lat lng","lat lng","lat lng","lat lng"];
// console.log('Polygon:', polygon_point)

// Within Polygon Boundary Test
// data = {
//   within: true,
//   polygon_point,
//   coordinates: ["lat lng"],
// };
// testFunc(data);

// Out Of Boundary Test
// data = {
//   within: false,
//   polygon_point,
//   coordinates: ["lat lng"],
// };
// testFunc(data);

// End testcase templates ...

