const express = require('express');
const multer = require('multer');
const ffmpegStatic = require('ffmpeg-static');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');



const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, 'frames'); },
    filename: (req, file, cb) => { cb(null, Date.now() + '-' + file.originalname); },
});

const upload = multer({ storage: storage });

const app = express();
const port = 3000;



async function frame(path, name) {
    return new Promise((resolve, reject) => {
        ffmpeg.setFfmpegPath(ffmpegStatic);

        ffmpeg()
            .input(path)
            .seekInput(0)
            .frames(1)
            .saveToFile('frames/' + name + '.png')
            .on('end', () => {
                console.log('FFmpeg has finished. and name : ', name + '.png');
                resolve(true);
            })
            .on('error', (error) => {
                console.error(error);
                reject(error);
                
            });
    });
}





app.post('/file', upload.single('fileInput'), async (req, res) => {
    const chunks = [];
    nfile = req.file.filename;

   

    if (req.file) {
        const fpath = req.file.path;

        const stream = fs.createReadStream(fpath);
        stream.on('data', (chunk) => {
            chunks.push(chunk);
        });

        stream.on('end', async () => {
            const fullFile = Buffer.concat(chunks);
            fs.writeFileSync('frames/' + req.file.filename, fullFile);

            try {
                if (await frame(req.file.path, req.file.filename)) {
                   res.send("make it success");
                } 
            } catch (err) {
                res.json(err);
            }
        });

        stream.on('error', (error) => {
            res.json(error);
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
