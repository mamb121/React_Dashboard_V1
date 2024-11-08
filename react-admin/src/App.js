import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom"
import Topbar from './scenes/global/Topbar';
import MainSidebar from './scenes/global/MainSidebar';
import Dashboard from './scenes/dashboard';
import { Sidebar } from "react-pro-sidebar";
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoices from './scenes/invoices';
import Form from './scenes/form';
// import Contacts from './scenes/contacts';
// import Bar from './scenes/bar';

// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Gography from './scenes/gography';
// import Calender from './scenes/calender';



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
           {/*            
           <Route path="/bar" element={<Bar />} />           
           <Route path="/line" element={<Line />} />
           <Route path="/pie" element={<Pie />} />
           <Route path="/faq" element={<FAQ />} />
           <Route path="/gography" element={<Gography />} />
           <Route path="/calender" element={<Calender />} /> */}
          </Routes>
        </main>
      </div>;      
    </ThemeProvider>    
  </ColorModeContext.Provider>
    
  );
}

export default App;
