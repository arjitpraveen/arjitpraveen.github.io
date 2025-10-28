---
sidebar_label: "Nmap Basics"
---

# Nmap Basics

![](/img/nmap-banner.gif)

**Nmap** (Network Mapper) is a **network discovery tool** used to discover devices and services on a computer network. It helps us answer 3 core questions: What hosts are up? *(Host Discovery)*, what ports are open? *(Port Scanning)*, what services run on these ports? *(Services & version detection)*. It's also an essential tool for **reconnaissance**.

It can detect **live hosts**, **open ports**, **running services**, and even **operating systems** or  **potential vulnerabilities**. Nmap uses multiple ways to specify its target:

- IP range using `-`: To scan IP addresses from 192.168.0.1 to 192.168.0.10; `192.168.0.1-10`
- IP subnet using `/`: If you want to scan a subnet 192.168.0.0-255; `192.168.0.1/24`
- Hostname: You can specify the target's hostname, eg. `wasssuppppp.com`

There are several scan techniques which I'll cover in this post. But for now, let's run our first scan.

## Local Scan

A **local scan** scans the network that we are directly connected to. 

```python
nmap -sn 192.168.0.1/24
```

This also allows us to resolve IP addresses to their corresponding MAC addresses and look up the network card vendors, that tells the type of target device(s). 

<center>
<img src="/img-archive/sn_scan_1.png" width="650px" />
</center>

`-sn`(previously known as `-sP`) here stands for **ping scan**/**no port scan**. This is used for Host Discovery by sending **ARP requests** to the IP addresses within the given range and listening to an **ARP reply**, which nmap then tries to resolve each of the MAC addresses to a vendor name. You can learn more about `-sn` in [Nmap's reference guide](https://nmap.org/book/man-host-discovery.html) or by grepping its man page.

One advantage of a no-port scan is that Nmap stops once it discovers live hosts, instead of scanning their ports as well. It also allows light reconnaissance of a target network without attracting much attention.

```bash
rabbitholex86@Arjit:~$ man nmap | grep -i "\-sn"
```
When we inspect the packets in Wireshark, we can see Nmap sending ARP requests and receiving ARP replies from several devices (red boxes):

<center>
<img src="/img-archive/ws_1.png" width="750px" />
</center>

## Remote scan

A remote scan behaves differently. "Remote" means at least one router separates our system from the target network. Unlike local networks, we can’t send ARP requests directly — so Nmap uses ICMP packets to send **echo requests** and listen for **echo replies**.

```python
nmap -sn 192.168.11.1/24
```

<center>
<img src="/img-archive/ws_2.png" />
</center>

## Sources

Network Chuck: [https://www.youtube.com/watch?v=4t4kBkMsDbQ&t=124s](https://www.youtube.com/watch?v=4t4kBkMsDbQ&t=124s)

TryHackMe:
- Nmap: The Basics: [https://tryhackme.com/room/nmap](https://tryhackme.com/room/nmap)
- Nmap Live Host Discovery: [https://tryhackme.com/room/nmap01](https://tryhackme.com/room/nmap01)
- Nmap Basic Port Scans: [https://tryhackme.com/room/nmap02](https://tryhackme.com/room/nmap02)
- Nmap Advanced Port Scans: [https://tryhackme.com/room/nmap03](https://tryhackme.com/room/nmap03)
- Nmap Post Port Scans: [https://tryhackme.com/room/nmap04](https://tryhackme.com/room/nmap04)

Getting your VM connected to your LAN: [https://www.youtube.com/watch?v=9hwr-bz85kk](https://www.youtube.com/watch?v=9hwr-bz85kk)