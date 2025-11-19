# Hashing Basics

**Hashing** is the process of taking an input of arbitrary size and passing it through a **hash function** to return a **hash value** of fixed length.

Hash functions are *one-way functions*, this means that it's impossibile/computationally impractical to go from an output to its input. This is what makes them great for storing passwords. Here's an example; when you switch fromone user to another within the current shell session using `su`, it prompts for a password. How does it validate this password?

By default, Linux stores its user's passwords in `/etc/shadow` as hash values which is only readable as root. The hash function may vary depending on your distro, but a lot of them use the **yescrypt hash** denoted by the `$y$` prefix in the hash value. Check if out for yourself!

```bash
rbx86@rbx86:~/blog$ sudo cat /etc/shadow
[sudo] password for rbx86:
rbx86:$y$j9T$REDACTED$REDACTED:19784:0:99999:7:::
```

So when you type your password when prompted, it's hashed by libcrypt and campared with the one stored in `/etc/shadow`.

Each entry consists of 9 fields, you can read more about them by running `man 5 shadow`. And the encrypted password format follows `$prefix(hashing algorithm used)$options$salt$hash`. Here are some common prefixes in unix:

1. `$y$`: yescrypt, default, recommended
2. `$gy$`: gost-yescrypt uses GOST R 34.11-2012 hash function & yescrypt hashing method
3. `$7$`: scrypt
4. `$2b$, $2y$, $2a$, $2x$`: bcrypt based on blowfish cupher originally developed for the BSDs
5. `$6$`: sha512crypt, sha-2 with 512 output
6. `$md5`: MD5 algo developed for solaris
7. `$1$`: md5crypt, MD5algo developed for FReeBSD

### Why is hashing important?

Storing passwords as plaintext is dangerous, if it there's a breach and it's leaked (eg. RockYou). Furthermore, it's not safe to use decrypted encryption algorithms and insecure hash function (eg. Linkedin breach 2012), such as `SHA-1` to store passwords. Hashing also helps validate the authenticity of a file from the internet. You can check this by using a command-line utility such as `md5sum` or `sha256sum`.

```bash
sha256sum myapp.deb
```

## Salting & Rainbow table attack

Just because hashing is irreversible, it doesn't stop them from being broken. Simple and/or non-salted hashes are vulnerable to **rainbow table attacks**. 

> A rainbow table attack is a password cracking method that uses a database of passwords with their corresponding precomputated hashes that they can use to brute-force an authentication process to gain unauthorized access to a specific resource. 

**Salting** hashes help protect passwords from these kind of attacks. This process involves adding a unique random string, called a **salt**, to a password before hashing it. Hash functions like `bcrypt` and `scrypt` does this automatically. another secure function is a`rgon2`.

```bash
password + salt -> hashing function -> hash value + stored salt
```
Salting also prevents 2 same passwords from producing a same hash *(hashing collision)*.

## Hash Collision and the Pigeonhole Effect

Let's consider a cryptographic hash function `hash()` that takes an input of any size `n` and produces a fixed-size output, for example, a 4-bit output which gives us $2^4 = 16$ possible hash values/digests. A hash collision occurs when any 2 (or more hashes), `M1` and `M2` produces the same hash values. 

```
hash(M1) = hash(M2), where M1 ≠ M2
```

This violates 1 of the 3 properties that makes a has function cryptographically secure; the **property of second preimage resistance**, which states that given a message `M1`, it must be practically impossible to find a message `M2` such that `hash(M1) = hash(M2)`. 

In the case of our hash function `hash()`, it accepts an input of any length and produces a 4-bit hash value, which means at some point, 2 numbers would have produced the same hash values, making the function vulnerable to **birthday attacks**. `MD5` and `SHA1` are such examples. 

This entire process ties into what's known as the **pigeonhole effect** which states that if you have `n` pigeonholes and `n+1` pigeons, at least **one** pigeonhole must contain more that one pigeon.

## Password cracking

Enough about hashing. How do we crack passwords that have been hashed? A good way to do this is to use `hashcat`. The syntax is: `hashcat -m <hash_type> -a <attack_mode> hashfile wordlist`. For example, 

```bash
hashcat -m 3200 -a 0 hash.txt /usr/share/wordlists/rockyou.txt 
```

which uses the hash code `3200` to manually identify the hash as `bcrypt` and try to brute-force it using the `rockyou` wordlist (you can find it at `/usr/share/wordlists/rockyou.txt.gz`).

Check out my post on [THM's Crack the hash & Crack the hash 2 rooms](https://arjitpraveen.github.io/archive/thm_rooms/crackthehash), if you wanna learn more about cracking hashes. 

---

Crack the hash `9eb7ee7f551d2f0ac684981bd1f1e2fa4a37590199636753efe614d4db30e8e1`. We don't know what hash function was used, so we'll use `haiti` for that.

```bash
haiti 9eb7ee7f551d2f0ac684981bd1f1e2fa4a37590199636753efe614d4db30e8e1
```

Here's what it gave us

![](/img-archive/tools/hashcat/hashcrack_haiti.png)


Looking up the hash-mode for SHA-256 at [https://hashcat.net/wiki/doku.php?id=example_hashes](https://hashcat.net/wiki/doku.php?id=example_hashes) we see it's `1400`. Now we use hashcat to break it.

```
echo "9eb7ee7f551d2f0ac684981bd1f1e2fa4a37590199636753efe614d4db30e8e1" > hash.txt
hashcat -m 1400 -a 0 hash.txt /usr/share/wordlists/rockyou.txt
```

And this is what it gave us:

![](/img-archive/tools/hashcat/hashcrack_hashcat.png)

Hashcat can also autodetect hashmodes if we haven't specified it

```
echo "$6$GQXVvW4EuM$ehD6jWiMsfNorxy5SINsgdlxmAEl3.yif0/c3NqzGLa0P.S7KRDYjycw5bnYkF5ZtB8wQy8KnskuWQS3Yr1wQ0" > hash2.txt
hashcat -a 0 hash2.txt rockyou.txt
```

![](/img-archive/tools/hashcat/hashcracker_hash2_autodetect.png)

It's SHA-512! Let's use `hashcat` to crack it:

![](/img-archive/tools/hashcat/hashcracker_hash2_etviola.png)

Et voilà! The password is `spaceman`.

---

# Sources

- Tryhackme's Hashing Basics: [https://tryhackme.com/room/hashingbasics](https://tryhackme.com/room/hashingbasics)
- pwn.college's Linux Luminarium: [https://pwn.college/linux-luminarium/users/](https://pwn.college/linux-luminarium/users/)
- Cryptohack Hash Functions: [https://cryptohack.org/challenges/hashes/](https://cryptohack.org/challenges/hashes/)
- Hashcat documentation: [https://hashcat.net/wiki/doku.php?i](https://hashcat.net/wiki/doku.php?i)
- Haiti documentation for installation: [https://noraj.github.io/haiti/#/pages/quick-start?id=quick-start](https://noraj.github.io/haiti/#/pages/quick-start?id=quick-start)

<center>

<iframe width="560" height="315" src="https://www.youtube.com/embed/jsraR-el8_o?si=XmCBcNKxOOiAO0CQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</center>
