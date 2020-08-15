const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./database/mongoose');
const StudentRoutes = require('./routes/auth.routes');
const cors = require('cors');
const TeacherRoutes = require('./routes/teacher.routes');
const FileRoutes = require('./routes/file.routes');

app.use('/uploads',express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

// Serve static resources
app.use('/public', express.static('public'));
app.use(cors());

app.use('/',FileRoutes);
app.use('/api',StudentRoutes);
app.use('/api/teacher',TeacherRoutes);

const port_number = process.env.PORT || 3400;
app.listen(port_number,()=>console.log('Server connected on port ' + port_number));