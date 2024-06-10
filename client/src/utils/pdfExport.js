import openSansFont from '../assets/fonts/OpenSans-Regular.ttf';
import jsPDF from 'jspdf';

export default function pdfExport(content) {
  const doc = new jsPDF('p', 'mm', 'a4');

  doc.addFont(openSansFont, 'OpenSans', 'normal');
  doc.setFont('OpenSans');
  doc.setFontSize(12);
  const lines = doc.splitTextToSize(content, 180); // Adjust the second argument as needed

  let y = 10; // start y position

  const pageHeight =
    doc.internal.pageSize.height || doc.internal.pageSize.getHeight();

  for (let i = 0; i < lines.length; i++) {
    if (y > pageHeight - 10) {
      // Go to next page if the line won't fit
      doc.addPage();
      y = 10; // reset y position to top of new page
    }
    doc.text(lines[i], 10, y);
    y += 10; // move y down for next line
  }

  doc.save('Story.pdf');
}
