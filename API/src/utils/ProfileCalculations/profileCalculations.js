export const profileCalculations = async (data) => {
  const {
    dob,
    fullName,
    email,
    mobile,
    location,
    gender,
    education,
    language,
    workType,
  } = data;

  const { highestQualification, degree, specialization } = education;

  let checkList = {
    dob: dob ? 1 : 0,
    fullName: fullName ? 1 : 0,
    email: email ? 1 : 0,
    mobile: mobile ? 1 : 0,
    location: location ? 1 : 0,
    gender: gender ? 1 : 0,
    education: {
      highestQualification: highestQualification ? 1 : 0,
      degree: degree ? 1 : 0,
      specialization: specialization ? 1 : 0,
    },
    language: language ? 1 : 0,
    workType: workType ? 1 : 0,
  };
  console.log(Object.keys(checkList).length);

  //Main counts
  const handleNestedObjects = (datum) => {
    let totalScore = 0
    
    for (let key in datum) {
      totalScore += datum[key];
    }
    // const result = 
    // return 
  };

  let totalScore = 0;
  for (let key in checkList) {
    // console.log("This is key", checkList[key]);
    if (typeof checkList[key] === "object") {
      handleNestedObjects(checkList[key]);
    } else {
      totalScore += checkList[key];
    }
  }

  //ends

  return;
};
