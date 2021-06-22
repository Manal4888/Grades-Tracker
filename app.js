`use strict`

function Students(name,course){
  this.name=name;
  this.grade=getRndInteger(0, 100);
  this.course=course;

  Students.list.push(this);
}

Students.list=[];


let form= document.getElementById('form');
form.addEventListener('submit',submitter);

function submitter(event){

event.preventDefault();
 let name=event.target.name.value ;
 let course=event.target.course.value;

 new Students(name,course);
 console.log( Students.list);
 sendToLocalStorage();
 getFromLocalStorage();
 render();

}





function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }





  function sendToLocalStorage()
  {
      let data=JSON.stringify(Students.list);
      localStorage.setItem('student',data);
  }





  let  storedList=[];

  function getFromLocalStorage()
   {
     storedList=JSON.parse( localStorage.getItem('student'));
     console.log(storedList)
   }




counter=0;
   let table=document.getElementById('table');
 function render() {

 let stuRow=document.createElement('tr');
 table.appendChild(stuRow);

 let stuName=document.createElement('td');
 stuRow.appendChild(stuName);
 stuName.textContent=storedList[counter].name;

 let stuGrade=document.createElement('td');
 stuRow.appendChild(stuGrade);
 stuGrade.textContent=storedList[counter].grade;

 let stuCourse=document.createElement('td');
 stuRow.appendChild(stuCourse);
 stuCourse.textContent=storedList[counter].course;
 counter++;
 }

 
