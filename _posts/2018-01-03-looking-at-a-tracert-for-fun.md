---
layout: post
title: Taking apart a Tracert
---

Running a traceroute is a computer network diagnostic tool for displaying the route or path which is used in measuring transit delays of packets across an network. So lets break one down and review it:

## Consider the following information 


-  1    <1 ms    <1 ms    <1 ms  pf.local [192.168.1.1]

-  2     1 ms    <1 ms    <1 ms  192.168.0.1

-  3     9 ms    17 ms     8 ms  10.96.100.1

-  4    11 ms     9 ms    10 ms  68.13.10.204

-  5    21 ms    10 ms    10 ms  68.13.8.253

-  6    25 ms    24 ms    26 ms  dalsbprj01-ae1.0.rd.dl.cox.net [68.1.2.109]

-  7    36 ms    25 ms    25 ms  10ge3-9.core1.dal1.he.net [184.105.41.69]

-  8    55 ms    63 ms    57 ms  100ge4-2.core1.phx2.he.net [184.105.81.173]

-  9    56 ms    56 ms    65 ms  100ge11-2.core1.lax2.he.net [184.105.81.177]

- 10   276 ms   273 ms   255 ms  100ge10-1.core1.hkg1.he.net [184.105.64.126]

- 11   249 ms   249 ms   248 ms  10ge1-4.core1.sin1.he.net [184.105.223.190]

- 12   308 ms   305 ms   309 ms  dhivehi-raajjeyge-gulhan-plc.10gigabitethernet1-1.core1.sin1.he.net [74.82.46.42]

- 13   315 ms   313 ms   308 ms  202.1.206.4

- 14   312 ms   319 ms   309 ms  rd1-131.dhiraagu.com.mv [202.1.205.11]

- 15   307 ms   309 ms   308 ms  27.114.152.1

- 16   316 ms   307 ms   337 ms  202.1.207.147




## So what is it we are looking at here?


- Connection 1 to 6 are within the COX backbone and you exit at the Atlanta connection at connection 6.

- The connection then goes onto the internet backbone under Hurricane Electric starting at Dallas,m TX to Phoenix, AZ to Los Angeles, CA to Hong Kong in Chek Lap Kok via sea cable and finally to Singapore sea cable where it exits Hurricane Electric under connection 12

- The connection to 202.1.206.4 did not return a host address but currently it says it is a Maldives address and looks to follow the same naming convention as connection 14 as rc2-130.dhivehinet.net.mv which leads me to believe it is the same connection backbone.

- Connection 15 looks to be a switch or a router as is named DRGD1-AP under the Router-Loop net name so this makes me think this is local switch before the final connection

- The final address of 202.1.207.147 is a connection with a running ftp server, SMTP and POP email service running, HTTP and HTTPS server running on ports 21, 25, 80, 110
