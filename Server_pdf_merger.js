const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer')
const { mergeModule } = require('./mergeModule')
const upload = multer({ dest: 'uploads/' })

app.use(express.static('public'));

const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./templates/pdfMerger.html"))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
    //console.log(req.files)
    //res.send({ data: req.files })
    
    let d = await mergeModule(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
    res.redirect(`http://localhost:3000/${d}.pdf`)
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})