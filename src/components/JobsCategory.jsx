/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleJobCard from './SingleJobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';


// eslint-disable-next-line react/prop-types
const JobsCategory = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data)
        }
        getData();
    }, [])
    return (
        <>
            <Tabs>
                <div className='container px-6 py-6 mx-auto'>
                    <h1 className='text-3xl font-bold text-center my-5'>Find Your Dream Jobs Here</h1>
                    <p className='text-center pb-3'>world largest job searching and job posting site. </p>
                    <div className='flex items-center justify-center font-bold '>
                        <TabList className='bg-fuchsia-600 '>
                            <Tab>On-Site Job</Tab>
                            <Tab>Remote Job</Tab>
                            <Tab>Hybrid Job</Tab>
                            <Tab>Part-Time Job</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <div className='grid grid-cols-1 gap-6 mt-6 xl:mt-14 md:grid-cols-2 '>
                            {jobs.filter(j => j.category === 'On-Site Job')
                                .map(job =>
                                    <SingleJobCard key={job._id} job={job}
                                    />)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid grid-cols-1 gap-6 mt-6 xl:mt-14 md:grid-cols-2 '>
                            {jobs.filter(j => j.category === 'Remote Job')
                                .map(job =>
                                    <SingleJobCard key={job._id} job={job}
                                    />)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid grid-cols-1 gap-6 mt-6 xl:mt-14 md:grid-cols-2 '>
                            {jobs.filter(j => j.category === 'Hybrid')
                                .map(job =>
                                    <SingleJobCard key={job._id} job={job}
                                    />)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid grid-cols-1 gap-6 mt-6 xl:mt-14 md:grid-cols-2 '>
                            {jobs.filter(j => j.category === 'Part-time')
                                .map(job =>
                                    <SingleJobCard key={job._id} job={job}
                                    />)}
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </>
    );
};

export default JobsCategory;