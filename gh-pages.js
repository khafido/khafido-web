var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'master',
        repo: 'https://github.com/khafido/khafido-web.git', // Update to point to your repository  
        user: {
            name: 'khafido', // update to use your name
            email: 'khafido.work@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)