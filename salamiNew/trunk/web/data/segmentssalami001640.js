var data = [
[{o: 1.72, f: 21.215, l: "Z", a: 0},
{o: 21.215, f: 43.554, l: "A", a: 1},
{o: 43.554, f: 66.169, l: "B", a: 0},
{o: 66.169, f: 81.339, l: "C", a: 1},
{o: 81.339, f: 96.336, l: "D", a: 0},
{o: 96.336, f: 118.857, l: "B", a: 1},
{o: 118.857, f: 133.965, l: "C", a: 0},
{o: 133.965, f: 148.569, l: "D", a: 1},
{o: 148.569, f: 170.898, l: "B", a: 0},
{o: 170.898, f: 186.704, l: "C", a: 1},
{o: 186.704, f: 192.418, l: "Z", a: 0}],
[{o: 0.112, f: 10.844, l: "B", a: 0},
{o: 10.844, f: 20.064, l: "A", a: 1},
{o: 20.064, f: 28.86, l: "A", a: 0},
{o: 28.86, f: 42.332, l: "A", a: 1},
{o: 42.332, f: 59.324, l: "A", a: 0},
{o: 59.324, f: 76.912, l: "A", a: 1},
{o: 76.912, f: 94.108, l: "A", a: 0},
{o: 94.108, f: 112.864, l: "A", a: 1},
{o: 112.864, f: 129.372, l: "A", a: 0},
{o: 129.372, f: 145.1, l: "A", a: 1},
{o: 145.1, f: 153.408, l: "A", a: 0},
{o: 153.408, f: 165.072, l: "A", a: 1},
{o: 165.072, f: 179.16, l: "A", a: 0},
{o: 179.16, f: 186.688, l: "A", a: 1},
{o: 186.688, f: 192.292, l: "A", a: 0}],
[{o: 0.112, f: 10.844, l: "C", a: 0},
{o: 10.844, f: 20.064, l: "A", a: 1},
{o: 20.064, f: 28.86, l: "E", a: 0},
{o: 28.86, f: 42.332, l: "D", a: 1},
{o: 42.332, f: 59.324, l: "D", a: 0},
{o: 59.324, f: 76.912, l: "D", a: 1},
{o: 76.912, f: 94.108, l: "D", a: 0},
{o: 94.108, f: 112.864, l: "F", a: 1},
{o: 112.864, f: 129.372, l: "D", a: 0},
{o: 129.372, f: 145.1, l: "B", a: 1},
{o: 145.1, f: 153.408, l: "B", a: 0},
{o: 153.408, f: 165.072, l: "D", a: 1},
{o: 165.072, f: 179.16, l: "D", a: 0},
{o: 179.16, f: 186.688, l: "G", a: 1},
{o: 186.688, f: 192.292, l: "A", a: 0}],
[{o: 0.68, f: 1.853, l: "8", a: 0},
{o: 1.853, f: 10.96, l: "5", a: 1},
{o: 10.96, f: 20.2, l: "4", a: 0},
{o: 20.2, f: 28.16, l: "7", a: 1},
{o: 28.16, f: 43.533, l: "3", a: 0},
{o: 43.533, f: 62.413, l: "1", a: 1},
{o: 62.413, f: 79.48, l: "2", a: 0},
{o: 79.48, f: 95.267, l: "3", a: 1},
{o: 95.267, f: 115.933, l: "1", a: 0},
{o: 115.933, f: 131.013, l: "2", a: 1},
{o: 131.013, f: 147.627, l: "3", a: 0},
{o: 147.627, f: 167.613, l: "1", a: 1},
{o: 167.613, f: 184.133, l: "2", a: 0},
{o: 184.133, f: 192.227, l: "6", a: 1}],
[{o: 0, f: 20.86, l: "a", a: 0},
{o: 20.86, f: 61.09, l: "b", a: 1},
{o: 61.09, f: 73.01, l: "c", a: 0},
{o: 73.01, f: 114.73, l: "b", a: 1},
{o: 114.73, f: 125.905, l: "c", a: 0},
{o: 125.905, f: 166.88, l: "b", a: 1},
{o: 166.88, f: 191.465, l: "d", a: 0}],
[{o: 0, f: 22.802, l: "n1", a: 0},
{o: 22.802, f: 58.398, l: "A", a: 1},
{o: 58.398, f: 75.059, l: "B", a: 0},
{o: 75.059, f: 111.003, l: "A", a: 1},
{o: 111.003, f: 128, l: "B", a: 0},
{o: 128, f: 163.248, l: "A", a: 1},
{o: 163.248, f: 178.503, l: "B", a: 0},
{o: 178.503, f: 192.122, l: "n5", a: 1}],
[{o: 0, f: 0.032, l: "G", a: 0},
{o: 0.032, f: 0.032, l: "B", a: 1},
{o: 0.032, f: 13.876, l: "A", a: 0},
{o: 13.876, f: 66.676, l: "F", a: 1},
{o: 66.676, f: 75.512, l: "D", a: 0},
{o: 75.512, f: 96.444, l: "F", a: 1},
{o: 96.444, f: 119.22, l: "E", a: 0},
{o: 119.22, f: 127.964, l: "D", a: 1},
{o: 127.964, f: 150.88, l: "F", a: 0},
{o: 150.88, f: 171.348, l: "E", a: 1},
{o: 171.348, f: 191.104, l: "D", a: 0},
{o: 191.104, f: 192.292, l: "C", a: 1},
{o: 192.292, f: 192.334, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001640.ogg";

var artist = "Missing String Band";

var track = "The Trouble That Im In";
