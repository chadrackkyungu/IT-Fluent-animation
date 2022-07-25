import React, {useEffect, useState} from "react"
import { Row, Col, Card, CardBody, CardText, CardSubtitle} from "reactstrap"
import { Link } from "react-router-dom";

import Breadcrumb from '../../components/Common/Breadcrumb';
import { collection, getDocs } from 'firebase/firestore';
import { Db } from "../../Database/init-firebase";
import MetaTags from "react-meta-tags";

const AllExams = () => {

  const [dataDb, setData] = useState([]);

  useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "EXAMS"));
            querySnapshot.forEach((doc) => {
            list.push({id: doc.id, ...doc.data().allfield});
        })
        setData(list);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="All Exams" />
        </Row>
        <MetaTags>
          <title> Smart-school | All Exams</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="All Exams" />
        </Row>


        <Row className="subjects-container">
            {
              dataDb.map((subject, i) => {
                return(
                  <Col mg={6} lg={4}>
                      <Card key={i} className="rounded" data-aos="fade-up">

                          <div className="image-container">
                            <img  className="img-fluid rounded-top" src={subject.img} alt="smart-school-all subject" />
                          </div>

                        <CardBody>
                          <CardSubtitle className="h4 mt-0 ">{subject.subjectName}</CardSubtitle>
                          <CardText>
                            <h5 className="mt-3 mb-3"> Code : {subject.subjectCode}  ||  Type : {subject.type}</h5> 
                            <p> Grade : {subject.grade} </p> 
                          </CardText>
                          <div className="d-flex justify-content-between  btn-container">
                            <Link to={`/update-exam/${subject.id}`} className="btn bg-blue-400 waves-effect waves-light gray-100">Update</Link>
                          </div>
                        </CardBody>
                    </Card>
                  </Col>
                )
              })
            }
          
        </Row>


      </div>
    </React.Fragment>
  );
};

export default AllExams;
