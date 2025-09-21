// This line must be at the very top of your file to load environment variables

require('dotenv').config({ path: 'backend/src/.env' });
const app = require('./backend/src/app.js');
const connectDB = require('./backend/src/db/db.js');

connectDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
