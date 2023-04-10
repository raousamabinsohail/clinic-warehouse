import TopBar from './components/TopBar';
import './App.css';

import { Route, Routes } from "react-router-dom"
import Registration from './components/ProductAndDrugRegistration';
import ImportData from './components/ImportData';
import ReceiptNumber from './components/ReceiptNumber';
import ReceivingGoods from './components/ReceivingGoods';
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
        </Routes>
      </div>
    </>
  )
}

export default App
