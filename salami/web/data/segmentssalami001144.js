var data = [
[{o: 0.039, f: 6.378, l: "Z", a: 0},
{o: 6.378, f: 24.519, l: "A", a: 1},
{o: 24.519, f: 36.017, l: "B", a: 0},
{o: 36.017, f: 53.331, l: "D", a: 1},
{o: 53.331, f: 82.02, l: "B", a: 0},
{o: 82.02, f: 96.895, l: "B", a: 1},
{o: 96.895, f: 141.569, l: "C", a: 0},
{o: 141.569, f: 158.995, l: "D", a: 1},
{o: 158.995, f: 175.664, l: "B", a: 0},
{o: 175.664, f: 197.636, l: "Z", a: 1}],
[{o: 0.048, f: 13.64, l: "E", a: 0},
{o: 13.64, f: 23.732, l: "A", a: 1},
{o: 23.732, f: 38.156, l: "E", a: 0},
{o: 38.156, f: 54.036, l: "E", a: 1},
{o: 54.036, f: 66.304, l: "E", a: 0},
{o: 66.304, f: 75.528, l: "E", a: 1},
{o: 75.528, f: 83.504, l: "E", a: 0},
{o: 83.504, f: 95.156, l: "E", a: 1},
{o: 95.156, f: 107.256, l: "E", a: 0},
{o: 107.256, f: 118.644, l: "E", a: 1},
{o: 118.644, f: 129.32, l: "E", a: 0},
{o: 129.32, f: 138.056, l: "E", a: 1},
{o: 138.056, f: 152.484, l: "E", a: 0},
{o: 152.484, f: 169.108, l: "E", a: 1},
{o: 169.108, f: 174.716, l: "A", a: 0},
{o: 174.716, f: 188.72, l: "E", a: 1},
{o: 188.72, f: 197.416, l: "A", a: 0}],
[{o: 0.048, f: 13.64, l: "E", a: 0},
{o: 13.64, f: 23.732, l: "D", a: 1},
{o: 23.732, f: 38.156, l: "E", a: 0},
{o: 38.156, f: 54.036, l: "E", a: 1},
{o: 54.036, f: 66.304, l: "F", a: 0},
{o: 66.304, f: 75.528, l: "E", a: 1},
{o: 75.528, f: 83.504, l: "E", a: 0},
{o: 83.504, f: 95.156, l: "F", a: 1},
{o: 95.156, f: 107.256, l: "A", a: 0},
{o: 107.256, f: 118.644, l: "A", a: 1},
{o: 118.644, f: 129.32, l: "B", a: 0},
{o: 129.32, f: 138.056, l: "B", a: 1},
{o: 138.056, f: 152.484, l: "C", a: 0},
{o: 152.484, f: 169.108, l: "C", a: 1},
{o: 169.108, f: 174.716, l: "G", a: 0},
{o: 174.716, f: 188.72, l: "E", a: 1},
{o: 188.72, f: 197.416, l: "H", a: 0}],
[{o: 0.76, f: 5.52, l: "8", a: 0},
{o: 5.52, f: 24.08, l: "3", a: 1},
{o: 24.08, f: 54.4, l: "2", a: 0},
{o: 54.4, f: 68.667, l: "1", a: 1},
{o: 68.667, f: 81.707, l: "5", a: 0},
{o: 81.707, f: 97.587, l: "1", a: 1},
{o: 97.587, f: 134.053, l: "2", a: 0},
{o: 134.053, f: 141.933, l: "6", a: 1},
{o: 141.933, f: 160.773, l: "1", a: 0},
{o: 160.773, f: 173.453, l: "3", a: 1},
{o: 173.453, f: 181.08, l: "7", a: 0},
{o: 181.08, f: 197.4, l: "4", a: 1}],
[{o: 0, f: 19.37, l: "a", a: 0},
{o: 19.37, f: 35.76, l: "b", a: 1},
{o: 35.76, f: 53.64, l: "c", a: 0},
{o: 53.64, f: 96.85, l: "d", a: 1},
{o: 96.85, f: 106.535, l: "b", a: 0},
{o: 106.535, f: 122.925, l: "e", a: 1},
{o: 122.925, f: 139.315, l: "b", a: 0},
{o: 139.315, f: 159.43, l: "c", a: 1},
{o: 159.43, f: 196.68, l: "f", a: 0}],
[{o: 0, f: 36.026, l: "n1", a: 0},
{o: 36.026, f: 56.239, l: "A", a: 1},
{o: 56.239, f: 141.607, l: "n2", a: 0},
{o: 141.607, f: 161.89, l: "A", a: 1},
{o: 161.89, f: 197.323, l: "n3", a: 0}],
[{o: 0, f: 0.116, l: "G", a: 0},
{o: 0.116, f: 20.436, l: "E", a: 1},
{o: 20.436, f: 36.352, l: "C", a: 0},
{o: 36.352, f: 57.284, l: "F", a: 1},
{o: 57.284, f: 90.408, l: "D", a: 0},
{o: 90.408, f: 141.908, l: "C", a: 1},
{o: 141.908, f: 158.588, l: "F", a: 0},
{o: 158.588, f: 175.512, l: "C", a: 1},
{o: 175.512, f: 197.096, l: "A", a: 0},
{o: 197.096, f: 197.488, l: "C", a: 1},
{o: 197.488, f: 197.533, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001144.ogg";
