const express = require ('express'); 
const app = express();

app.set('view engine', 'ejs');
// serve static files
app.use(express.static( 'public'));

app.get('/', (req, res) => {
    res.render('index', { 
        title: "EJS PRACTICE",
        firstName: 'Christian',
        lastName: 'Avenir',
        age: 20,
        address: 'San Fernando',
        phoneNum: '09669523502',
        education: [
            'Bachelor of Science in Information Technology specialize in Web Development, Holy Angel University',
            'High School Diploma, Holy Angel University'
        ],
        experience: [
            'UI/UX Designer',
            'Intern, Software Development'
        ],
        skills: [
            'Web Design (HTML, CSS, JavaScript)',
            'Backend Development (Node.js, Express.js)',
            'UI/UX Design (Figma, Adobe XD)',
            'Version Control (Git, GitHub)'
        ]
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
})


