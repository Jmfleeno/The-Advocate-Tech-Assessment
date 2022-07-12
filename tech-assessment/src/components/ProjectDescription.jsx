// Import Dependencies
import { Typography } from '@mui/material'

// Create Functional Component
const ProjectDescription = () => {

  // Return JSX  
  return ( 
    <div>
      <br/>
      {/* Application Walk Through */}
      <Typography
        variant='h4'
        color='primary'
        align='center'>
        Application Walk Through.
      </Typography><br/>
      <Typography
        variant='h6'
        align='center'>
        This application is for checking the top Authors of a site on Facebook using the parse.ly API tool. When a user opens the application they will be brought to the home page where they will be shown the top 5 authors of the publication along with their top articles. <br/><br/>
        Located at the top left of every page is a navigation burger menu which contains 3 options that will quickly navigate the user to various features of the application. From top to bottom there is, 'Tech Assessment', 'Instructions', and 'Resume'. <br/><br/>
        The Tech Assessment brings you to the main application. The Instructions button brings you to the instructions for the project along with the apps basic ReadMe info. The Resume section is a simple shortcut to my personal resume incase you wanted a refresher. <br/>
      </Typography>
      <br/>

      {/* Installation/Start-Up Section */}
      <Typography
        variant='h4'
        color='primary'
        align='center'>
        Installation/Start-up
      </Typography><br/>
      <Typography
        variant='h6'
        align='center'>
        First fork the repo and clone it to your local machine.<br/>
        CD into 'tech-assessment' folder<br/>
        Run 'npm install' to install all dependencies<br/>
        Run 'npm run build' to build application<br/>
        Run 'npm run start' to start the application<br/>
        Open http://localhost:3000 to view it in your browser<br/>
      </Typography>
      <br/>

      {/* Tech Stack Section*/}
      <Typography
        variant='h4'
        color='primary'
        align='center'>
        Tech Stack
      </Typography><br/>
      <Typography
        variant='h6'
        align='center'>
        CSS<br/>
        HTML<br/> 
        Javascript<br/>
        eslint - Linter<br/>
        Axios - http Client<br/>
        Material Ui - CSS Library<br/>
        Parse.ly - Publication data API<br/>
        React-Router - Router Library<br/>
        React (React-Hooks) - Framework<br/>
        AWS (S3, Route 53, and CloudFront) - Deployment<br/>
      </Typography>
      <br/>
    </div>
  );
}

// Export Functional Component
export default ProjectDescription;