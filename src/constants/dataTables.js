import React from 'react';

export default {

a:  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
b:  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25, 
    26,27,28,29,30,
    31,32,33,34,34,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49,50,
    51,52,53,54,55,56,57,58,59,60],
b3: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],


aFD:     [ 0.86, 0.81, 0.76, 0.72, 0.68, 0.64, 0.60, 0.57, 0.54, 0.52, 0.45 ],
bFD:     [1, 0.92, 0.84, 0.76, 0.70, 0.65, 0.6, 0.57,0.54, 0,52, 0.49,0.48, 0.46, 0.45,0.44, 0.43,0.42,0.41,0.4,0.4,0.39,0.39,0.39,0.38,0.38,
            0.37,0.37,0.37,0.37,0.37,
            0.36,0.36,0.36,0.36,0.36,0.36,0.36,0.36,0.36,0.36,
            0.35,0.35,0.35,0.35,0.35,0.35,0.35,0.35,0.35,0.35,
            0.34,0.34,0.34,0.34,0.34,0.34,0.34,0.34,0.34,0.34,],
b3FD_less:   [ 0.80, 0.75, 0.70, 0.66, 0.62, 0.59,0.56, 0.53, 0.51, 0.49, 0.47, 0.45 ],
b3FD_more:   [ 1, 1, 0.80, 0.65, 0.55, 0.50, 0.45, 0.43, 0.40, 0.36, 0.35 ],

MotorsMono: [
    {motorCV: 1/4,  one:    0.62,   two:    0.50,  three_four_five: 0.43,  more_five: 0.37 },
    {motorCV: 1/3,  one:    0.73,   two:    0.58,  three_four_five: 0.51,  more_five: 0.44 },
    {motorCV: 1/2,  one:    0.92,   two:    0.74,  three_four_five: 0.64,  more_five: 0.55 },
    {motorCV: 3/4,  one:    1.24,   two:    0.99,  three_four_five: 0.87,  more_five: 0.74 },
    {motorCV: 1,    one:    1.49,   two:    1.19,  three_four_five: 1.04,  more_five: 0.89 },
    {motorCV: 1.5,  one:    1.93,   two:    1.54,  three_four_five: 1.35,  more_five: 1.16 },
    {motorCV: 2,    one:    2.44,   two:    1.95,  three_four_five: 1.71,  more_five: 1.46 },
    {motorCV: 3,    one:    3.20,   two:    2.56,  three_four_five: 2.24,  more_five: 1.92 },
    {motorCV: 4,    one:    4.15,   two:    3.32,  three_four_five: 2.91,  more_five: 2.49 },
    {motorCV: 5,    one:    5.22,   two:    4.18,  three_four_five: 3.65,  more_five: 3.13 },
    {motorCV: 7.5,  one:    7.94,   two:    6.35,  three_four_five: 5.56,  more_five: 4.76 },
    {motorCV: 10,   one:    10.04,  two:    8.03,  three_four_five: 7.03,  more_five: 6.02 },
    {motorCV: 12.5, one:    13.01,  two:    10.41, three_four_five: 9.11,  more_five: 7.81 },
],


MotorsTri: [
    {motorCV: 1/6,  one:  0.37,     two: 0.30,    three_four_five: 0.26,  more_five: 0.22 },
    {motorCV: 1/4,  one:  0.48,     two: 0.38,    three_four_five: 0.34,  more_five: 0.29 },
    {motorCV: 1/3,  one:  0.56,     two: 0.45,    three_four_five: 0.39,  more_five: 0.34 },
    {motorCV: 1/2,  one:  0.72,     two: 0.58,    three_four_five: 0.50,  more_five: 0.43 },
    {motorCV: 3/4,  one:  1.08,     two: 0.86,    three_four_five: 0.76,  more_five: 0.65 },
    {motorCV: 1,    one:  1.38,     two: 1.10,    three_four_five: 0.97,  more_five: 0.83 },
    {motorCV: 1.5,  one:  2.03,     two: 1.62,    three_four_five: 1.42,  more_five: 1.22 },
    {motorCV: 2,    one:  2.40,     two: 1.92,    three_four_five: 1.68,  more_five: 1.44 },
    {motorCV: 3,    one:  3.64,     two: 2.91,    three_four_five: 2.55,  more_five: 2.18 },
    {motorCV: 4,    one:  4.96,     two: 3.97,    three_four_five: 3.47,  more_five: 2.98 },
    {motorCV: 5,    one:  5.62,     two: 4.50,    three_four_five: 3.93,  more_five: 3.37 },
    {motorCV: 6,    one:  6.49,     two: 5.19,    three_four_five: 4.54,  more_five: 3.89 },
    {motorCV: 7.5,  one:  8.12,     two: 6.50,    three_four_five: 5.68,  more_five: 4.87 },
    {motorCV: 10,   one:  10.76,    two: 8.61,    three_four_five: 7.53,  more_five: 6.46 },
    {motorCV: 12.5, one:  13.25,    two: 10.60,   three_four_five: 9.28,  more_five: 7.95 },
    {motorCV: 15,   one:  14.98,    two: 11.98,   three_four_five: 10.49, more_five: 8.99 },
    {motorCV: 20,   one:  20.67,    two: 16.54,   three_four_five: 14.47, more_five: 12.40},
    {motorCV: 25,   one:  24.66,    two: 19.73,   three_four_five: 17.26, more_five: 14.80},
    {motorCV: 30,   one:  29.59,    two: 23.67,   three_four_five: 20.71, more_five: 17.76},
    {motorCV: 50,   one:  49.27,    two: null,    three_four_five: null,  more_five: null },
    {motorCV: 60,   one:  57.70,    two: null,    three_four_five: null,  more_five: null },
    {motorCV: 75,   one:  70.48,    two: null,    three_four_five: null,  more_five: null },

],

}
