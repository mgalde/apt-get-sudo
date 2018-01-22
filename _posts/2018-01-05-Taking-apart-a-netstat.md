---
layout: post
title: Taking apart a Netstat
---
Running a netstat is a command-line network utility tool that displays network connections for a number of network interface and network protocol statistics. Lets break one down and review it.

**Take the following exapmple**

  | Protocol         | Source            | Destination     | Activity        | Location        |
  | :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
  | TCP              | 0.0.0.0:111       | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 0.0.0.0:135       | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 0.0.0.0:445       | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 0.0.0.0:2179      | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 0.0.0.0:3389      | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 0.0.0.0:4242      | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 0.0.0.0:7969      | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 0.0.0.0:8000      | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 0.0.0.0:8081      | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 0.0.0.0:8082      | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 0.0.0.0:8866      | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 0.0.0.0:8968      | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 0.0.0.0:50627     | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 127.0.0.1:2049    | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 127.0.0.1:4243    | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 127.0.0.1:5939    | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 127.0.0.1:8200    | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 127.0.0.1:9089    | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 192.168.0.50:139  | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 192.168.0.50:2049 | 0.0.0.0:0       | LISTENING       | InHost          |
  | TCP              | 192.168.0.50:3260 | 0.0.0.0:0       | LISTENING       | InHost          |




 **So what is it we are looking at here?**

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 0.0.0.0:111       | 0.0.0.0:0       | LISTENING       | InHost          |

- This port is used for Remote procedure calls allowing a program to execute in another address space in client / servers

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 0.0.0.0:135       | 0.0.0.0:0       | LISTENING       | InHost          |

- Windows DCOM server which enable remote procedure calls between COM-based applications

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 0.0.0.0:445       | 0.0.0.0:0       | LISTENING       | InHost          |

- Windows server message block "Samba" for windows file sharing

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 0.0.0.0:2179      | 0.0.0.0:0       | LISTENING       | InHost          |

- Looks to be Hyper-V manager for windows (Microsoft RDP for machines)

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 0.0.0.0:3389      | 0.0.0.0:0       | LISTENING       | InHost          |

- Windows remote desktop protocol to connect to Remote desktop connection

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 0.0.0.0:4242      | 0.0.0.0:0       | LISTENING       | InHost          |

- This can be anything but internet says this may be the program Crashplan but nothing to say this is.

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 0.0.0.0:7969      | 0.0.0.0:0       | LISTENING       | InHost          |

- This port could also be anything, I was not able to narrow this down.

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 0.0.0.0:8000      | 0.0.0.0:0       | LISTENING       | InHost          |

- This port can also be anything but a few programs listed online state it may be using HTTP server API but I dont have the process

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 0.0.0.0:8081      | 0.0.0.0:0       | LISTENING       | InHost          |

- HTTP server alternative port possibly which may explain the above unknown user

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 0.0.0.0:8082      | 0.0.0.0:0       | LISTENING       | InHost          |

- May also be related to the HTTP web server, with both 8000 and 8082 this may be a seafile cloud service running maybe

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 0.0.0.0:8866      | 0.0.0.0:0       | LISTENING       | InHost          |

- This port could also be anything

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 0.0.0.0:8968      | 0.0.0.0:0       | LISTENING       | InHost          |

- This port could also be anything

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 0.0.0.0:50627     | 0.0.0.0:0       | LISTENING       | InHost          |

- This port could also be anything

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 127.0.0.1:2049    | 0.0.0.0:0       | LISTENING       | InHost          |

- Windows Network file system service

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 127.0.0.1:4243    | 0.0.0.0:0       | LISTENING       | InHost          |

- This port could be used with the CrashPlan service along with port 4242

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 127.0.0.1:5939    | 0.0.0.0:0       | LISTENING       | InHost          |

- This port could also be anything

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 127.0.0.1:8200    | 0.0.0.0:0       | LISTENING       | InHost          |

- This port could be a DLNA media server service or gotomypc or also anything else

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 127.0.0.1:9089    | 0.0.0.0:0       | LISTENING       | InHost          |

- This port could also be anything

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 192.168.0.50:139  | 0.0.0.0:0       | LISTENING       | InHost          |

- Windows NETBIOS session service for file and print sharing

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 192.168.0.50:2049 | 0.0.0.0:0       | LISTENING       | InHost          |

- Windows Network file system service

| Protocol         | Source            | Destination     | Activity        | Location        |
| :--------------: | :----------------:| :--------------:| :--------------:| :--------------:|
| TCP              | 192.168.0.50:3260 | 0.0.0.0:0       | LISTENING       | InHost          |

- Internet Small Computer Systems Interface to move data over long distances for data storage / retrieval
