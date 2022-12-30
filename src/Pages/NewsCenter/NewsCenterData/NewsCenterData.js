import Img1 from '../../../assets/NewsImages/News1.png'
import Img2 from '../../../assets/NewsImages/News2.png'
import Img3 from '../../../assets/NewsImages/News3.png'
import { v4 as uuidv4 } from 'uuid';
export const NewsData = [
    {
        id: uuidv4(),
        title: 'Urgent care\'s impact during the pandemic and the future of on-demand care',
        briefDesc: 'Urgent care clinics saw a 58% increase in visit volumes due to the demand for COVID-19-related, episodic care 2020.How can urgent care clinics retain these new patients and shift the perception of urgent care to a one-stop-shop for on-demand care?',
        link: 'https://www.healthcareitnews.com/news/urgent-cares-impact-during-pandemic-and-future-demand-care',
        image: Img2
    },
    {
        id: uuidv4(),
        title: 'Hazelview Investments Launches New Venture Capital Fund for Innovative PropTech Entrepreneurs and Makes First Investment',
        briefDesc: 'Hazelview Ventures, a venture capital business focused exclusively on partnering with innovative, early-stage PropTech, BuildTech and CleanTech companies. Beyond simply providing funding, Hazelview Ventures offers entrepreneurs the ability to test, refine and scale at an enterprise level, while optimizing the management of Hazelview\'s real estate properties and investments.',
        link: 'https://www.newswire.ca/news-releases/hazelview-investments-launches-new-venture-capital-fund-for-innovative-proptech-entrepreneurs-and-makes-first-investment-821463792.html',
        image: Img1
    },
    {
        id: uuidv4(),
        title: 'Blockchain.com CFO Says Company Could IPO in ’18-Months,’ Firm’s Balance Sheet Holds BTC, ETH – Bitcoin News',
        briefDesc: 'In March 2021, Bitcoin.com News reported on Blockchain.com raising $300 million and receiving a post-money valuation of around $5.2 billion. The company has been around for quite some time and when it was called “Blockchain.info” it was established by Ben Reeves way back in 2011. In 2013 it was led by Nicolas Cary and was considered the most popular bitcoin wallet at the time.',
        link: 'https://todayuknews.com/crypto-currency/blockchain-com-cfo-says-company-could-ipo-in-18-months-firms-balance-sheet-holds-btc-eth-bitcoin-news/',
        image: Img3
    },
    
]