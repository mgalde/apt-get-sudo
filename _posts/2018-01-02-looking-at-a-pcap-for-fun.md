---
layout: post
title: Taking apart a Pcap
---

## Consider the following PCAP:


Capturing on 'eth0' and 'eth1'

-  1   0.000000 192.168.50.100 -> 192.168.50.3 ICMP 74 Echo (ping) request  id=0x0001, seq=37/9472, ttl=128

-  2   0.000023 192.168.50.3 -> 192.168.50.100 ICMP 74 Echo (ping) reply    id=0x0001, seq=37/9472, ttl=64 (request in 1)

-  3   1.003687 192.168.50.100 -> 192.168.50.3 ICMP 74 Echo (ping) request  id=0x0001, seq=38/9728, ttl=128

-  4   1.003742 192.168.50.3 -> 192.168.50.100 ICMP 74 Echo (ping) reply    id=0x0001, seq=38/9728, ttl=64 (request in 3)

-  5   1.456575    10.0.2.15 -> 192.168.0.1  DNS 87 Standard query 0x8498  PTR 100.50.168.192.in-addr.arpa

-  6   1.457719  192.168.0.1 -> 10.0.2.15    DNS 87 Standard query response 0x8498 No such name

-  7   1.453523 192.168.50.100 -> 192.168.50.3 TCP 66 15195 -> 23 [SYN] Seq=0 Win=8192 Len=0 MSS=1460 WS=256 SACK_PERM=1

-  8   1.453550 192.168.50.3 -> 192.168.50.100 TCP 66 23 -> 15195 [SYN, ACK] Seq=0 Ack=1 Win=29200 Len=0 MSS=1460 SACK_PERM=1 WS=128

-  9   1.453679 192.168.50.100 -> 192.168.50.3 TCP 60 15195 -> 23 [ACK] Seq=1 Ack=1 Win=65536 Len=0

- 10   1.457888 192.168.50.100 -> 192.168.50.3 TELNET 75 Telnet Data ...

- 11   1.457941 192.168.50.3 -> 192.168.50.100 TELNET 66 Telnet Data ...

- 12   1.457970 192.168.50.3 -> 192.168.50.100 TCP 54 23 -> 15195 [ACK] Seq=13 Ack=22 Win=29312 Len=0

- 13   1.458123 192.168.50.100 -> 192.168.50.3 TELNET 60 Telnet Data ...

- 14   1.458184 192.168.50.3 -> 192.168.50.100 TELNET 66 Telnet Data ...

- 15   1.458324 192.168.50.100 -> 192.168.50.3 TELNET 63 Telnet Data ...

- 16   1.458375 192.168.50.3 -> 192.168.50.100 TELNET 72 Telnet Data ...

- 17   1.458506 192.168.50.100 -> 192.168.50.3 TELNET 71 Telnet Data ...

- 18   1.458516 192.168.50.100 -> 192.168.50.3 TELNET 60 Telnet Data ...

- 19   1.458519 192.168.50.100 -> 192.168.50.3 TELNET 65 Telnet Data ...

- 20   1.458570 192.168.50.3 -> 192.168.50.100 TCP 54 23 -> 15195 [ACK] Seq=43 Ack=68 Win=29312 Len=0

- 21   1.458840 192.168.50.3 -> 192.168.50.100 TELNET 63 Telnet Data ...

- 22   1.459007 192.168.50.100 -> 192.168.50.3 TELNET 60 Telnet Data ...

- 23   1.459019 192.168.50.100 -> 192.168.50.3 TELNET 60 Telnet Data ...

- 24   1.459022 192.168.50.100 -> 192.168.50.3 TELNET 60 Telnet Data ...

- 25   1.459080 192.168.50.3 -> 192.168.50.100 TCP 54 23 -> 15195 [ACK] Seq=52 Ack=77 Win=29312 Len=0

- 26   1.459195 192.168.50.3 -> 192.168.50.100 TELNET 68 Telnet Data ...

- 27   1.509853 192.168.50.100 -> 192.168.50.3 TCP 60 15195 -> 23 [ACK] Seq=77 Ack=66 Win=65536 Len=0

- 28   1.509875 192.168.50.3 -> 192.168.50.100 TELNET 65 Telnet Data ...

- 29   1.559926 192.168.50.100 -> 192.168.50.3 TCP 60 15195 -> 23 [ACK] Seq=77 Ack=77 Win=65536 Len=0

- 30   3.867987    10.0.2.15 -> 192.168.0.1  DNS 64 Standard query 0xb4c5  A serv

- 31   3.868051    10.0.2.15 -> 192.168.0.1  DNS 64 Standard query 0x066d  AAAA serv

- 32   3.868908  192.168.0.1 -> 10.0.2.15    DNS 80 Standard query response 0xb4c5  A 192.168.0.50

- 33   3.869077  192.168.0.1 -> 10.0.2.15    DNS 64 Standard query response 0x066d

- 34   3.869193    10.0.2.15 -> 192.168.0.50 TCP 74 55558 -> 32400 [SYN] Seq=0 Win=29200 Len=0 MSS=1460 SACK_PERM=1 TSval=2254760 TSecr=0 WS=128

- 35   3.869619 192.168.0.50 -> 10.0.2.15    TCP 60 32400 -> 55558 [SYN, ACK] Seq=0 Ack=1 Win=65535 Len=0 MSS=1460

- 36   3.869637    10.0.2.15 -> 192.168.0.50 TCP 54 55558 -> 32400 [ACK] Seq=1 Ack=1 Win=3737600 Len=0

- 37   3.869761    10.0.2.15 -> 192.168.0.50 HTTP 205 GET /web/index.html HTTP/1.1

- 38   3.869886 192.168.0.50 -> 10.0.2.15    TCP 60 32400 -> 55558 [ACK] Seq=1 Ack=152 Win=65535 Len=0

- 39   3.871714 192.168.0.50 -> 10.0.2.15    TCP 237 [TCP segment of a reassembled PDU]

- 40   3.871736    10.0.2.15 -> 192.168.0.50 TCP 54 55558 -> 32400 [ACK] Seq=152 Ack=184 Win=3842048 Len=0

- 41   3.871758 192.168.0.50 -> 10.0.2.15    HTTP 2556 HTTP/1.1 200 OK  (text/html)

- 42   3.871766    10.0.2.15 -> 192.168.0.50 TCP 54 55558 -> 32400 [ACK] Seq=152 Ack=2686 Win=4362240 Len=0

- 43   3.872687    10.0.2.15 -> 192.168.0.50 TCP 54 55558 -> 32400 [FIN, ACK] Seq=152 Ack=2686 Win=4362240 Len=0

- 44   3.872763 192.168.0.50 -> 10.0.2.15    TCP 60 32400 -> 55558 [ACK] Seq=2686 Ack=153 Win=65535 Len=0


### ^C44 packets captured


# How would you categorize these?


## Hosts / Probable OS

- 192.168.50.100 (Windows)

- 192.168.50.3 (Linux)

- 10.0.2.15 (Linux)

- 192.168.0.1  (Linux)

- 192.168.0.50 (Windows)


## Timeline:

- 192.168.50.100: pings 192.168.50.3 twice

- 10.0.2.15: requests reverse lookup on 100.50.168.192.in-addr.arpa but not found

- 192.168.50.100: negotiates a communication with 192.168.50.3 and opens a telnet communication on port 15195 to remote port 23

- 10.0.2.15 does DNS look up and is given 192.168.0.50 as a response

- 10.0.2.15 opens a connection to a webserver on 192.168.0.50 and requests the webpage index.html
