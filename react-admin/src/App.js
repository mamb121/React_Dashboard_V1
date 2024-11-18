import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom"
import Topbar from './scenes/global/Topbar';
import MainSidebar from './scenes/global/MainSidebar';
import Dashboard from './scenes/dashboard';
//import { Sidebar } from "react-pro-sidebar";
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoices from './scenes/invoices';
import Form from './scenes/form';
//import Calendar from './scenes/calendar/calendar';
import Calendar from './scenes/cal/MyCalendar';
import FAQ from './scenes/faq';
import Bar from './scenes/bar';
import Line from './scenes/line';
import Pie from './scenes/pie';
// import Gography from './scenes/gography';




function App() {
  const [theme,colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <MainSidebar isSidebar={isSidebar}/>
        <main className="content">        
          <Topbar setIsSidebar={setIsSidebar} />          
          <Routes>
           <Route path="/" element={<Dashboard />} />
           <Route path="/team" element={<Team />} />
           <Route path="/contacts" element={<Contacts />} />
           <Route path="/invoices" element={<Invoices />} />
           <Route path="/form" element={<Form />} />
           <Route path="/calendar" element={<Calendar />} />
           <Route path="/faq" element={<FAQ />} />
           <Route path="/bar" element={<Bar />} />
           <Route path="/pie" element={<Pie />} />
           <Route path="/line" element={<Line />} />
           {/*            
           
           <Route path="/gography" element={<Gography />} />*/}
          </Routes>
        </main>
      </div>;      
    </ThemeProvider>    
  </ColorModeContext.Provider>    
  )
}

export default App;
