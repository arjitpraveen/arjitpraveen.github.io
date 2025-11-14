---
sidebar_label: "Crack the hash I and II"
sidebar_position: 1
---

# Crack the hash I

## Level 1

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

Looking carefully at hash #4 you can see `$2y$12$` followed by the encoded string. A simple google search shows that the prefix `$2y$` indicates the password-cracking algorithm **bcrypt** which repurposes the [blowfish cipher](https://en.wikipedia.org/wiki/Blowfish_(cipher)). bcrypt algorithm adds a salt which explains why it didn't work using crackstation.

An alternative approach is to crack it with hashcat using the rockyou wordlist which can be found in `/usr/share/wordlists/` on Kali Linux or by downloading it.

```bash
wget https://github.com/danielmiessler/SecLists/raw/master/Passwords/Leaked-Databases/rockyou.txt.tar.gz && tar -xzvf rockyou.txt.tar.gz
```

:::warning
bcrypt is made to be deliberately slow to crack (slow is quite an understatement for how truly slow it is to crack!). A defining feature of bcrypt is that it's memory and GPU-unfriendly especially with higher work factors/costs. Run at your own risk. 
:::

Lucky for me, I've been given a hint, the answer formats is `****`. Here's a script I made to filter 4 character passwords from rockyou.txt

```bash title="filter.sh"
#!/bin/bash

fname="/usr/share/wordlists/rockyou.txt"

candidate4="candidate4.txt"

while IFS= read -r word; do
    if [ ${#word} -eq 4 ]; then
        echo "$word" >> "$candidate4"
    fi
done < "$fname"
```

I'll now use hashcat to crack this hash.

```
hashcat -a 0 -m 3200 hash.txt candidate4.txt --force
```

![](/img-archive/hashcrack_res.png)

There's the result! `bleh`

## Level 2

1. Hash: F09EDCB1FCEFC6DFB23DC3505A882655FF77375ED8AA2D1C13F640FCCC2D0C85
2. Hash: 1DFECA0C002AE40B8619ECF94819CC1B
3. Hash: $6$aReallyHardSalt$6WKUTqzq.UQQmrm0p/T7MPpMbGNnzXPMAXi4bJMl9be.cfi3/qxIf.hsGpS41BqMhSrHVXgMpdjS6xeKZAs02. Salt: aReallyHardSalt
4. Hash: e5d8870e5bdd26602cab8dbe07a942c8669e56d6 Salt: tryhackme

The first 2 are unsalted, so I used [crackstation.net](https://crackstation.net/) like I did earlier and got the results.

```
paule
n63umy8lkf4i
```

The next 2 are salted. I first used [tunnelsup.com](https://www.tunnelsup.com/hash-analyzer/) to identify what hash type is used.

Hash: `$6$aReallyHardSalt$6WKUTqzq.UQQmrm0p/T7MPpMbGNnzXPMAXi4bJMl9be.cfi3/qxIf.hsGpS41BqMhSrHVXgMpdjS6xeKZAs02.` Salt: `aReallyHardSalt`

![](/img-archive/tunnelsup_1.png)

That's alright! After doing a quick google search I found out the `$6$` prefix indicates Linux SHA256 or SHA512 hashing (`sha256crypt`), so I filtered out 6 character passwords from the rockyou wordlist using the script I made earlier with minor tweaks and ran hashcat with `-m 1800`

```
echo "$6$aReallyHardSalt$6WKUTqzq.UQQmrm0p/T7MPpMbGNnzXPMAXi4bJMl9be.cfi3/qxIf.hsGpS41BqMhSrHVXgMpdjS6xeKZAs02" > hash.txt
hashcat -a 0 -m 1800 hash.txt candidate6.txt --force -w 3
```

![](/img-archive/hashcat_res2.png)

That's it! Our password is `waka99`!

Hash: `e5d8870e5bdd26602cab8dbe07a942c8669e56d6` Salt: `tryhackme`

This one was fairly straightforward. tunnelsup resolved the hash to `SHA1 (or SHA 128)`. So I used `-m 160`, which allowed me to use the salt.

![](/img-archive/tunnelsup_2.png)

```
echo "e5d8870e5bdd26602cab8dbe07a942c8669e56d6:tryhackme" > hash.txt
hashcat -a 0 -m 160 hash.txt /usr/share/wordlists/rockyou.txt --force
```

![](/img-archive/hashcat_res3.png)

And there's our final result. `481616481616`

## Sources
- Tryhackme's Crack the hash: [https://tryhackme.com/room/crackthehash](https://tryhackme.com/room/crackthehash)
- Build hashcat from source: [guide](https://github.com/hashcat/hashcat/blob/master/BUILD.md)
- crackstation.net: [https://crackstation.net/](https://crackstation.net/)
- tunnelsup: [https://www.tunnelsup.com/hash-analyzer/](https://www.tunnelsup.com/hash-analyzer/)
- Hashcat hash types: [https://hashcat.net/wiki/doku.php?id=example_hashes](https://hashcat.net/wiki/doku.php?id=example_hashes)

# Crack the hash II



---

## Notes

### Salting

**Salting** is the process of adding a salt (unique random string) to a password before hashing it. This increases its complexity and randomness, adding a layer of security. 

A high work factor is deliberately used in modern hashing algorithms making brute-force attacks more harder and expensive. 

