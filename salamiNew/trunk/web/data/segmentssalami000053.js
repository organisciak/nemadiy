var data = [
[{o: 0.041, f: 28.337, l: "A", a: 0},
{o: 28.337, f: 86.148, l: "A'", a: 1},
{o: 86.148, f: 102.479, l: "B", a: 0},
{o: 102.479, f: 123.073, l: "C", a: 1},
{o: 123.073, f: 143.408, l: "B'", a: 0},
{o: 143.408, f: 196.683, l: "D", a: 1},
{o: 196.683, f: 270.537, l: "E", a: 0},
{o: 270.537, f: 306.689, l: "F", a: 1},
{o: 306.689, f: 322.803, l: "B", a: 0},
{o: 322.803, f: 348.188, l: "C", a: 1}],
[{o: 0.06, f: 18.912, l: "C", a: 0},
{o: 18.912, f: 38.348, l: "C", a: 1},
{o: 38.348, f: 47.464, l: "C", a: 0},
{o: 47.464, f: 63.892, l: "C", a: 1},
{o: 63.892, f: 88.216, l: "C", a: 0},
{o: 88.216, f: 105.744, l: "D", a: 1},
{o: 105.744, f: 126.192, l: "D", a: 0},
{o: 126.192, f: 144.04, l: "D", a: 1},
{o: 144.04, f: 169.948, l: "B", a: 0},
{o: 169.948, f: 197.308, l: "B", a: 1},
{o: 197.308, f: 211.28, l: "A", a: 0},
{o: 211.28, f: 230.536, l: "A", a: 1},
{o: 230.536, f: 254.864, l: "A", a: 0},
{o: 254.864, f: 270.844, l: "E", a: 1},
{o: 270.844, f: 288.688, l: "D", a: 0},
{o: 288.688, f: 304.056, l: "D", a: 1},
{o: 304.056, f: 321.98, l: "D", a: 0},
{o: 321.98, f: 348.044, l: "D", a: 1}],
[{o: 0.06, f: 18.912, l: "E", a: 0},
{o: 18.912, f: 38.348, l: "C", a: 1},
{o: 38.348, f: 47.464, l: "C", a: 0},
{o: 47.464, f: 63.892, l: "C", a: 1},
{o: 63.892, f: 88.216, l: "C", a: 0},
{o: 88.216, f: 105.744, l: "F", a: 1},
{o: 105.744, f: 126.192, l: "D", a: 0},
{o: 126.192, f: 144.04, l: "G", a: 1},
{o: 144.04, f: 169.948, l: "B", a: 0},
{o: 169.948, f: 197.308, l: "B", a: 1},
{o: 197.308, f: 211.28, l: "A", a: 0},
{o: 211.28, f: 230.536, l: "A", a: 1},
{o: 230.536, f: 254.864, l: "A", a: 0},
{o: 254.864, f: 270.844, l: "H", a: 1},
{o: 270.844, f: 288.688, l: "I", a: 0},
{o: 288.688, f: 304.056, l: "J", a: 1},
{o: 304.056, f: 321.98, l: "D", a: 0},
{o: 321.98, f: 348.044, l: "D", a: 1}],
[{o: 0.493, f: 3.147, l: "8", a: 0},
{o: 3.147, f: 43.467, l: "2", a: 1},
{o: 43.467, f: 57.467, l: "4", a: 0},
{o: 57.467, f: 66.8, l: "2", a: 1},
{o: 66.8, f: 72.933, l: "4", a: 0},
{o: 72.933, f: 86.867, l: "2", a: 1},
{o: 86.867, f: 123.747, l: "1", a: 0},
{o: 123.747, f: 144.067, l: "2", a: 1},
{o: 144.067, f: 164.587, l: "1", a: 0},
{o: 164.587, f: 179.013, l: "7", a: 1},
{o: 179.013, f: 193.813, l: "1", a: 0},
{o: 193.813, f: 255.573, l: "3", a: 1},
{o: 255.573, f: 271.173, l: "6", a: 0},
{o: 271.173, f: 297.893, l: "1", a: 1},
{o: 297.893, f: 306.427, l: "5", a: 0},
{o: 306.427, f: 343.653, l: "1", a: 1},
{o: 343.653, f: 347.88, l: "5", a: 0}],
[{o: 0, f: 42.465, l: "a", a: 0},
{o: 42.465, f: 83.44, l: "a", a: 1},
{o: 83.44, f: 210.835, l: "b", a: 0},
{o: 210.835, f: 233.93, l: "c", a: 1},
{o: 233.93, f: 255.535, l: "c", a: 0},
{o: 255.535, f: 347.915, l: "d", a: 1}],
[{o: 0, f: 4.934, l: "n1", a: 0},
{o: 4.934, f: 21.084, l: "A", a: 1},
{o: 21.084, f: 37.57, l: "A", a: 0},
{o: 37.57, f: 45.801, l: "n2", a: 1},
{o: 45.801, f: 62.346, l: "A", a: 0},
{o: 62.346, f: 78.843, l: "A", a: 1},
{o: 78.843, f: 86.61, l: "n3", a: 0},
{o: 86.61, f: 127.57, l: "B", a: 1},
{o: 127.57, f: 168.031, l: "n4", a: 0},
{o: 168.031, f: 180.57, l: "D", a: 1},
{o: 180.57, f: 191.274, l: "D", a: 0},
{o: 191.274, f: 203.523, l: "n6", a: 1},
{o: 203.523, f: 216.468, l: "C", a: 0},
{o: 216.468, f: 225.605, l: "n7", a: 1},
{o: 225.605, f: 240.35, l: "C", a: 0},
{o: 240.35, f: 253.365, l: "C", a: 1},
{o: 253.365, f: 305.099, l: "n9", a: 0},
{o: 305.099, f: 347.788, l: "B", a: 1}],
[{o: 0, f: 0.056, l: "E", a: 0},
{o: 0.056, f: 87.352, l: "D", a: 1},
{o: 87.352, f: 196.324, l: "A", a: 0},
{o: 196.324, f: 272.4, l: "B", a: 1},
{o: 272.4, f: 301.82, l: "C", a: 0},
{o: 301.82, f: 347.952, l: "A", a: 1},
{o: 347.952, f: 348.114, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000053.ogg";

var artist = "Acoustic Manner";

var track = "Roots";
