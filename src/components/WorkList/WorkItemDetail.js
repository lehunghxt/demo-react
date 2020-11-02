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
        return source.map((photo) => {
            return <img id='previewImage' src={photo} key={photo}/>
        })
    }
    return (
        <div className='workItemDetail'>
            <div className='workHead'>
                <div className='titleWork'>
                    <h6>Hien thi cong viec chi tiet {id}</h6>
                </div>
                <button>Hoàn Thành</button>
            </div>
            <form>
                <table id='work-list'>
                    <tbody>
                        <tr>
                            <th>File #</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Account</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Target Date</th>
                            <td></td>
                            
                        </tr>
                        <tr>
                            <th>Ship Mode</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Qty</th>
                            <td>123</td>
                            
                        </tr>
                        <tr>
                            <th>Cut Off</th>
                            <td>tmp</td>
                        </tr>
                        <tr>
                            <th>CDs #</th>
                            <td>1</td>
                            
                        </tr>
                        <tr>
                            <th>Cont #</th>
                            <td>true</td>
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
