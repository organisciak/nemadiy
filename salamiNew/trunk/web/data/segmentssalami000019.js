var data = [
[{o: 0.35, f: 4.876, l: "A", a: 0},
{o: 4.876, f: 28.661, l: "B", a: 1},
{o: 28.661, f: 36.576, l: "C", a: 0},
{o: 36.576, f: 40.543, l: "A", a: 1},
{o: 40.543, f: 63.987, l: "B", a: 0},
{o: 63.987, f: 71.921, l: "C", a: 1},
{o: 71.921, f: 87.333, l: "D", a: 0},
{o: 87.333, f: 111.088, l: "B", a: 1},
{o: 111.088, f: 118.943, l: "C", a: 0},
{o: 118.943, f: 134.639, l: "D", a: 1},
{o: 134.639, f: 158.524, l: "B", a: 0},
{o: 158.524, f: 174.955, l: "C", a: 1}],
[{o: 0.184, f: 6.24, l: "A", a: 0},
{o: 6.24, f: 17.176, l: "C", a: 1},
{o: 17.176, f: 36.052, l: "C", a: 0},
{o: 36.052, f: 44.744, l: "C", a: 1},
{o: 44.744, f: 62.684, l: "B", a: 0},
{o: 62.684, f: 69.672, l: "C", a: 1},
{o: 69.672, f: 89.068, l: "C", a: 0},
{o: 89.068, f: 105.86, l: "B", a: 1},
{o: 105.86, f: 115.972, l: "C", a: 0},
{o: 115.972, f: 122.196, l: "C", a: 1},
{o: 122.196, f: 132.556, l: "C", a: 0},
{o: 132.556, f: 145.036, l: "C", a: 1},
{o: 145.036, f: 157.988, l: "B", a: 0},
{o: 157.988, f: 165.392, l: "B", a: 1},
{o: 165.392, f: 173.3, l: "B", a: 0}],
[{o: 0.184, f: 6.24, l: "C", a: 0},
{o: 6.24, f: 17.176, l: "D", a: 1},
{o: 17.176, f: 36.052, l: "A", a: 0},
{o: 36.052, f: 44.744, l: "E", a: 1},
{o: 44.744, f: 62.684, l: "F", a: 0},
{o: 62.684, f: 69.672, l: "A", a: 1},
{o: 69.672, f: 89.068, l: "A", a: 0},
{o: 89.068, f: 105.86, l: "G", a: 1},
{o: 105.86, f: 115.972, l: "A", a: 0},
{o: 115.972, f: 122.196, l: "A", a: 1},
{o: 122.196, f: 132.556, l: "A", a: 0},
{o: 132.556, f: 145.036, l: "A", a: 1},
{o: 145.036, f: 157.988, l: "H", a: 0},
{o: 157.988, f: 165.392, l: "B", a: 1},
{o: 165.392, f: 173.3, l: "B", a: 0}],
[{o: 0.413, f: 7.453, l: "4", a: 0},
{o: 7.453, f: 13.947, l: "7", a: 1},
{o: 13.947, f: 27.867, l: "1", a: 0},
{o: 27.867, f: 37.307, l: "2", a: 1},
{o: 37.307, f: 43.253, l: "4", a: 0},
{o: 43.253, f: 63.2, l: "1", a: 1},
{o: 63.2, f: 86.067, l: "3", a: 0},
{o: 86.067, f: 94.893, l: "6", a: 1},
{o: 94.893, f: 108.787, l: "5", a: 0},
{o: 108.787, f: 120.213, l: "2", a: 1},
{o: 120.213, f: 133.307, l: "3", a: 0},
{o: 133.307, f: 157.72, l: "1", a: 1},
{o: 157.72, f: 171.56, l: "2", a: 0},
{o: 171.56, f: 173.613, l: "8", a: 1}],
[{o: 0, f: 40.23, l: "a", a: 0},
{o: 40.23, f: 68.54, l: "a", a: 1},
{o: 68.54, f: 88.655, l: "b", a: 0},
{o: 88.655, f: 120.69, l: "a", a: 1},
{o: 120.69, f: 132.61, l: "c", a: 0},
{o: 132.61, f: 140.805, l: "d", a: 1},
{o: 140.805, f: 174.33, l: "a", a: 0}],
[{o: 0, f: 7.732, l: "n1", a: 0},
{o: 7.732, f: 35.585, l: "A", a: 1},
{o: 35.585, f: 43.038, l: "n2", a: 0},
{o: 43.038, f: 70.914, l: "A", a: 1},
{o: 70.914, f: 90.326, l: "B", a: 0},
{o: 90.326, f: 117.969, l: "A", a: 1},
{o: 117.969, f: 131.634, l: "B", a: 0},
{o: 131.634, f: 137.625, l: "n4", a: 1},
{o: 137.625, f: 165.407, l: "A", a: 0},
{o: 165.407, f: 174.66, l: "n5", a: 1}],
[{o: 0, f: 0.184, l: "F", a: 0},
{o: 0.184, f: 0.184, l: "B", a: 1},
{o: 0.184, f: 19.908, l: "A", a: 0},
{o: 19.908, f: 34.788, l: "D", a: 1},
{o: 34.788, f: 55.212, l: "A", a: 0},
{o: 55.212, f: 70.136, l: "D", a: 1},
{o: 70.136, f: 91.992, l: "E", a: 0},
{o: 91.992, f: 102.332, l: "C", a: 1},
{o: 102.332, f: 117.204, l: "D", a: 0},
{o: 117.204, f: 139.34, l: "E", a: 1},
{o: 139.34, f: 149.78, l: "C", a: 0},
{o: 149.78, f: 164.652, l: "D", a: 1},
{o: 164.652, f: 173.3, l: "B", a: 0},
{o: 173.3, f: 174.893, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000019.ogg";

var artist = "Beatles";

var track = "CD2 - 10 - Savoy Truffle";
