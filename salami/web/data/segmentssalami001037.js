var data = [
[{o: 0.048, f: 22.738, l: "A", a: 0},
{o: 22.738, f: 39.231, l: "B", a: 1},
{o: 39.231, f: 55.826, l: "D", a: 0},
{o: 55.826, f: 89.251, l: "B", a: 1},
{o: 89.251, f: 106.337, l: "C", a: 0},
{o: 106.337, f: 122.813, l: "D", a: 1},
{o: 122.813, f: 156.221, l: "B", a: 0},
{o: 156.221, f: 172.776, l: "B", a: 1},
{o: 172.776, f: 190.457, l: "C", a: 0},
{o: 190.457, f: 206.506, l: "D", a: 1},
{o: 206.506, f: 239.967, l: "B", a: 0},
{o: 239.967, f: 256.77, l: "B", a: 1},
{o: 256.77, f: 277.356, l: "C", a: 0},
{o: 277.356, f: 306.108, l: "Z", a: 1}],
[{o: 0.04, f: 9.912, l: "B", a: 0},
{o: 9.912, f: 36.608, l: "B", a: 1},
{o: 36.608, f: 62.02, l: "B", a: 0},
{o: 62.02, f: 79.188, l: "B", a: 1},
{o: 79.188, f: 104.16, l: "B", a: 0},
{o: 104.16, f: 122.224, l: "B", a: 1},
{o: 122.224, f: 136.76, l: "B", a: 0},
{o: 136.76, f: 155.096, l: "B", a: 1},
{o: 155.096, f: 171.124, l: "B", a: 0},
{o: 171.124, f: 187.328, l: "B", a: 1},
{o: 187.328, f: 198.18, l: "A", a: 0},
{o: 198.18, f: 221.004, l: "B", a: 1},
{o: 221.004, f: 230.488, l: "C", a: 0},
{o: 230.488, f: 255.608, l: "B", a: 1},
{o: 255.608, f: 271.292, l: "B", a: 0},
{o: 271.292, f: 287.132, l: "D", a: 1},
{o: 287.132, f: 305.568, l: "E", a: 0}],
[{o: 0.04, f: 9.912, l: "D", a: 0},
{o: 9.912, f: 36.608, l: "B", a: 1},
{o: 36.608, f: 62.02, l: "B", a: 0},
{o: 62.02, f: 79.188, l: "C", a: 1},
{o: 79.188, f: 104.16, l: "A", a: 0},
{o: 104.16, f: 122.224, l: "E", a: 1},
{o: 122.224, f: 136.76, l: "C", a: 0},
{o: 136.76, f: 155.096, l: "B", a: 1},
{o: 155.096, f: 171.124, l: "C", a: 0},
{o: 171.124, f: 187.328, l: "A", a: 1},
{o: 187.328, f: 198.18, l: "F", a: 0},
{o: 198.18, f: 221.004, l: "B", a: 1},
{o: 221.004, f: 230.488, l: "G", a: 0},
{o: 230.488, f: 255.608, l: "B", a: 1},
{o: 255.608, f: 271.292, l: "H", a: 0},
{o: 271.292, f: 287.132, l: "I", a: 1},
{o: 287.132, f: 305.568, l: "J", a: 0}],
[{o: 0.6, f: 6.04, l: "8", a: 0},
{o: 6.04, f: 38.467, l: "1", a: 1},
{o: 38.467, f: 51.907, l: "3", a: 0},
{o: 51.907, f: 87.867, l: "4", a: 1},
{o: 87.867, f: 103.867, l: "2", a: 0},
{o: 103.867, f: 118.867, l: "3", a: 1},
{o: 118.867, f: 147.547, l: "1", a: 0},
{o: 147.547, f: 156.907, l: "3", a: 1},
{o: 156.907, f: 171.427, l: "1", a: 0},
{o: 171.427, f: 190.147, l: "2", a: 1},
{o: 190.147, f: 206.707, l: "1", a: 0},
{o: 206.707, f: 214.547, l: "4", a: 1},
{o: 214.547, f: 255.4, l: "1", a: 0},
{o: 255.4, f: 275.067, l: "2", a: 1},
{o: 275.067, f: 287.96, l: "5", a: 0},
{o: 287.96, f: 297.6, l: "6", a: 1},
{o: 297.6, f: 305.853, l: "7", a: 0}],
[{o: 0, f: 29.055, l: "a", a: 0},
{o: 29.055, f: 107.28, l: "b", a: 1},
{o: 107.28, f: 188.485, l: "b", a: 0},
{o: 188.485, f: 272.67, l: "b", a: 1},
{o: 272.67, f: 305.45, l: "c", a: 0}],
[{o: 0, f: 23.754, l: "n1", a: 0},
{o: 23.754, f: 56.854, l: "A", a: 1},
{o: 56.854, f: 88.143, l: "A", a: 0},
{o: 88.143, f: 107.276, l: "B", a: 1},
{o: 107.276, f: 140.481, l: "A", a: 0},
{o: 140.481, f: 171.688, l: "A", a: 1},
{o: 171.688, f: 190.961, l: "B", a: 0},
{o: 190.961, f: 224.247, l: "A", a: 1},
{o: 224.247, f: 255.652, l: "A", a: 0},
{o: 255.652, f: 272.881, l: "B", a: 1},
{o: 272.881, f: 305.807, l: "n7", a: 0}],
[{o: 0, f: 0.036, l: "G", a: 0},
{o: 0.036, f: 5.312, l: "C", a: 1},
{o: 5.312, f: 88.616, l: "B", a: 0},
{o: 88.616, f: 104.64, l: "F", a: 1},
{o: 104.64, f: 117.328, l: "E", a: 0},
{o: 117.328, f: 143.024, l: "B", a: 1},
{o: 143.024, f: 152.504, l: "E", a: 0},
{o: 152.504, f: 172.452, l: "B", a: 1},
{o: 172.452, f: 187.576, l: "F", a: 0},
{o: 187.576, f: 202.852, l: "B", a: 1},
{o: 202.852, f: 211.148, l: "E", a: 0},
{o: 211.148, f: 254.54, l: "B", a: 1},
{o: 254.54, f: 290.296, l: "F", a: 0},
{o: 290.296, f: 305.572, l: "D", a: 1},
{o: 305.572, f: 305.96, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001037.ogg";
