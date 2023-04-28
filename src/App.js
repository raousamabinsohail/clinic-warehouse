import TopBar from './components/TopBar';
import './App.css';

import { Route, Routes } from "react-router-dom"
import Registration from './components/ProductAndDrugRegistration';
import ImportData from './components/ImportData';
import ReceiptNumber from './components/ReceiptNumber';
import ReceivingGoods from './components/ReceivingGoods';
import Lab from './components/service/Lab';
import Examination from './components/service/Examination';
import Reports from './components/reports/Reports';
function App() {
  return (
    <>
      <TopBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/import" element={<ImportData />} />
          <Route path="/receiving" element={<ReceivingGoods />} />
          <Route path="/receipt-number" element={<ReceiptNumber />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/examination" element={<Examination />} />
          <Route path="/report" element={<Reports/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
