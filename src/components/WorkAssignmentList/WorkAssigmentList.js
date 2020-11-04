import React, { Component } from 'react'
import WorkAssignmentItems from './WorkAssignmentItems'
import axios from 'axios'

export class WorkAssigmentList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             works : [
                 {
                     id: 1,
                     name: 'PGI-File.123-Job Assigment Name 1',
                     file: 'file123',
                     shipment: 'datashipment',
                     house: 'datahouse',
                     shiptype: 'COD',
                     qty: 'qty-num',
                     etd: 'tmp',
                     cds: 'tmp',
                     target: '123',
                     require: 'true',
                     location: 'hcm'
                 },
                 {
                    id: 2,
                    name: 'PGI-File.123-Job Assigment Name 2',
                    file: 'file222',
                    shipment: 'datashipment22',
                    house: 'datahouse22',
                    shiptype: 'COD22',
                    qty: 'qty-num22',
                    etd: 'tmp22',
                    cds: 'tmp',
                    target: '12322',
                    require: 'true22',
                    location: 'hcm22'
                },
                {
                    id: 3,
                    name: 'PGI-File.123-Job Assigment Name 3',
                    file: 'file12333',
                    shipment: 'datashipment33',
                    house: 'datahouse33',
                    shiptype: 'COD33',
                    qty: 'qty-num33',
                    etd: 'tmp33',
                    cds: 'tmp',
                    target: '12333',
                    require: 'true33',
                    location: 'hcm33'
                }
             ]
        }
    }
    componentDidMount() {
        console.log('WorkAssigmentList');
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            console.log(res);
            console.log('=============================================');
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.works.map(work => {
                        return(
                            <WorkAssignmentItems key={work.id} work={work}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default WorkAssigmentList
