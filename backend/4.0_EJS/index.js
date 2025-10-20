import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req,res)=>{
    const today = new Date();
    const day = today.getDay(); // 0 - Sunday, 1 - Monday, ..., 6 - Saturday

    let Type = 'weekday';
    let adv = 'Work hard and be productive!';

    if (day ===0 || day ===6){
        Type = 'weekend';
        adv = 'Enjoy your weekend!';
    }

    res.render('index.ejs', {
        dayType : Type,
        advice : adv
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});