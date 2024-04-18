const id = "2020/02/lit-show-day-two.mdx";
						const collection = "shoots";
						const slug = "2020/02/lit-show-day-two";
						const body = "\r\nimport Container from \"@/components/content/Container\";\r\nimport Flex from \"@/components/image/Flex\";\r\nimport FlexItem from \"@/components/image/FlexItem\";\r\nimport Figure from \"@/components/image/Figure\";\r\nimport Prose from \"@/components/content/Prose\";\r\nimport Section from \"@/components/content/Section\";\r\nimport Split from \"@/components/content/Split\";\r\n\r\n<Section>\r\n    <Container size=\"large\">\r\n        <Figure src={frontmatter.images.hero} />\r\n    </Container>\r\n\r\n    <Container>\r\n        <Prose>\r\n            After a refreshing night stay at the Hilton Airport Hotel in Los Angeles (kidding, it was packed and crazy) we woke up ready to start day two of our journey.\r\n\r\n            ## Callas Rennsport\r\n\r\n            It's interesting going to some of these shops. [Callas Rennsport](https://www.callasrennsport.com/) is no exception. You pull into a no-name industrial area. It's not generally a great area, and yet, sitting in front of you is a Porsche 959, actually mulitple 959's in the parking lot. For those that don't know, a 959 is worth in excess of $1,000,000.\r\n        </Prose>\r\n    </Container>\r\n\r\n    <Container size=\"large\">\r\n        <Flex>\r\n            {frontmatter.images.gallery.slice(0, 27).map((p) => (\r\n                <FlexItem>\r\n                    <Figure src={p} figureClass=\"w-full h-full\" class=\"w-full h-full object-cover\" />\r\n                </FlexItem>\r\n            ))}\r\n        </Flex>\r\n    </Container>\r\n\r\n    <Container>\r\n        <Prose>\r\n            ## AutoKennel\r\n\r\n            Our next stop took us over to [AutoKennel](https://autokennel.com/) in Costa Mesa, CA. AutoKennel are consignment specialists. Usually they're helping sell Porsche vehciles of all variety, but occasionally they'll get something different, like a Ferrari or Land Rover. They've got a really nice space. It's a group of garage doors outlining a nice parking area.\r\n\r\n            We actually arrived the same time as Magnus Walker. We said a quick \"hello\". He seemed like a geniune guy. He showed up in a blue 993 with RS wheels. I don't believe it was an actual GT2 RS, either way, beautiful car.\r\n        </Prose>\r\n    </Container>\r\n\r\n    <Container size=\"large\">\r\n        <Flex>\r\n            {frontmatter.images.gallery.slice(27, 36).map((p) => (\r\n                <FlexItem>\r\n                    <Figure src={p} figureClass=\"w-full h-full\" class=\"w-full h-full object-cover\" />\r\n                </FlexItem>\r\n            ))}\r\n        </Flex>\r\n    </Container>\r\n\r\n    <Container>\r\n        <Prose>\r\n            ## South Bay Porsche\r\n\r\n            I'm embarassed to say that I've never been to the Austin area Porsche dealer. I'm sure they've got some great vehicles up there. However, I can say that I've been to [South Bay Porsche](https://www.porschesouthbay.com/), so I guess that makes up for my failings in Austin. The dealership is ridiculously beautiful and clean. It's totally German. If you're in the area, it's worth a stop. You might even get to see the [blue 918 Spyder](https://www.google.com/maps/place/Porsche+South+Bay/@33.899252,-118.3719878,3a,91.2y,90t/data=!3m8!1e2!3m6!1sAF1QipOf61b3wqAYxE4FzwpaDnv6tW4xnDLVMYIR2A3M!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOf61b3wqAYxE4FzwpaDnv6tW4xnDLVMYIR2A3M%3Dw203-h135-k-no!7i1200!8i800!4m5!3m4!1s0x80dd4a56efd17825:0xa4516fa00e7a781a!8m2!3d33.898877!4d-118.371598) that is there on occasion.\r\n        </Prose>\r\n    </Container>\r\n\r\n    <Container size=\"large\">\r\n        <Flex>\r\n            {frontmatter.images.gallery.slice(36, 44).map((p) => (\r\n                <FlexItem>\r\n                    <Figure src={p} figureClass=\"w-full h-full\" class=\"w-full h-full object-cover\" />\r\n                </FlexItem>\r\n            ))}\r\n        </Flex>\r\n    </Container>\r\n\r\n    <Container>\r\n        <Prose>\r\n            ## Pelican Parts Open House\r\n\r\n            Our last trip of the day brought us to PelicanParts, a brand with which I am quite familiar. PelicanParts was a great resource when I owned my 1989 BMW 325iX. I believed they shipped me a heater core when mine died driving around Rhode Island in single digit weather. Installing it during that weather was a real treat. Either way, great company and their facility is awesome. They had some nice customer cars waiting outside, but the real treat were the Porsche 962's waiting inside.\r\n\r\n            Another car that caught my eye was the blue 914-6. 914's were never my favorite Porsche. I really had no feelings toward them. But every time I saw a lightly modified 914-6 they grew on me. I'd love to get a beat up base 914 and modify it, looks like it would be a really fun car.\r\n        </Prose>\r\n    </Container>\r\n\r\n    <Container size=\"large\">\r\n        <Flex>\r\n            {frontmatter.images.gallery.slice(45, 55).map((p) => (\r\n                <FlexItem>\r\n                    <Figure src={p} figureClass=\"w-full h-full\" class=\"w-full h-full object-cover\" />\r\n                </FlexItem>\r\n            ))}\r\n        </Flex>\r\n    </Container>\r\n\r\n</Section>\r\n";
						const data = {title:"LIT Show 2020 Part 2",description:"Day two takes us to some epic Porsche events at Callas Rennsport, Auto Kennel and Pelican Parts.",customLayout:true,tags:["lit show","porsche","los angeles"],category:"Car Show",date:new Date(1582848000000),related:["2020/02/lit-show-day-one","2020/02/lit-show-day-three","2020/03/lit-show-day-four"],location:{text:"Los Angeles, CA"},images:{hero:"shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_043.jpg",gallery:["shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_001.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_002.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_003.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_004.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_005.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_006.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_007.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_008.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_009.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_010.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_011.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_012.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_013.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_014.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_015.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_016.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_017.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_018.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_019.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_020.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_021.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_022.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_023.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_024.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_025.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_026.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_027.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_028.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_029.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_030.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_031.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_032.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_033.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_034.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_035.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_036.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_037.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_038.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_039.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_040.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_041.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_042.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_043.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_044.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_045.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_046.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_047.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_048.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_049.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_050.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_051.jpg","shoots/2020/2020-02-28-lit-show-day-two/lit-show-2020_052.jpg"]}};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2020/02/lit-show-day-two.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
