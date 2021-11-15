const mongoose = require("mongoose");


mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log("stock manager's database connected"))
    .catch((error)=>console.log(`Impoosible to get connection:${error}`))