// Import Dependencies
import React from 'react';
import {Routes, Route } from 'react-router-dom'
import ResponsiveAppBar from './AppBar';
import Resume from './Resume.jsx';
import Footer from './Footer.jsx';
import TechAssessment from './TechAssessment.jsx'
import ProjectDescription from './ProjectDescription';
import '../styles/App.css';

const App = () => {
  // Returned JSX
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <br/>
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
      <br/>
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
