import JSZip from 'jszip';
export default function epubExport(content) {
  const zip = new JSZip();
  const epub = zip.folder('EPUB');

  // MIME type file
  zip.file('mimetype', 'application/epub+zip');

  // Container file
  zip.file(
    'META-INF/container.xml',
    `<?xml version="1.0"?>
      <container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">
        <rootfiles>
          <rootfile full-path="EPUB/package.opf" media-type="application/oebps-package+xml" />
        </rootfiles>
      </container>`
  );

  // OPF package file
  epub.file(
    'package.opf',
    `<?xml version="1.0" encoding="UTF-8" ?>
      <package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="BookId">
        <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
          <dc:title>My Book</dc:title>
          <dc:creator>Author Name</dc:creator>
          <dc:identifier id="BookId">urn:uuid:12345</dc:identifier>
          <meta property="dcterms:modified">2024-01-01T00:00:00Z</meta>
        </metadata>
        <manifest>
          <item id="toc" href="toc.xhtml" media-type="application/xhtml+xml" properties="nav"/>
          <item id="chap1" href="chapter1.xhtml" media-type="application/xhtml+xml"/>
        </manifest>
        <spine>
          <itemref idref="chap1"/>
        </spine>
        <guide>
          <reference type="toc" title="Table of Contents" href="toc.xhtml"/>
        </guide>
      </package>`
  );

  // Table of Contents (TOC) file
  epub.file(
    'toc.xhtml',
    `<?xml version="1.0" encoding="UTF-8" ?>
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
        <head>
          <title>Table of Contents</title>
        </head>
        <body>
          <nav epub:type="toc" id="toc">
            <h1>Table of Contents</h1>
            <ol>
              <li><a href="chapter1.xhtml">Chapter</a></li>
            </ol>
          </nav>
        </body>
      </html>`
  );
  // Content file
  epub.file(
    'chapter1.xhtml',
    `<?xml version="1.0" encoding="UTF-8" ?>
      <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <title>Chapter 1</title>
        </head>
        <body>
          ${content}
        </body>
      </html>`
  );

  // Generate EPUB file
  zip.generateAsync({ type: 'blob' }).then(function (blob) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'book.epub';
    link.click();
  });
}
