// USED PACKAGES
import React, { useEffect } from 'react'
import { Container } from '@material-ui/core'

// USED COMPONENTS
import TopBackground from '../../Components/TopBackground/TopBackground'

// USED Images
import NewsCenterBg from '../../assets/Images/NewsCenter_bg.png'

// CSS IMPORTS
import classes from './NewsCenter.module.css'

// USED DATA
import { NewsData } from './NewsCenterData/NewsCenterData';

const NewsCenter = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    
    return (
        <>
         <TopBackground bg={NewsCenterBg} name='News Center' />   

         <div className={classes.NewsCenter}>
            <Container>
                <h1 className={classes.TopNews}>top news</h1>
                <br /><br />

                {
                    NewsData.map((news)=>{
                        return (
                            <div className={classes.News} key={news.id}>
                                <div className={classes.NewsContent}>
                                    <div className={classes.NewsTitle}><h2>{news.title}</h2></div>
                                    <div className={classes.NewsDescription}>
                                        <p>
                                            {news.briefDesc}
                                        </p>
                                    </div>
                                    <a href={news.link} target='blank' className={classes.ReadMore1} >read more</a>
                                </div>
                                <div className={classes.NewsImage}>
                                    <div className={classes.NewsImageContainer}>
                                        <img src={news.image} alt="" />
                                    </div>
                                </div>
                                <a href={news.link} target='blank' className={classes.ReadMore2} >read more</a>
                            </div>
                        );
                    })
                }
                
                
            </Container>

         </div>
        </>
    )
}

export default NewsCenter
