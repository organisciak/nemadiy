var data = [
[{o: 0, f: 30.961, l: "A", a: 0},
{o: 30.961, f: 47.079, l: "B", a: 1},
{o: 47.079, f: 84.587, l: "C", a: 0}],
[{o: 0.168, f: 9.46, l: "B", a: 0},
{o: 9.46, f: 17.004, l: "B", a: 1},
{o: 17.004, f: 23.644, l: "B", a: 0},
{o: 23.644, f: 33.684, l: "B", a: 1},
{o: 33.684, f: 39.744, l: "B", a: 0},
{o: 39.744, f: 45.508, l: "A", a: 1},
{o: 45.508, f: 51.872, l: "B", a: 0},
{o: 51.872, f: 59.52, l: "B", a: 1},
{o: 59.52, f: 64.156, l: "B", a: 0},
{o: 64.156, f: 75.208, l: "B", a: 1},
{o: 75.208, f: 84.504, l: "B", a: 0}],
[{o: 0.168, f: 9.46, l: "B", a: 0},
{o: 9.46, f: 17.004, l: "D", a: 1},
{o: 17.004, f: 23.644, l: "B", a: 0},
{o: 23.644, f: 33.684, l: "B", a: 1},
{o: 33.684, f: 39.744, l: "C", a: 0},
{o: 39.744, f: 45.508, l: "E", a: 1},
{o: 45.508, f: 51.872, l: "A", a: 0},
{o: 51.872, f: 59.52, l: "D", a: 1},
{o: 59.52, f: 64.156, l: "B", a: 0},
{o: 64.156, f: 75.208, l: "A", a: 1},
{o: 75.208, f: 84.504, l: "C", a: 0}],
[{o: 0.707, f: 7.267, l: "7", a: 0},
{o: 7.267, f: 17.8, l: "1", a: 1},
{o: 17.8, f: 25.347, l: "6", a: 0},
{o: 25.347, f: 32.12, l: "1", a: 1},
{o: 32.12, f: 45.44, l: "3", a: 0},
{o: 45.44, f: 53.44, l: "5", a: 1},
{o: 53.44, f: 71.347, l: "2", a: 0},
{o: 71.347, f: 79.84, l: "4", a: 1},
{o: 79.84, f: 84.493, l: "8", a: 0}],
[{o: 0, f: 17.88, l: "a", a: 0},
{o: 17.88, f: 33.525, l: "a", a: 1},
{o: 33.525, f: 45.445, l: "b", a: 0},
{o: 45.445, f: 63.325, l: "c", a: 1},
{o: 63.325, f: 83.44, l: "c", a: 0}],
[{o: 0, f: 53.963, l: "n1", a: 0},
{o: 53.963, f: 63.46, l: "A", a: 1},
{o: 63.46, f: 71.576, l: "n2", a: 0},
{o: 71.576, f: 84.381, l: "A", a: 1}],
[{o: 0, f: 0.012, l: "I", a: 0},
{o: 0.012, f: 0.012, l: "B", a: 1},
{o: 0.012, f: 8.784, l: "A", a: 0},
{o: 8.784, f: 15.18, l: "H", a: 1},
{o: 15.18, f: 24.14, l: "A", a: 0},
{o: 24.14, f: 35.252, l: "H", a: 1},
{o: 35.252, f: 46.964, l: "C", a: 0},
{o: 46.964, f: 58.484, l: "B", a: 1},
{o: 58.484, f: 64.468, l: "E", a: 0},
{o: 64.468, f: 76.068, l: "B", a: 1},
{o: 76.068, f: 84.344, l: "F", a: 0},
{o: 84.344, f: 84.504, l: "A", a: 1},
{o: 84.504, f: 84.586, l: "I", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001191.ogg";
