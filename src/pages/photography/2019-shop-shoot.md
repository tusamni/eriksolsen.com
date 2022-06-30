---
# imports
setup: |
  import Layout from "@/layouts/ShootLayout"
  import Image from "@/components/image/Image"
  import Gallery from "@/components/image/Gallery"

# meta
tags:
  - porsche
  - dripping springs
category: just for fun
date: 2019-05-26

# content
title: Porsche Collection Shoot
description: I'm in possession of a Sigma 50mm Art 1.4, so I need some cars to test shoot.

# photos
hero: /shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_001.jpg
gallery01:
  - /shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_001.jpg
  - /shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_002.jpg
  - /shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_003.jpg
  - /shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_004.jpg
---

This isn't a major shoot, but I had a rented Sigma 50mm Art f/1.4 in my possession, so I hopped over to a friends shop to shoot a few of his colleciton.

<div class="gallery">
    {frontmatter.gallery01.map((i, index) =>
        <Gallery file={i}>
            <Image
                file={i}
                sizes="(min-width: 1024px) 800px, 100vw"
            />
        </Gallery>
    )}
</div>
