var data = [
[{o: 0.267, f: 21.498, l: "A", a: 0},
{o: 21.498, f: 41.31, l: "A", a: 1},
{o: 41.31, f: 61.059, l: "A", a: 0},
{o: 61.059, f: 80.947, l: "A", a: 1},
{o: 80.947, f: 100.719, l: "A", a: 0},
{o: 100.719, f: 120.594, l: "F", a: 1},
{o: 120.594, f: 140.385, l: "A", a: 0},
{o: 140.385, f: 160.201, l: "A", a: 1},
{o: 160.201, f: 179.97, l: "A", a: 0},
{o: 179.97, f: 204.419, l: "A", a: 1}],
[{o: 0.284, f: 17.044, l: "B", a: 0},
{o: 17.044, f: 32.532, l: "B", a: 1},
{o: 32.532, f: 41.828, l: "B", a: 0},
{o: 41.828, f: 61.632, l: "B", a: 1},
{o: 61.632, f: 80.212, l: "B", a: 0},
{o: 80.212, f: 100.016, l: "B", a: 1},
{o: 100.016, f: 114.252, l: "B", a: 0},
{o: 114.252, f: 121.7, l: "A", a: 1},
{o: 121.7, f: 139.032, l: "A", a: 0},
{o: 139.032, f: 158.852, l: "B", a: 1},
{o: 158.852, f: 178.032, l: "B", a: 0},
{o: 178.032, f: 197.232, l: "C", a: 1},
{o: 197.232, f: 202.816, l: "D", a: 0}],
[{o: 0.284, f: 17.044, l: "A", a: 0},
{o: 17.044, f: 32.532, l: "B", a: 1},
{o: 32.532, f: 41.828, l: "C", a: 0},
{o: 41.828, f: 61.632, l: "B", a: 1},
{o: 61.632, f: 80.212, l: "B", a: 0},
{o: 80.212, f: 100.016, l: "B", a: 1},
{o: 100.016, f: 114.252, l: "B", a: 0},
{o: 114.252, f: 121.7, l: "D", a: 1},
{o: 121.7, f: 139.032, l: "E", a: 0},
{o: 139.032, f: 158.852, l: "B", a: 1},
{o: 158.852, f: 178.032, l: "B", a: 0},
{o: 178.032, f: 197.232, l: "F", a: 1},
{o: 197.232, f: 202.816, l: "G", a: 0}],
[{o: 0.947, f: 3.12, l: "8", a: 0},
{o: 3.12, f: 20.453, l: "3", a: 1},
{o: 20.453, f: 44, l: "1", a: 0},
{o: 44, f: 56.373, l: "2", a: 1},
{o: 56.373, f: 82.373, l: "1", a: 0},
{o: 82.373, f: 98.48, l: "2", a: 1},
{o: 98.48, f: 113.333, l: "4", a: 0},
{o: 113.333, f: 120.773, l: "7", a: 1},
{o: 120.773, f: 135.627, l: "2", a: 0},
{o: 135.627, f: 161.013, l: "1", a: 1},
{o: 161.013, f: 175.253, l: "2", a: 0},
{o: 175.253, f: 181.44, l: "1", a: 1},
{o: 181.44, f: 195.067, l: "5", a: 0},
{o: 195.067, f: 203.4, l: "6", a: 1}],
[{o: 0, f: 36.505, l: "a", a: 0},
{o: 36.505, f: 66.305, l: "a", a: 1},
{o: 66.305, f: 84.185, l: "b", a: 0},
{o: 84.185, f: 119.2, l: "c", a: 1},
{o: 119.2, f: 155.705, l: "a", a: 0},
{o: 155.705, f: 185.505, l: "a", a: 1},
{o: 185.505, f: 203.385, l: "b", a: 0}],
[{o: 0, f: 1.904, l: "n1", a: 0},
{o: 1.904, f: 41.54, l: "A", a: 1},
{o: 41.54, f: 81.165, l: "A", a: 0},
{o: 81.165, f: 120.779, l: "n2", a: 1},
{o: 120.779, f: 160.415, l: "A", a: 0},
{o: 160.415, f: 200.04, l: "A", a: 1},
{o: 200.04, f: 204.011, l: "n3", a: 0}],
[{o: 0, f: 0.116, l: "F", a: 0},
{o: 0.116, f: 19.816, l: "D", a: 1},
{o: 19.816, f: 31.132, l: "A", a: 0},
{o: 31.132, f: 49.564, l: "E", a: 1},
{o: 49.564, f: 62.708, l: "A", a: 0},
{o: 62.708, f: 89.192, l: "E", a: 1},
{o: 89.192, f: 120.3, l: "A", a: 0},
{o: 120.3, f: 146.464, l: "E", a: 1},
{o: 146.464, f: 159.936, l: "A", a: 0},
{o: 159.936, f: 168.42, l: "E", a: 1},
{o: 168.42, f: 179.74, l: "A", a: 0},
{o: 179.74, f: 188.264, l: "E", a: 1},
{o: 188.264, f: 197.54, l: "A", a: 0},
{o: 197.54, f: 200.492, l: "D", a: 1},
{o: 200.492, f: 204.333, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000363.ogg";

var artist = "Kelis";

var track = "Attention featuring Raphael Saadiq ";
