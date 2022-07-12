// Import Dependencies
import React from 'react';
import {Routes, Route } from 'react-router-dom'
import ResponsiveAppBar from './AppBar';
import Resume from './Resume.jsx';
import Footer from './Footer.jsx';
import TechAssessment from './TechAssessment.jsx'
import ProjectDescription from './ProjectDescription';
import { Box } from '@mui/system';

const App = () => {
  // Returned JSX
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <div
        className='App-box'>
        <Routes>
          <Route
            path='/'
            element={<TechAssessment/>}/>
          <Route
            path='/tech-assessment'
            element={<TechAssessment/>}/>
          <Route
            path='/resume'
            element={<Resume/>}/>
          <Route
            path='/instructions'
            element={<ProjectDescription/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

// Export Component
export default App;

/*
                              ....
                           ,;;'''';;,                    ,;;;;,
                 ,        ;;'      `;;,               .,;;;'   ;
              ,;;;       ;;          `;;,';;;,.     ,%;;'     '
            ,;;,;;       ;;         ,;`;;;, `;::.  %%;'
           ;;;,;;;       `'       ,;;; ;;,;;, `::,%%;'
           ;;;,;;;,          .,%%%%%'% ;;;;,;;   %;;;
 ,%,.      `;;;,;;;,    .,%%%%%%%%%'%; ;;;;;,;;  %;;;
;,`%%%%%%%%%%`;;,;;'%%%%%%%%%%%%%'%%'  `;;;;;,;, %;;;
;;;,`%%%%%%%%%%%,; ..`%%%%%%%%;'%%%'    `;;;;,;; %%;;
 `;;;;;,`%%%%%,;;/, .. `"""'',%%%%%      `;;;;;; %%;;,
    `;;;;;;;,;;/////,.    ,;%%%%%%%        `;;;;,`%%;;
           ;;;/%%%%,%///;;;';%%%%%%,          `;;;%%;;,
          ;;;/%%%,%%%%%/;;;';;'%%%%%,             `%%;;
         .;;/%%,%%%%%//;;'  ;;;'%%%%%,             %%;;,
         ;;//%,%%%%//;;;'   `;;;;'%%%%             `%;;;
         ;;//%,%//;;;;'      `;;;;'%%%              %;;;,
         `;;//,/;;;'          `;;;'%%'              `%;;;
           `;;;;'               `;'%'                `;;;;
                                  '      .,,,.        `;;;;
                                      ,;;;;;;;;;;,     `;;;;
                                     ;;;'    ;;;,;;,    `;;;;
                                     ;;;      ;;;;,;;.   `;;;;
                                      `;;      ;;;;;,;;   ;;;;
                                        `'      `;;;;,;;  ;;;;
                                                   `;;,;, ;;;;
                                                      ;;, ;;;;
                                                        ';;;;;
                                                         ;;;;;
                                                        .;;;;'
                                                       .;;;;'
                                                      ;;;;;'
                                                     ,;;;;'
▄▄▄▄▄ ▄ .▄ ▄▄▄·  ▐ ▄ ▄ •▄ .▄▄ ·     ·▄▄▄      ▄▄▄      .▄▄ · ▄▄▄▄▄       ▄▄▄· ▄▄▄·▪   ▐ ▄  ▄▄ •     ▄▄▄▄·  ▄· ▄▌
•██  ██▪▐█▐█ ▀█ •█▌▐██▌▄▌▪▐█ ▀.     ▐▄▄·▪     ▀▄ █·    ▐█ ▀. •██  ▪     ▐█ ▄█▐█ ▄███ •█▌▐█▐█ ▀ ▪    ▐█ ▀█▪▐█▪██▌
 ▐█.▪██▀▐█▄█▀▀█ ▐█▐▐▌▐▀▀▄·▄▀▀▀█▄    ██▪  ▄█▀▄ ▐▀▀▄     ▄▀▀▀█▄ ▐█.▪ ▄█▀▄  ██▀· ██▀·▐█·▐█▐▐▌▄█ ▀█▄    ▐█▀▀█▄▐█▌▐█▪
 ▐█▌·██▌▐▀▐█ ▪▐▌██▐█▌▐█.█▌▐█▄▪▐█    ██▌.▐█▌.▐▌▐█•█▌    ▐█▄▪▐█ ▐█▌·▐█▌.▐▌▐█▪·•▐█▪·•▐█▌██▐█▌▐█▄▪▐█    ██▄▪▐█ ▐█▀·.
 ▀▀▀ ▀▀▀ · ▀  ▀ ▀▀ █▪·▀  ▀ ▀▀▀▀     ▀▀▀  ▀█▄▀▪.▀  ▀     ▀▀▀▀  ▀▀▀  ▀█▄▀▪.▀   .▀   ▀▀▀▀▀ █▪·▀▀▀▀     ·▀▀▀▀   ▀ • 
*/
