import React from 'react'
import Paper from '@mui/material/Paper';
import './activity-showcase.styles.scss';

const ActivityShowCase = () => {

    const ImageUrl = [
        "https://images.unsplash.com/photo-1528502668750-88ba58015b2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1603354351226-d82bd4a635a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ]

      
    return (

        <div className="activities-showcase-container">
            <div className="activities-showcase-header">
                <h1>กิจกรรมของเรา</h1>
            </div>
            <div className="activities-showcase-gallery-container">
                <Paper className="paper-container" elevation={3}
                    style={{
                        background: `url(${ImageUrl[0]}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,
                    }}
                >
                    <h2>กิจกรรมสะเต็มศึกษากับธรรมชาติในชุมชน</h2>
                    <p>"lorem ipsum"</p>
                </Paper>

                <Paper className="paper-container" elevation={3}
                    style={{
                        background: `url(${ImageUrl[1]}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,
                    }}
                >
                    <h2>กิจกรรมสะเต็มศึกษากับธรรมชาติในชุมชน</h2>
                    <p>"lorem ipsum"</p>
                </Paper>

                <Paper className="paper-container" elevation={3}
                    style={{
                        background: `url(${ImageUrl[2]}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,
                    }}
                >
                    <h2>กิจกรรมสะเต็มศึกษากับธรรมชาติในชุมชน</h2>
                    <p>"lorem ipsum"</p>
                </Paper>
            </div>
        </div>
    )
}

export default ActivityShowCase