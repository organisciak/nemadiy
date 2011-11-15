var data = [
[{o: 0.03, f: 2.723, l: "Z", a: 0},
{o: 2.723, f: 48.591, l: "A", a: 1},
{o: 48.591, f: 68.766, l: "B", a: 0},
{o: 68.766, f: 98.237, l: "A", a: 1},
{o: 98.237, f: 136.498, l: "C", a: 0},
{o: 136.498, f: 165.59, l: "A", a: 1},
{o: 165.59, f: 185.434, l: "B", a: 0},
{o: 185.434, f: 223.84, l: "A", a: 1},
{o: 223.84, f: 291.622, l: "C", a: 0},
{o: 291.622, f: 412.314, l: "Z", a: 1}],
[{o: 0.024, f: 25.444, l: "D", a: 0},
{o: 25.444, f: 44.612, l: "D", a: 1},
{o: 44.612, f: 65.032, l: "D", a: 0},
{o: 65.032, f: 85.232, l: "D", a: 1},
{o: 85.232, f: 93.748, l: "D", a: 0},
{o: 93.748, f: 109.504, l: "D", a: 1},
{o: 109.504, f: 136.744, l: "D", a: 0},
{o: 136.744, f: 158.448, l: "D", a: 1},
{o: 158.448, f: 185.42, l: "D", a: 0},
{o: 185.42, f: 199.832, l: "D", a: 1},
{o: 199.832, f: 219.136, l: "D", a: 0},
{o: 219.136, f: 238.132, l: "D", a: 1},
{o: 238.132, f: 262.232, l: "D", a: 0},
{o: 262.232, f: 280.476, l: "D", a: 1},
{o: 280.476, f: 292.396, l: "D", a: 0},
{o: 292.396, f: 307.588, l: "D", a: 1},
{o: 307.588, f: 316.868, l: "B", a: 0},
{o: 316.868, f: 330.156, l: "D", a: 1},
{o: 330.156, f: 342.776, l: "B", a: 0},
{o: 342.776, f: 361.372, l: "B", a: 1},
{o: 361.372, f: 374.796, l: "D", a: 0},
{o: 374.796, f: 390.64, l: "D", a: 1},
{o: 390.64, f: 399.212, l: "D", a: 0},
{o: 399.212, f: 412.14, l: "D", a: 1}],
[{o: 0.024, f: 25.444, l: "D", a: 0},
{o: 25.444, f: 44.612, l: "D", a: 1},
{o: 44.612, f: 65.032, l: "D", a: 0},
{o: 65.032, f: 85.232, l: "D", a: 1},
{o: 85.232, f: 93.748, l: "D", a: 0},
{o: 93.748, f: 109.504, l: "D", a: 1},
{o: 109.504, f: 136.744, l: "D", a: 0},
{o: 136.744, f: 158.448, l: "D", a: 1},
{o: 158.448, f: 185.42, l: "D", a: 0},
{o: 185.42, f: 199.832, l: "D", a: 1},
{o: 199.832, f: 219.136, l: "D", a: 0},
{o: 219.136, f: 238.132, l: "A", a: 1},
{o: 238.132, f: 262.232, l: "A", a: 0},
{o: 262.232, f: 280.476, l: "A", a: 1},
{o: 280.476, f: 292.396, l: "C", a: 0},
{o: 292.396, f: 307.588, l: "E", a: 1},
{o: 307.588, f: 316.868, l: "F", a: 0},
{o: 316.868, f: 330.156, l: "B", a: 1},
{o: 330.156, f: 342.776, l: "G", a: 0},
{o: 342.776, f: 361.372, l: "H", a: 1},
{o: 361.372, f: 374.796, l: "I", a: 0},
{o: 374.796, f: 390.64, l: "J", a: 1},
{o: 390.64, f: 399.212, l: "K", a: 0},
{o: 399.212, f: 412.14, l: "B", a: 1}],
[{o: 0.84, f: 41.76, l: "2", a: 0},
{o: 41.76, f: 66.507, l: "4", a: 1},
{o: 66.507, f: 92.813, l: "2", a: 0},
{o: 92.813, f: 128.96, l: "1", a: 1},
{o: 128.96, f: 136.68, l: "4", a: 0},
{o: 136.68, f: 145.12, l: "2", a: 1},
{o: 145.12, f: 163.92, l: "1", a: 0},
{o: 163.92, f: 182.373, l: "4", a: 1},
{o: 182.373, f: 288.187, l: "1", a: 0},
{o: 288.187, f: 305.533, l: "3", a: 1},
{o: 305.533, f: 319.707, l: "5", a: 0},
{o: 319.707, f: 334.667, l: "3", a: 1},
{o: 334.667, f: 344.547, l: "8", a: 0},
{o: 344.547, f: 371.493, l: "6", a: 1},
{o: 371.493, f: 386.493, l: "3", a: 0},
{o: 386.493, f: 396.293, l: "7", a: 1},
{o: 396.293, f: 404.96, l: "3", a: 0},
{o: 404.96, f: 412.013, l: "5", a: 1}],
[{o: 0, f: 28.31, l: "a", a: 0},
{o: 28.31, f: 68.54, l: "b", a: 1},
{o: 68.54, f: 93.87, l: "a", a: 0},
{o: 93.87, f: 119.2, l: "c", a: 1},
{o: 119.2, f: 154.215, l: "a", a: 0},
{o: 154.215, f: 194.445, l: "b", a: 1},
{o: 194.445, f: 219.775, l: "a", a: 0},
{o: 219.775, f: 241.38, l: "c", a: 1},
{o: 241.38, f: 411.985, l: "d", a: 0}],
[{o: 0, f: 2.694, l: "n1", a: 0},
{o: 2.694, f: 17.601, l: "B", a: 1},
{o: 17.601, f: 32.856, l: "B", a: 0},
{o: 32.856, f: 48.774, l: "n2", a: 1},
{o: 48.774, f: 59.083, l: "C", a: 0},
{o: 59.083, f: 67.779, l: "C", a: 1},
{o: 67.779, f: 76.022, l: "n4", a: 0},
{o: 76.022, f: 90.755, l: "B", a: 1},
{o: 90.755, f: 136.185, l: "n5", a: 0},
{o: 136.185, f: 150.895, l: "B", a: 1},
{o: 150.895, f: 165.756, l: "B", a: 0},
{o: 165.756, f: 175.775, l: "C", a: 1},
{o: 175.775, f: 185.446, l: "C", a: 0},
{o: 185.446, f: 195.059, l: "A", a: 1},
{o: 195.059, f: 204.974, l: "A", a: 0},
{o: 204.974, f: 213.426, l: "A", a: 1},
{o: 213.426, f: 223.968, l: "n12", a: 0},
{o: 223.968, f: 233.593, l: "A", a: 1},
{o: 233.593, f: 243.159, l: "A", a: 0},
{o: 243.159, f: 252.865, l: "A", a: 1},
{o: 252.865, f: 261.352, l: "A", a: 0},
{o: 261.352, f: 267.494, l: "n16", a: 1},
{o: 267.494, f: 276.178, l: "A", a: 0},
{o: 276.178, f: 412.061, l: "n17", a: 1}],
[{o: 0, f: 0.024, l: "H", a: 0},
{o: 0.024, f: 93.748, l: "D", a: 1},
{o: 93.748, f: 129.896, l: "E", a: 0},
{o: 129.896, f: 184.824, l: "D", a: 1},
{o: 184.824, f: 288.964, l: "E", a: 0},
{o: 288.964, f: 319.596, l: "G", a: 1},
{o: 319.596, f: 337.568, l: "D", a: 0},
{o: 337.568, f: 362.34, l: "A", a: 1},
{o: 362.34, f: 386.296, l: "G", a: 0},
{o: 386.296, f: 404.168, l: "D", a: 1},
{o: 404.168, f: 412.14, l: "G", a: 0},
{o: 412.14, f: 412.201, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001416.ogg";

var artist = "Dead Floyd";

var track = "Not Now John";
