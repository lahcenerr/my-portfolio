import React from 'react'
import './blog.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Blogs from './Blog/blogs';
import Learn from './Learn/learn';


const Blog = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className='blog'>
      <h1 className="blog-title">Blog</h1>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab className = "tab" label="Learn" value="1" />
            <Tab className = "tab" label="Blog" value="2" />
          </TabList>
        </div>
        <TabPanel value="1"><Learn /></TabPanel>
        <TabPanel value="2"><Blogs /></TabPanel>
      </TabContext>
    </section>
  );
}

export default Blog
