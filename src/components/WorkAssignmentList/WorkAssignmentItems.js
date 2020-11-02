import React, { useState } from 'react'
import { BiListPlus } from 'react-icons/bi';
import {Link} from "react-router-dom";

function WorkAssignmentItems({work}) {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <div>
            <div className='intro'>
                <div className='introTitle' onClick={()=>setShowInfo(!showInfo)}>
                    <h5>
                        {work.name}
                    </h5>
                </div>
                <div className='gotoDetail'>
                    <BiListPlus id='iconAssigment'/>
                </div>
            </div>
            <div className='detail' style={{ display: showInfo ? "block" : "none" }}>
                <table>
                    <tbody>
                        <tr>
                            <th>Target:</th>
                            <td>{work.target}</td>
                            <th>Shiptype:</th>
                            <td>{work.shiptype}</td>
                        </tr>
                        
                        <tr>
                            <th>House:</th>
                            <td>{work.house}</td>
                            <th>CDs #:</th>
                            <td>{work.cds}</td>
                        </tr>
                        <tr>
                            <th>Qty:</th>
                            <td>{work.qty}</td>
                            <th>ATA:</th>
                            <td>{work.etd}</td>
                        </tr>
                        <tr>
                            <th>Location:</th>
                            <td colSpan='3'>{work.location}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WorkAssignmentItems
