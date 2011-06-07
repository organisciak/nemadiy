var data = [
[{o: 0.255, f: 7.844, l: "A", a: 0},
{o: 7.844, f: 34.8, l: "B", a: 1},
{o: 34.8, f: 62.334, l: "B", a: 0},
{o: 62.334, f: 89.673, l: "B", a: 1},
{o: 89.673, f: 117.146, l: "B", a: 0},
{o: 117.146, f: 150.868, l: "C", a: 1},
{o: 150.868, f: 182.986, l: "B", a: 0},
{o: 182.986, f: 189.405, l: "Z", a: 1}],
[{o: 0.152, f: 13.656, l: "D", a: 0},
{o: 13.656, f: 20.688, l: "D", a: 1},
{o: 20.688, f: 41.56, l: "B", a: 0},
{o: 41.56, f: 51.016, l: "D", a: 1},
{o: 51.016, f: 61.332, l: "B", a: 0},
{o: 61.332, f: 74.984, l: "E", a: 1},
{o: 74.984, f: 89.924, l: "D", a: 0},
{o: 89.924, f: 97.3, l: "D", a: 1},
{o: 97.3, f: 113.24, l: "D", a: 0},
{o: 113.24, f: 131.648, l: "E", a: 1},
{o: 131.648, f: 141.1, l: "D", a: 0},
{o: 141.1, f: 150.296, l: "D", a: 1},
{o: 150.296, f: 158.448, l: "A", a: 0},
{o: 158.448, f: 167.792, l: "C", a: 1},
{o: 167.792, f: 182.444, l: "F", a: 0},
{o: 182.444, f: 188.964, l: "A", a: 1}],
[{o: 0.152, f: 13.656, l: "D", a: 0},
{o: 13.656, f: 20.688, l: "C", a: 1},
{o: 20.688, f: 41.56, l: "B", a: 0},
{o: 41.56, f: 51.016, l: "C", a: 1},
{o: 51.016, f: 61.332, l: "B", a: 0},
{o: 61.332, f: 74.984, l: "E", a: 1},
{o: 74.984, f: 89.924, l: "A", a: 0},
{o: 89.924, f: 97.3, l: "F", a: 1},
{o: 97.3, f: 113.24, l: "A", a: 0},
{o: 113.24, f: 131.648, l: "E", a: 1},
{o: 131.648, f: 141.1, l: "C", a: 0},
{o: 141.1, f: 150.296, l: "C", a: 1},
{o: 150.296, f: 158.448, l: "G", a: 0},
{o: 158.448, f: 167.792, l: "H", a: 1},
{o: 167.792, f: 182.444, l: "I", a: 0},
{o: 182.444, f: 188.964, l: "J", a: 1}],
[{o: 0.893, f: 12.36, l: "7", a: 0},
{o: 12.36, f: 31.773, l: "1", a: 1},
{o: 31.773, f: 42.04, l: "8", a: 0},
{o: 42.04, f: 60.093, l: "1", a: 1},
{o: 60.093, f: 113.96, l: "2", a: 0},
{o: 113.96, f: 148.76, l: "3", a: 1},
{o: 148.76, f: 162.733, l: "4", a: 0},
{o: 162.733, f: 176.12, l: "6", a: 1},
{o: 176.12, f: 188.813, l: "5", a: 0}],
[{o: 0, f: 17.88, l: "a", a: 0},
{o: 17.88, f: 28.31, l: "b", a: 1},
{o: 28.31, f: 73.01, l: "c", a: 0},
{o: 73.01, f: 83.44, l: "b", a: 1},
{o: 83.44, f: 108.77, l: "d", a: 0},
{o: 108.77, f: 113.24, l: "b", a: 1},
{o: 113.24, f: 188.485, l: "e", a: 0}],
[{o: 0, f: 189.138, l: "A", a: 0},
{o: 0.255, f: 189.15, l: "A", a: 1}],
[{o: 0, f: 0.048, l: "J", a: 0},
{o: 0.048, f: 19.328, l: "D", a: 1},
{o: 19.328, f: 74.668, l: "C", a: 0},
{o: 74.668, f: 120.688, l: "A", a: 1},
{o: 120.688, f: 149.888, l: "G", a: 0},
{o: 149.888, f: 169.572, l: "B", a: 1},
{o: 169.572, f: 188.964, l: "I", a: 0},
{o: 188.964, f: 189.389, l: "J", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000573.ogg";
