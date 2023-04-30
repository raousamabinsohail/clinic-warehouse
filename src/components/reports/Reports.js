import React, { useState, useEffect, componentDidUpdate  } from "react";



function Reports() {
    // setup useState
    const [Id, setId] = useState('annual-income-report')

    useEffect(() => {
        const url = window.location.href;
        const lastSlashIndex = url.lastIndexOf('/');
        const extractedId = url.substring(lastSlashIndex + 1);
        setId(extractedId);
    
        const handleUrlChange = () => {
          const updatedUrl = window.location.href;
          const updatedLastSlashIndex = updatedUrl.lastIndexOf('/');
          const updatedExtractedId = updatedUrl.substring(updatedLastSlashIndex + 1);
          setId(updatedExtractedId);
        };
    
        window.addEventListener('popstate', handleUrlChange);
    
        return () => {
          window.removeEventListener('popstate', handleUrlChange);
        };

        }, [Id]);

        

    return (

        <React.Fragment>
            <div className="custom-bar mx-5">

                {(() => {
                    switch (Id) {
                        case 'daily-income-report':
                            return (
                                <div>
                                    <span className="bold-txt"> 4) Report showing drug dispensing and course, date</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>

                                </div>

                            )
                        case 'monthly-income-report':
                            return (
                                <div>
                                    <span className="bold-txt">2) Monthly Income Report Date</span>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                </div>

                            )
                        case 'annual-income-report':
                            return (
                                <div>
                                    <span className="bold-txt">3) Annual income report date</span>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                </div>

                            )
                        case 'sales-report':
                            return (
                                <div>
                                    <span className="bold-txt">4) Report showing drug dispensing and course, date</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>

                                </div>

                            )
                        case 'acc-recive-report':
                            return (
                                <div>
                                    <span className="bold-txt">5) Monthly product receipt-payment account, date</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>

                                </div>

                            )
                        case 'commision-report':
                            return (
                                <div>
                                    <span className="bold-txt">6) Report showing course sales of each employee, date</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <b>employee</b>
                                    <select class="select-bar-tab" name="cars" id="cars">
                                        <option value="volvo">-</option>
                                        <option value="volvo">before meal</option>
                                        <option value="roll">after meal</option>
                                        <option value="grain">with food</option>
                                    </select>
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>

                                </div>

                            )
                        case 'employee-report':
                            return (
                                <div>
                                    <span className="bold-txt">7) Report of hand expenses (hand expenses) of each employee Date</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <b>employee</b>
                                    <select class="select-bar-tab" name="cars" id="cars">
                                        <option value="volvo">-</option>
                                        <option value="volvo">before meal</option>
                                        <option value="roll">after meal</option>
                                        <option value="grain">with food</option>
                                    </select>
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>

                                </div>

                            )
                        case 'inventory-report':
                            return (
                                <div>
                                    <span className="bold-txt">8) Inventory report (Show cost)</span>
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                </div>

                            )
                        case 'appointment-report':
                            return (
                                <div>
                                    <span className="bold-txt"> 9) Date Appointment Report</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>

                                </div>

                            )
                        case 'overdue-report':
                            return (
                                <div>
                                    <span className="bold-txt">10) Overdue customer report date</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>

                                </div>

                            )
                        case 'best-selling-report':
                            return (
                                <div>
                                    <span className="bold-txt">11) Best Sellers Report Date</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>

                                </div>

                            )
                        case 'classified-items-report':
                            return (
                                <div className="d-flx-columnn">
                                    <span className="bold-txt">12) Report of service users classified by product list</span>
                                    <span>
                                        <b>peoduct search &nbsp;</b>
                                        <input type="text" name="name" required autocomplete="off" />
                                    </span>
                                    <span>
                                        <input className="input-date" type="date" />
                                        <b>To</b>
                                        <input className="input-date" type="date" />
                                        <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    </span>

                                </div>

                            )
                        case 'remaning-report':
                            return (
                                <div>
                                    <span className="bold-txt">13) Date remaining course report</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>

                                </div>

                            )
                        case 'summary-report':
                            return (
                                <div>
                                    <span className="bold-txt">14) Summary of sales/income/expenses/profit Date</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>

                                </div>

                            )
                        case 'daily-service-report':
                            return (
                                <div>
                                    <span className="bold-txt">15) Report of daily service users, date</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>

                                </div>

                            )
                        case 'inventory-2-report':
                            return (
                                <div>
                                    <span className="bold-txt">16) Inventory Report</span>
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>

                                </div>

                            )
                        case 'customer-birthday-report':
                            return (
                                <div>
                                    <span className="bold-txt">17) Customer's date of birth report</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>
                                    <p className="text-center">* The system will search only the date and month, ignoring the year.</p>
                                </div>

                            )
                        case 'income-report':
                            return (
                                <div>
                                    <span className="bold-txt">18) Monthly income report separated by category Date</span>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                </div>

                            )
                        case 'balance-report':
                            return (
                                <div>
                                    <span className="bold-txt">19) Balance report</span>
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                </div>

                            )
                        case 'activate-report':
                            return (
                                <div>
                                    <span className="bold-txt">20) Active ingredient report, date</span>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>
                                </div>

                            )
                        case 'narcotic-report':
                            return (
                                <div>
                                    <span className="bold-txt">21) Report on receiving and dispensing of narcotics of category 4 or category 5, monthly, date</span>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>
                                </div>

                            )
                        case 'commission-2-report':
                            return (
                                <div>
                                    <span className="bold-txt">23) Report showing course sales of each employee (TEST) Date</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <b>employee</b>
                                    <select class="select-bar-tab" name="cars" id="cars">
                                        <option value="volvo">-</option>
                                        <option value="volvo">before meal</option>
                                        <option value="roll">after meal</option>
                                        <option value="grain">with food</option>
                                    </select>
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>

                                </div>

                            )
                        case 'cut-off-report':
                            return (
                                <div>
                                    <span className="bold-txt"> 24) Daily cutting course report, date</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>

                                </div>

                            )
                        case 'daily-bill-report':
                            return (
                                <div>
                                    <span className="bold-txt"> 25) Daily bill cancellation report date</span>
                                    <input className="input-date" type="date" />
                                    <b>To</b>
                                    <input className="input-date" type="date" />
                                    <button className="bar-btn mx-2"><i className="fa fa-search"></i>&nbsp;FETCH</button>
                                    <button className="bar-btn mx-2"><i className="fa fa-file-excel-o"></i>&nbsp;EXCEL</button>

                                </div>

                            )



                        //   case 'playing':
                        //     return <Playing handleClick={handleClick} />
                        //   case 'won':
                        //     return <Won handleClick={handleClick} />
                        //   case 'lost':
                        //     return <Lost handleClick={handleClick} />
                        default:
                            return null
                    }
                })()}






            </div>
        </React.Fragment>

    );
}

export default Reports;


