import React, { useState } from 'react'
import { FaAlignJustify } from 'react-icons/fa';
import {Link} from "react-router-dom";

function WorkItem({work}) {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <div>
            <div className='intro'>
                <div className='introTitle' onClick={()=>setShowInfo(!showInfo)}>
                    <p>
                        {work.name}
                    </p>
                </div>
                <div className='gotoDetail'>
                    <Link to={"workDetail/"+work.id}>
                        <FaAlignJustify id='iconDetail'/>
                    </Link>
                    
                </div>
            </div>
            <div className='detail' style={{ display: showInfo ? "block" : "none" }}>
                <table>
                    <tbody>
                    <tr>
                            <th>File#:</th>
                            <td>{work.file}</td>
                            <th>Shipment:</th>
                            <td>{work.shipment}</td>
                        </tr>
                        <tr>
                            <th>House:</th>
                            <td>{work.house}</td>
                            <th>Shiptype:</th>
                            <td>{work.shiptype}</td>
                        </tr>
                        <tr>
                            <th>Qty:</th>
                            <td>{work.qty}</td>
                            <th>ETD/ATA:</th>
                            <td>{work.etd}</td>
                        </tr>
                        <tr>
                            <th>Target:</th>
                            <td>{work.target}</td>
                            <th>Required:</th>
                            <td>{work.require}</td>
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

export default WorkItem
