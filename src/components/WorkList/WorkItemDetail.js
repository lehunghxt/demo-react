import React, {useState} from 'react'
import './WorkItemDetail.css'
import { Table } from 'react-bootstrap';

function WorkItemDetail(props) {
    
    const id = props.match.params.id
    const [selectedImages, setSelectedImages] = useState([])
    const [workData, setworkData] = useState({
        actualDate: '',
        remark: '',
        image: []
    })
    const handleDate = (e) => {
        setworkData({
            ...workData,
            actualDate: e.target.value
        })
    }
    const handleRemark = (e) => {
        setworkData({
            ...workData,
            remark: e.target.value
        })
    }
    const handChangeImage = (e) => {
        setworkData({
            ...workData,
            image: e.target.files
        });
        if(e.target.files){
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            setSelectedImages((prevImages)=>prevImages.concat(fileArray))
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file)
            )
        }
    }
    const renderPhotos = (source) => {
        return source.map((photo, index) => {
            return <div>
                        <img id='previewImage' src={photo} key={photo}/>
                        <p>Hình ảnh-{index+1}</p>
                    </div> 
        })
    }
    return (
        <div className='workItemDetail'>
            <div className='workHead'>
                <div className='titleWork'>
                    <h4>Job Name {id}</h4>
                </div>
                <button>Hoàn Thành</button>
            </div>
            <form>
                <table id='work-list'>
                    <tbody>
                        <tr>
                            <th>File #</th>
                            <td>F123</td>
                        </tr>
                        <tr>
                            <th>Account</th>
                            <td>PGI</td>
                        </tr>
                        <tr>
                            <th>Target Date</th>
                            <td>01/11/2020</td>
                        </tr>
                        <tr>
                            <th>Ship Mode</th>
                            <td>Air-LCL-Import</td>
                        </tr>
                        <tr>
                            <th>Qty</th>
                            <td>1 PK/ 2 KGS/ 3 CBM</td>
                        </tr>
                        <tr>
                            <th>ATA</th>
                            <td>01/11/2020</td>
                        </tr>
                        <tr>
                            <th>CDs #</th>
                            <td>11</td>
                        </tr>
                        <tr>
                            <th>Cont #</th>
                            <td>KAJS1938137</td>
                        </tr>
                        <tr>
                            <th>Location</th>
                            <td>HCM</td>
                        </tr>
                        <tr>
                            <th>Actual Date</th>
                            <td>
                                <input 
                                    id='actual-date'
                                    type='date' 
                                    name='actual-date'
                                    onChange={handleDate}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Remark</th>
                            <td>
                            <div className="wrapper"> 
                                <textarea 
                                    cols="30" 
                                    rows="3" 
                                    name='remark'
                                    onChange={handleRemark}
                                ></textarea> 
                            </div> 
                            </td>
                        </tr>
                        <tr>
                            <th>Ảnh</th>
                            <td>
                                <input 
                                    id='uploadImage'
                                    type='file'
                                    name='image'
                                    multiple
                                    onChange={handChangeImage}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td id='boxPreview' colSpan='2'>
                                {renderPhotos(selectedImages)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
export default WorkItemDetail
