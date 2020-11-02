import React, { Component } from 'react'
import WorkItem from './WorkItem'

export class WorkList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             works : [
                 {
                     id: 1,
                     name: 'Cong viec 1',
                     file: 'file123file123file123file123file123',
                     shipment: 'datashipment',
                     house: 'datahouse',
                     shiptype: 'COD',
                     qty: 'qty-num',
                     etd: 'tmp',
                     target: '123',
                     require: 'true',
                     location: 'hcmhcmhcmhcmhcmhcmhcmhcmhcm'
                 },
                 {
                    id: 2,
                    name: 'Cong viec 2',
                    file: 'file222',
                    shipment: 'datashipment22',
                    house: 'datahouse22',
                    shiptype: 'COD22',
                    qty: 'qty-num22',
                    etd: 'tmp22',
                    target: '12322',
                    require: 'true22',
                    location: 'hcm22'
                },
                {
                    id: 3,
                    name: 'Cong viec 3',
                    file: 'file12333',
                    shipment: 'datashipment33',
                    house: 'datahouse33',
                    shiptype: 'COD33',
                    qty: 'qty-num33',
                    etd: 'tmp33',
                    target: '12333',
                    require: 'true33',
                    location: 'hcm33'
                }
             ]
        }
    }
    
    render() {
        return (
            <div>
                <h2>Danh Sach Cong Viec</h2>
                {
                    this.state.works.map(work => {
                        return(
                            <WorkItem key={work.id} work={work}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default WorkList
