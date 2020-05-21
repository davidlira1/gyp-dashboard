const puppeteer = require('puppeteer');

async function printPDF() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('http://gyp-fill.com', {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({path: 'proposal.pdf', format: 'A4', printBackground: true});

    await browser.close();
    // return pdf;
}

printPDF()
.then(result => {
    console.log(result)
})
.catch(err => {
    console.error(err)
})