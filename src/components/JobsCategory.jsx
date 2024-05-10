import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobsCategory = () => {
    return (
        <>
            <Tabs>
                <div className='container px-6 py-6 mx-auto'>
                    <h1 className='text-3xl font-bold text-center my-5'>Find Your Dream Jobs Here</h1>
                    <p className='text-center pb-3'>world largest job searching and job posting site. </p>
                    <div className='flex items-center justify-center '>
                        <TabList>
                            <Tab>On-Site Job</Tab>
                            <Tab>Remote Job</Tab>
                            <Tab>Hybrid Job</Tab>
                            <Tab>Part-Time Job</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <h2>On-Site Job</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Remote Job</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Hybrid Job</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Part-Time Job</h2>
                    </TabPanel>
                </div>
            </Tabs>
        </>
    );
};

export default JobsCategory;