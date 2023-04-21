# **HTML Basics**

HTML is a descriptive language based on tags which describe content of the web page. HTML - HyperText Markup Language.

HTML file is a text file with .html or .htm extensions.

GUI (Graphical user interface) - an enviroment that displays user interface, interactions and informations.

Marker (tag) - defines an element on web page and is written using sharp parentheses.

Hyperlink tag:

```html
<a href="https://onet.pl">Click</a>
```

Some elemnts require closing tags like paragraphs or divs but some of them don't.

Image tag:

```html
<img width="500" height="420" src="homer.jpg" />
```

HTML tags can contain additional attributes which can have some value eg. url of an image. Different tags can have different attributes.

---

DOCTYPE declaration means document type. It informs the browser of HTML standard that the document is coded in.

XML (Extensive Markup Language) - is a universal markup language used to represent different kinds of data in a structures way. XML is cross-platformed which makes it more comfortable and easy to use on different system.

Head tag:

```html
<head>
	<!-- Page Title -->
	<title>Page Name</title>

	<!-- Charset encoding -->
	<meta charset="utf-8" />

	<!-- Description in Search Engine -->
	<meta name="description" content="content" />

	<!-- Search Engine Keywords -->
	<meta name="keywords" content="keyword, keyword, keyword" />

	<!-- Propper IE configuration -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<!-- JavaScript -->
	<script src="index.js" defer></script>

	<!-- CSS link -->
	<link rel="stylesheet" src="style.css" />
</head>
```

In head sections we store different kinds of metadata, links or CDN's. Head section is not visible part of web page.

In body section we markup page structure and content like text, images and links.
