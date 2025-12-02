---
title: "Crack the hash I and II"
categories: ["Cybersecurity", "Write-ups"]
tags: ["write-up", "thm", "crypto"]
date: 2025-11-24
description: "Write-up for THM's Crack the hash I and II"
---

## Crack the hash I

This is my write-up for TryHackMe's [Crack the hash](https://tryhackme.com/room/crackthehash) and [Crack the hash 2](https://tryhackme.com/room/crackthehashlevel2) challenges. 

Can you complete the level 1 tasks by cracking the hashes?
1. 48bb6e862e54f2a795ffc4e541caed4d
2. CBFDAC6008F9CAB4083784CBD1874F76618D2A97 
3. 1C8BFE8F801D79745C4631D09FFF36C82AA37FC4CCE4FC946683D7B336B63032
4. $2y$12$Dwt1BZj6pcyc3Dy1FWZ5ieeUznr71EeNkJkUlypTsgbX1H68wsRom
5. 279412f945939ba78ce0758d3fd83daa

These are most likely **unsalted hashes**. I used [crackstation.net](https://crackstation.net/) for this.

4/5 successes!

```
easy
password123
letmein
Unrecognized hash format.
Eternity22
```

`$2y$` indicates the **bcrypt** hash function which repurposes the [blowfish cipher](https://en.wikipedia.org/wiki/Blowfish_(cipher)). **bcrypt** adds a salt to the input before hashing it, hence, the error. To crack it, I'll use hashcat and the rockyou wordlist. Due to the large computation time, I've additionally filtered the wordlist to give me 4 character passwords (hint: `****`).

```bash
#!/bin/bash

fname="/usr/share/wordlists/rockyou.txt"

candidate4="candidate4.txt"

while IFS= read -r word; do
    if [ ${#word} -eq 4 ]; then
        echo "$word" >> "$candidate4"
    fi
done < "$fname"
```

> bcrypt is made to be deliberately slow to crack (which is quite an understatement for how abysmally slow it can be). A defining feature of bcrypt is that it's memory and GPU-unfriendly especially with higher work factors/costs. Ensure you have the proper drivers installed and that you're running it in a virtual machine. Run at your own risk. 
{: .prompt-warning }

```bash
hashcat -a 0 -m 3200 hash.txt candidate4.txt --force
```

The answer is `bleh`

## Part 2

1. Hash: F09EDCB1FCEFC6DFB23DC3505A882655FF77375ED8AA2D1C13F640FCCC2D0C85
2. Hash: 1DFECA0C002AE40B8619ECF94819CC1B
3. Hash: $6$aReallyHardSalt$6WKUTqzq.UQQmrm0p/T7MPpMbGNnzXPMAXi4bJMl9be.cfi3/qxIf.hsGpS41BqMhSrHVXgMpdjS6xeKZAs02. Salt: aReallyHardSalt
4. Hash: e5d8870e5bdd26602cab8dbe07a942c8669e56d6 Salt: tryhackme

The first 2 are unsalted, so I used [crackstation.net](https://crackstation.net/) like I did earlier and got the results.

```
paule
n63umy8lkf4i
```

The next 2 are salted, one of which is prefixed with `$6$` that indicates **SHA512 (Unix)** with a hash mode `1800` on hashcat. I used haiti to indentify the hash type for the fourth and got **SHA-1** with hash mode `160`. To reduce the computation time for cracking the third hash, I filtered out 6 character passwords from rockyou and increased the workload profile to 3.

```bash
echo "$6$aReallyHardSalt$6WKUTqzq.UQQmrm0p/T7MPpMbGNnzXPMAXi4bJMl9be.cfi3/qxIf.hsGpS41BqMhSrHVXgMpdjS6xeKZAs02" > hash.txt
hashcat -a 0 -m 1800 hash.txt candidate6.txt --force -w 3
```
```bash
echo "e5d8870e5bdd26602cab8dbe07a942c8669e56d6:tryhackme" > hash.txt
hashcat -a 0 -m 160 hash.txt /usr/share/wordlists/rockyou.txt --force
```

The passwords are `waka99` and `481616481616`. Hashcate caches your result into a `.potfile` to prevent having to recrack it and waste computational time.

---

## Crack the hash II

(in progress)

---
## Sources
- Tryhackme's Crack the hash: [https://tryhackme.com/room/crackthehash](https://tryhackme.com/room/crackthehash)
- Build hashcat from source: [guide](https://github.com/hashcat/hashcat/blob/master/BUILD.md)
- crackstation.net: [https://crackstation.net/](https://crackstation.net/)
- tunnelsup: [https://www.tunnelsup.com/hash-analyzer/](https://www.tunnelsup.com/hash-analyzer/)
- Hashcat hash types: [https://hashcat.net/wiki/doku.php?id=example_hashes](https://hashcat.net/wiki/doku.php?id=example_hashes)






