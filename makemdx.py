import os
import datetime

def get_date():

    now = datetime.datetime.now()
    return f"{now.month}-{now.day}-{now.year}" 
    

def makemdx(title, desc, slug, tags):

    content = f"""---
title: "{title}"
description: "{desc}"
date: {get_date()}
slug: {slug}
tags: {tags}
authors: ["arjit"]
# image: "./tmp.png"
---

import Callout from '@/components/Callout.astro'

{{/* <Callout title="" variant="" showVariant={{}}></Callout> /*}}

CONTENT HERE
        """
    

    dir_path = f"src/content/blog/{slug}"
    os.makedirs(dir_path, exist_ok=True)
    fpath = os.path.join(dir_path, "index.mdx")

    try:
        with open(fpath, "w", encoding='utf-8') as f:
            f.write(content)
        f.close()
    except FileExistsError:
        print("File already exists.")

    print(f"index.mdx saved in {fpath}")


title = input("[+] Title: ")
desc = input("[+] Description: ")
slug = input("[+] Slug (subfolder): ")
tags = input("[+] Tags (comma separated): ").split(",")

makemdx(title, desc, slug, tags)