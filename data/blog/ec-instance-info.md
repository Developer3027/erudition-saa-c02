## General Purpose EC2 instances

T2, M5, M4, M3

The T2 instance is the only type that give burst capabilities in general purpose. General purpose instance are good all round machines and are often used for testing, prototyping, development builds.

## CPU - Intensive

C5, C4, C3

Compute classes. Media coding, intensive batch jobs, Game servers, many concurrent users

## Memory Intensive

X1e, X1, R4, R3

Used for high memory demand instances. High memory requirements. Big data processing, Large data sets. If you are pulling large amounts of data into memory.

## Storage Instances

H1, I3, D2

These instance are optimized for storage access. High sequential read/write to local storage.

## Specialty Instances

P3, P2, G3, F1

These instances support specialty hardware like GPUs and FPGAs. Use for graphics processing, or Field Programmable Gate Array.

## Expense
3 considerations when thinking cost. All three combined are your total cost.
1. Time the instance is running.
2. The appropriate storage.
3. The appropriate network throughput.


* On-demand
  * pay for the time it runs. Up and running in min and second.
  * billed in 60sec increments, rounded up. Run for 2min 20sec, you are billed for 3min.
* Reserved
  * calculate time in hours for 1 or 3 years.
  * will save vs on-demand.
* Spot
  * cheapest option.
  * varies with demand of compute.
  * good for overnight batch jobs when demand is low.

## EBS I/O