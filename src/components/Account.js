import styled from 'styled-components'
// import { Container, Row, Col } from "react-grid-system";
import Header from './Header';
import Footer from './Footer';
// import Scrollbars from "react-scrollbars-custom";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Account() {
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <div>
            <Header/>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Account information" {...a11yProps(0)} />
                    <Tab label="Change password" {...a11yProps(1)} />
                    <Tab label="My Orders" {...a11yProps(2)} />
                    <Tab label="My wish list" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
            </Box>
            <Footer/>
        </div>
  );
}

// ................................................................................
// const User = {
//     "username": "Long",
//     "password": "123456",
//     "fname": "Nguyen",
//     "lname": "Long",
//     "email": "Nothing@gmail.com",
//     "phone": "birthday",
//     "url_avt": "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-trang-dep-1.jpg"
// }
// const NameTab = styled(Tab)`
//     font-weight: 600;
// `