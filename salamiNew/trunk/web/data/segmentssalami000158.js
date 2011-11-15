var data = [
[{o: 0.116, f: 22.173, l: "D", a: 0},
{o: 22.173, f: 43.552, l: "A", a: 1},
{o: 43.552, f: 64.951, l: "E", a: 0},
{o: 64.951, f: 86.434, l: "E", a: 1},
{o: 86.434, f: 108.08, l: "E", a: 0},
{o: 108.08, f: 129.6, l: "E", a: 1},
{o: 129.6, f: 151.216, l: "E", a: 0},
{o: 151.216, f: 172.738, l: "A", a: 1},
{o: 172.738, f: 194.598, l: "E", a: 0},
{o: 194.598, f: 216.305, l: "E", a: 1},
{o: 216.305, f: 237.962, l: "A", a: 0},
{o: 237.962, f: 259.175, l: "A", a: 1},
{o: 259.175, f: 275.176, l: "E", a: 0}],
[{o: 0.004, f: 12.132, l: "E", a: 0},
{o: 12.132, f: 22.116, l: "E", a: 1},
{o: 22.116, f: 43.048, l: "G", a: 0},
{o: 43.048, f: 54.02, l: "G", a: 1},
{o: 54.02, f: 64.072, l: "G", a: 0},
{o: 64.072, f: 81.108, l: "B", a: 1},
{o: 81.108, f: 94.536, l: "G", a: 0},
{o: 94.536, f: 107.804, l: "B", a: 1},
{o: 107.804, f: 128.656, l: "A", a: 0},
{o: 128.656, f: 150.976, l: "G", a: 1},
{o: 150.976, f: 162.92, l: "G", a: 0},
{o: 162.92, f: 176.948, l: "G", a: 1},
{o: 176.948, f: 192.632, l: "C", a: 0},
{o: 192.632, f: 208.424, l: "G", a: 1},
{o: 208.424, f: 225.972, l: "B", a: 0},
{o: 225.972, f: 237.736, l: "B", a: 1},
{o: 237.736, f: 247.008, l: "D", a: 0},
{o: 247.008, f: 258.72, l: "F", a: 1},
{o: 258.72, f: 274.948, l: "H", a: 0}],
[{o: 0.004, f: 12.132, l: "E", a: 0},
{o: 12.132, f: 22.116, l: "E", a: 1},
{o: 22.116, f: 43.048, l: "G", a: 0},
{o: 43.048, f: 54.02, l: "D", a: 1},
{o: 54.02, f: 64.072, l: "D", a: 0},
{o: 64.072, f: 81.108, l: "B", a: 1},
{o: 81.108, f: 94.536, l: "F", a: 0},
{o: 94.536, f: 107.804, l: "B", a: 1},
{o: 107.804, f: 128.656, l: "H", a: 0},
{o: 128.656, f: 150.976, l: "C", a: 1},
{o: 150.976, f: 162.92, l: "G", a: 0},
{o: 162.92, f: 176.948, l: "F", a: 1},
{o: 176.948, f: 192.632, l: "I", a: 0},
{o: 192.632, f: 208.424, l: "C", a: 1},
{o: 208.424, f: 225.972, l: "A", a: 0},
{o: 225.972, f: 237.736, l: "A", a: 1},
{o: 237.736, f: 247.008, l: "J", a: 0},
{o: 247.008, f: 258.72, l: "K", a: 1},
{o: 258.72, f: 274.948, l: "L", a: 0}],
[{o: 0.707, f: 7.2, l: "2", a: 0},
{o: 7.2, f: 21.907, l: "1", a: 1},
{o: 21.907, f: 37.907, l: "3", a: 0},
{o: 37.907, f: 62.52, l: "1", a: 1},
{o: 62.52, f: 71.44, l: "3", a: 0},
{o: 71.44, f: 82.68, l: "1", a: 1},
{o: 82.68, f: 92.067, l: "2", a: 0},
{o: 92.067, f: 106.48, l: "1", a: 1},
{o: 106.48, f: 113.6, l: "2", a: 0},
{o: 113.6, f: 126.693, l: "1", a: 1},
{o: 126.693, f: 150.08, l: "2", a: 0},
{o: 150.08, f: 157.28, l: "3", a: 1},
{o: 157.28, f: 164.987, l: "1", a: 0},
{o: 164.987, f: 171.733, l: "2", a: 1},
{o: 171.733, f: 178.56, l: "4", a: 0},
{o: 178.56, f: 193.973, l: "1", a: 1},
{o: 193.973, f: 200.293, l: "2", a: 0},
{o: 200.293, f: 215.173, l: "1", a: 1},
{o: 215.173, f: 222.373, l: "3", a: 0},
{o: 222.373, f: 237.28, l: "2", a: 1},
{o: 237.28, f: 256.28, l: "5", a: 0},
{o: 256.28, f: 261.227, l: "6", a: 1},
{o: 261.227, f: 265.707, l: "4", a: 0},
{o: 265.707, f: 270.227, l: "8", a: 1},
{o: 270.227, f: 274.52, l: "7", a: 0}],
[{o: 0, f: 12.665, l: "a", a: 0},
{o: 12.665, f: 29.055, l: "b", a: 1},
{o: 29.055, f: 74.5, l: "c", a: 0},
{o: 74.5, f: 93.125, l: "d", a: 1},
{o: 93.125, f: 141.55, l: "c", a: 0},
{o: 141.55, f: 158.685, l: "b", a: 1},
{o: 158.685, f: 204.875, l: "c", a: 0},
{o: 204.875, f: 223.5, l: "d", a: 1},
{o: 223.5, f: 274.905, l: "c", a: 0}],
[{o: 0, f: 36.815, l: "n1", a: 0},
{o: 36.815, f: 49.366, l: "A", a: 1},
{o: 49.366, f: 79.795, l: "n2", a: 0},
{o: 79.795, f: 92.346, l: "A", a: 1},
{o: 92.346, f: 101.332, l: "n3", a: 0},
{o: 101.332, f: 113.905, l: "A", a: 1},
{o: 113.905, f: 122.892, l: "n4", a: 0},
{o: 122.892, f: 135.442, l: "A", a: 1},
{o: 135.442, f: 144.486, l: "n5", a: 0},
{o: 144.486, f: 157.106, l: "A", a: 1},
{o: 157.106, f: 166.127, l: "n6", a: 0},
{o: 166.127, f: 178.794, l: "A", a: 1},
{o: 178.794, f: 187.896, l: "n7", a: 0},
{o: 187.896, f: 200.562, l: "A", a: 1},
{o: 200.562, f: 209.607, l: "n8", a: 0},
{o: 209.607, f: 222.192, l: "A", a: 1},
{o: 222.192, f: 252.598, l: "n9", a: 0},
{o: 252.598, f: 265.056, l: "A", a: 1},
{o: 265.056, f: 274.971, l: "n10", a: 0}],
[{o: 0, f: 0.004, l: "E", a: 0},
{o: 0.004, f: 0.424, l: "B", a: 1},
{o: 0.424, f: 273.376, l: "C", a: 0},
{o: 273.376, f: 274.948, l: "D", a: 1},
{o: 274.948, f: 275.175, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000158.ogg";

var artist = "Paul Butterfield Blues Band";

var track = "Screamin ";
