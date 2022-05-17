const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productManagerdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB connected'))
    .catch(() => console.log('BD connect error'))