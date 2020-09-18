const puppeteer = require('puppeteer');
const express = require('express');
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/screenshot', async (req, res) => {
  console.log("HET")
  console.log(req.body)

  //opens the browser
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  //loads the url
  await page.goto('https://auth.revvsales.com/signin');

  //authentication
  await page.type('#signin-email-field', 'alokothiyal007@gmail.com');
  await page.click('#signin-email-continue-btn');
  await page.waitForTimeout(2000)
  await page.type('#signin-password-field', 'Thnxtoall@1');

  //navigating to landing page
  await Promise.all([
    page.waitForNavigation(), // The promise resolves after navigation has finished
    page.click('#signin-button-field'), // Clicking the link will indirectly cause a navigation
  ]);
   await page.waitForTimeout(5000);   

  //navigating to the document editing page
   await page.click('.createdropdown-btn'),
    // page.goto('https://ftl6021m.revvsales.com/documents/DOC-000032'), // Clicking the link will indirectly cause a navigation
   await page.waitForTimeout(2000);   

   await page.click('.template-list-create-templatecard')

   await page.waitForTimeout(7000);   
  
  //entering values in the form fields 
  await page.focus('.revv-inp')
  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');
  await page.keyboard.press('Backspace');
  

  await page.keyboard.type(req.body.name, {delay: 100})
  await page.keyboard.press('Tab')

  await page.keyboard.type(req.body.contact, {delay: 100})
  await page.keyboard.press('Tab')

  await page.keyboard.type(req.body.address, {delay: 100})
  await page.keyboard.press('Tab')

  await page.keyboard.type(req.body.email, {delay: 100})

  await page.waitForTimeout(2000); 
  
  await page.click('.sign-box-label')

  await page.click('.css-xp4uvy')
  await page.keyboard.type(req.body.email, {delay: 100})
  await page.keyboard.press('Enter')

  // await page.keyboard.press('Tab')

  // await page.keyboard.down('Control');
  // await page.keyboard.press('A');
  // await page.keyboard.up('Control');
  // await page.keyboard.press('Backspace');

  // await page.keyboard.type(req.body.fname, {delay: 100})
  // await page.keyboard.press('Tab')

  // await page.keyboard.down('Control');
  // await page.keyboard.press('A');
  // await page.keyboard.up('Control');
  // await page.keyboard.press('Backspace');

  //await page.keyboard.type(req.body.lname, {delay: 100})
 //c await page.waitForTimeout(2000); 

  //await page.click('.signer-add-button')


  await page.waitForTimeout(3000); 

  await page.click('#signerdetails')
  await page.waitForTimeout(1000); 

  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');
  await page.keyboard.press('Backspace');
  
  await page.waitForTimeout(2000); 
  await page.keyboard.type(req.body.name, {delay: 100})
  await page.keyboard.press('Enter');

  await page.waitForTimeout(5000); 
  await page.click('#addrecipientspopup-share-btn');
  await page.waitForTimeout(20000); 


  //close the browser. now with the help of doc_no, doc_id and object_id, you can create a magic link of the document using revvsales api's
  await browser.close();
  res.json({"name":"babu"})
})

app.listen(process.env.PORT)