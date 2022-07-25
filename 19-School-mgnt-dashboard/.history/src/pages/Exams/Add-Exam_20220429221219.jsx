import React, { useState, useEffect } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import MetaTags from "react-meta-tags";
import Breadcrumb from '../../components/Common/Breadcrumb';

import { serverTimestamp, doc, setDoc, addDoc, collection, getDocs, updateDoc} from 'firebase/firestore';
import { Db, storage } from '../../Database/init-firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { successTost_addStd, errorTost, successTost_Update_Std, failUpdate_std } from '../../components/Toast'; //Toast Notification
//image
import schoolImg from '../../assets/images/login-img.png';

//arrays
import  { grade_Arrays } from '../ARRAYS-AND-OBJECTS/Garde-Arrays.jsx';
import BackBtn from "../../components/Back-btn";

const AddExams = () => {
  

  const handleValidSubmit = async(e, std_Input) => {
    console.log(std_Input);

    const { subjectName,subjectCode,type,grade } = std_Input;
    const allfield = { subjectName,subjectCode,type,grade,  timeStamp: serverTimestamp()};

    try {
      await addDoc(collection(Db, "EXAMS"), { allfield });
     successTost_addStd();
    } catch (error) {
      errorTost()
    }
  };


  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTags>
          <title> Smart-school | Add Exam</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="Add New Exam" />
        </Row>

        <div className="d-flex justify-content-between align-items-center mb-4">
                <BackBtn url_Link="all-exams" />
                <div className="btn-center text-center ">
                   <h5> Add Exam </h5>
                </div>
        </div>


        <Row className="d-flex justify-content-around align-items-center  mobile-form-padding" data-aos="fade-up">       
      <Col xl={12} md={6}>
        <Card className="mini-stat bg-white text-black ">
          <CardBody>
            <AvForm onValidSubmit={(e, v) => {
               handleValidSubmit(e, v);
            }}>
            <h5 className="mb-5"> Add Subjects  </h5>
            <hr />
            <Row> 
              <Col md={6}> 

                <AvField type="select" name="exam" label="Select Exam or Test" className="mb-3 p-2 bg-white input-style"   errorMessage="please select Subject Type"  validate={{ required: { value: true }}}>
                  <option></option>
                  <option>Exam </option>
                  <option>Test 1</option>
                  <option>Test 2</option>
                </AvField>
               
                  <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="subjectName"
                      label="Subject Name"
                      type="text"
                      errorMessage="Please enter subject name"
                      validate={{ required: { value: true } }}
                  />

                <AvField type="select" name="grade"  label="Class grade" className="mb-3 p-2 bg-white input-style"  validate={{ required: { value: true }}}>
                  {
                    grade_Arrays().map((grade, key) => 
                      <option key={key}> {grade} </option>
                    )
                  }
                </AvField>

                <AvField type="select" name="section" label="Select section" className="mb-3 p-2 bg-white input-style"   errorMessage="please select Subject Type"  validate={{ required: { value: true }}}>
                  <option></option>
                  <option>A </option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </AvField>
              </Col> 

              <Col md={6}>
              
              
              <AvField type="select" name="semester" label="Semester" className="mb-3 p-2 bg-white input-style"   errorMessage="please select Subject Type"  validate={{ required: { value: true }}}>
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                </AvField>

                <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="subjectName"
                      label="Subject Name"
                      type="date"
                      errorMessage="Please enter subject name"
                      validate={{ required: { value: true } }}
                  />
                <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="StartTime"
                      label="Start Time"
                      type="time"
                      errorMessage="Please enter time"
                      validate={{ required: { value: true } }}
                  />
                <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="EndTime"
                      label="End Time"
                      type="time"
                      errorMessage="Please enter end time"
                      validate={{ required: { value: true } }}
                  />
</Col>
                <FormGroup className="mb-0">
                  <div className="d-flex justify-content-center p-2 text-center">
                    <Button type="submit" color="primary" className="m-2  btn-mobile-width" >
                      Submit
                    </Button>
                  </div>
                </FormGroup>

                </Row>
              </AvForm>
              </CardBody>
        </Card>
      </Col>
    </Row> 


      </div>
    </React.Fragment>
  );
};

export default AddExams;
