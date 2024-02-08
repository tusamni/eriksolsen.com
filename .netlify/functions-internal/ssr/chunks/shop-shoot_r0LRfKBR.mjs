const id = "2019/12/shop-shoot.mdx";
						const collection = "shoots";
						const slug = "2019/12/shop-shoot";
						const body = "\r\nimport Gallery from \"@/components/image/Gallery\";\r\nimport Grid from \"@/components/image/Grid\";\r\nimport GridImage from \"@/components/image/GridImage\";\r\nimport Picture from \"@/components/image/Picture\";\r\n\r\n<Gallery>\r\n    <Grid>\r\n        {frontmatter.gallery.map((i) => (\r\n            <GridImage>\r\n                <Picture src={i} />\r\n            </GridImage>\r\n        ))}\r\n    </Grid>\r\n</Gallery>\r\n";
						const data = {title:"Porsche Collection Test Shoot",description:"I rented a Sigma 50mm Art 1.4 to compare with my 24-105 G. I shot a few test photos over at my friends Porsche shop.",tags:["porsche","dripping springs"],category:"Miscellaneous",date:new Date(1577491200000),related:["2019/03/porsches-at-the-shop","2019/05/purple-porsche-911sc","2023/06/1997-993-carrera-4s"],location:{text:"Dripping Springs, TX"},hero:"shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_004.jpg",gallery:["shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_001.jpg","shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_002.jpg","shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_003.jpg","shoots/2019/2019-12-28-shop-shoot/shop-shoot-2019_004.jpg"]};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/erik/Downloads/sites/eriksolsen.com/src/content/shoots/2019/12/shop-shoot.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
