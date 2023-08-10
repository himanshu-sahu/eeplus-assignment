import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button } from 'react-bootstrap'
import Bargraph from './Bargraph';
import Linegraph from './Linegraph';
import Piechart from './Piechart';

function UncontrolledExample() {
    return (
        <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="Home">
                <div className='d-flex flex-column flex-column m-auto'>
                    <ul className='text-lg' style={{ fontSize: 24 }}>
                        <h3 className='text-start'>This platform is use to track the energy consumption.</h3>
                        <li className='text-start'>Monthly Electricity Consumption</li>
                        <li className='text-start'>State-wise Electricity Consumption</li>
                        <li className='text-start'>Quarterly Distribution of Electricity Consumption</li>
                    </ul>
                </div>
            </Tab>
            <Tab eventKey="piechart" title="Quarterly Energy Consumption">
                <Piechart />
            </Tab>
            <Tab eventKey="bargraph" title="Monthly Energy Consumption">
                <Bargraph />
            </Tab>
            <Tab eventKey="linegraph" title="State-wise Energy Consumption">
                <Linegraph />
            </Tab>

        </Tabs>
    );
}

export default UncontrolledExample;