import React, {useState, useEffect} from 'react'
import './style.css'
import { Container, Row, Col } from 'reactstrap';
import { AiOutlineDoubleRight } from 'react-icons/ai';

import Loading from './../Loading.js'

const url = 'https://course-api.com/react-tabs-project'

const Menu = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([{
    "id": "recAGJfiU4CeaV0HL",
    "order": 3,
    "title": "Full Stack Web Developer",
    "dates": "December 2015 - Present",
    "duties": [
      "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
      "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
      "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian."
    ],
    "company": "TOMMY"
  },
  {
    "id": "recIL6mJNfWObonls",
    "order": 2,
    "title": "Front-End Engineer",
    "dates": "May 2015 - December 2015",
    "duties": [
      "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
      "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1"
    ],
    "company": "BIGDROP"
  },
  {
    "id": "rec61x18GVY99hQq5",
    "order": 1,
    "title": "Engineering Intern",
    "dates": "May 2014 - September 2015",
    "duties": [
      "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
      "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
      "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism."
    ],
    "company": "CUKER"
  }])
    const [index, setIndex] = useState(0)

    const fetchData = async () =>{
        setLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }   
    }

    useEffect(() => {
        fetchData()
    },[])

    if(loading){
        return <Loading />
    }

    const {id, title, dates, duties, company} = data[index]

    return (
        <Container className="themed-container" fluid="md">
            <Row>
                <Col>
                    <div className='header'>
                        <h2>Expierence</h2>
                        <div className='underline'></div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="3" className='buttons'>
                    {
                        data.map((com,i)=>{
                            const cn = `comBtn ${i === index && 'activeBtn'}`
                            return <button className={cn}
                                onClick={()=>setIndex(i)}
                            >
                            {com.company}
                            </button>
                        })
                    }
                </Col>
                <Col xs="9" className='content'>
                    <h3>{title}</h3>
                    <h5>{company}</h5>
                    <p>{dates}</p>
                    {
                        duties.map((duty,i)=>{
                            return (<div className='duties'>
                                <AiOutlineDoubleRight />
                                <p>{duty}</p>
                            </div>)
                        })
                    }
                    <button className='infoBtn'>more info</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Menu
