// let studGrade =50;
// if(studGrade >=90 ){
//     console.log("A+  You are grouped under higher class.")
// }
// else if(studGrade >= 85){
//     console.log("A great extniction.");
// }
// else if(studGrade >= 75){
//     console.log("B+ Middium");
// }
// else if(studGrade >=60){
//     console.log("C+ Lower class");
// }
// else{
//     console.log("F sorry you are under expected.");
// }
// student.name="myLife";
//     delete student.department;
// for(let any in student){
//     console.log(`${any}:${student[any]}`);
// }

let students =[{everyThing:"My Name is:", never:"yeshwond"},
            {everyThing:"My father Name is:", never:"lisanwork"}
];
   function getstudents(){
    setTimeout(() => {
        let Name="";
        students.forEach((anyThing,index)=>{
            Name+=`<li>${anyThing.everyThing} ${anyThing.never}</li>`
        });
        document.body.innerHTML=Name;
        
    }, 1000);
   }
    function creatstud(student,callback){
        setTimeout(()=>{
            students.push({everyThing:"I am ",never:"software engineering student"});
            callback();
        },2000)
    }
creatstud({everyThing:"myDepartment:",never:"Software Engineering"},getstudents);
