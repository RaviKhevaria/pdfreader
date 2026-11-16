// Copies the PDF engine (pdf.js, legacy build for older Android WebViews) into www/
const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', 'node_modules', 'pdfjs-dist', 'legacy', 'build');
const dst = path.join(__dirname, '..', 'www');
for (const f of ['pdf.min.js', 'pdf.worker.min.js']) {
  const from = path.join(src, f);
  if (!fs.existsSync(from)) { console.error('Missing ' + from + ' - run "npm install" first.'); process.exit(1); }
  fs.copyFileSync(from, path.join(dst, f));
  console.log('copied', f);
}
