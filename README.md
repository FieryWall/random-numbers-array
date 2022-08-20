# Rundom numbers array program
## Run program
Generate 10000 numbers array (default)
```sh
npm run exec
```
To generate 100 numbers array
```sh
npm run exec 100
```
and write to `./out/nums.txt`
```sh
npm run exec 100 f
```
## Test program
Performance compare with classic algorithm
```sh
npm run perf
```
Distribution balance check
```sh
npm run dist
```
Test conditions of output result
```sh
npm run test
```
every script may receive optional length of Array
```sh
npm run perf 3546
```

## Description
The main idea to avoid calling Math.random() function for each number by skipping those one which already swapped by targeting of previous iterations.
Also, it's important to don't lost equal probability to receive each number for every cell.