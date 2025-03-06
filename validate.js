function checkSID() {
    let sid = (document.getElementById("sid").value).trim();
    
    // ตรวจสอบว่ามีความยาว 10 ตัวอักษรและเป็นตัวเลขทั้งหมด
    if (sid.length === 10 && /^[0-9]{10}$/.test(sid)) {
        return true;
    } else {
        return false;
    }
}

function checkCandiNo() {
    let candi = (document.getElementById("candi").value).trim();
    
    // ตรวจสอบว่าค่าเป็นตัวเลข และอยู่ในช่วง 1-10 เท่านั้น
    if (/^[1-9]$|^10$/.test(candi)) {
        return true;
    } else {
        return false;
    }
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}