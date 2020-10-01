//navbar
window.addEventListener('scroll', function(){
    // console.log($(window).scrollTop());
    $(window).scrollTop() >= 20 ? document.getElementById('navigation').classList.add('nav-transition') : document.getElementById('navigation').classList.remove('nav-transition');
});

//Udemy section

//UW section




//Build Resume to link in responsive portfolio
//Main div to append text to DOM
let mainContainer = document.querySelector('.resume');

//Create div to section resume
let headerDiv = document.createElement('div');

//Create the Header 'Chris Alexander Sison'
let headerCAS = document.createElement('h1');

headerCAS.setAttribute('class', 'display-4');

headerCAS.textContent = 'Chris Alexander Sison';

mainContainer.appendChild(headerDiv);

headerDiv.appendChild(headerCAS);


//Create contact info: Cell phone, Email, HOR
let contactInfoTable = document.createElement('tr');

let contactInfoEl1 = document.createElement('td');
let contactInfoEl2 = document.createElement('td');
let contactInfoEl3 = document.createElement('td');

contactInfoEl1.setAttribute('class', 'text-muted');
contactInfoEl2.setAttribute('class', 'text-muted');
contactInfoEl3.setAttribute('class', 'text-muted');

contactInfoEl1.textContent = '(c) 425-876-0866 |';
contactInfoEl2.textContent = ' c.sison@wsu.edu |';
contactInfoEl3.textContent = ' Address: 3319 116th Ave NE, Lake Stevens, WA 98258';

headerDiv.appendChild(contactInfoEl1);
headerDiv.appendChild(contactInfoEl2);
headerDiv.appendChild(contactInfoEl3);

//Summary of qualifications
let summaryQualDiv = document.createElement('div');

let summaryHeader = document.createElement('h4');
let summaryOfQual = document.createElement('p');
let summary = document.createElement('p');

summaryHeader.setAttribute('class', 'mt-4');

summaryHeader.textContent = 'Summary';
summaryOfQual.textContent = 'Summary of qualifications';
summary.textContent = 'Graduate of Washington State University with a B.S. in Psychology. Military professional with three years of active duty service that include combat experience and extensive training in security, communication/surveillance, and emergency medical response. Full-time student enrolled in the University of Washington’s Full-Stack coding program, looking to gain experience and expand knowledge within the field of software development.';

mainContainer.appendChild(summaryQualDiv);
summaryQualDiv.appendChild(summaryHeader);
summaryQualDiv.appendChild(summaryOfQual);
summaryQualDiv.appendChild(summary);

//Education
let educationDiv = document.createElement('div');

let educationHeader =document.createElement('h4');
let educationEl1 = document.createElement('p');
let educationEl2 = document.createElement('p');
let educationEl3 = document.createElement('p');

educationHeader.textContent = 'Education';

educationEl1.textContent = 'B.S. Psychology, Washington State University, Pullman, WA, May 2020';
educationEl2.textContent = 'UW Professional & Continuing Education certification in Full-Stack Web Development, December 2020';
educationEl3.textContent = 'Udemy courses: HTML, CSS, JavaScript, jQuery, Bootstrap 4, MySQL, and Web Developer bootcamp';

mainContainer.appendChild(educationHeader);
mainContainer.appendChild(educationDiv);
educationDiv.appendChild(educationEl1);
educationDiv.appendChild(educationEl2);
educationDiv.appendChild(educationEl3);

//Skills 
let skillsDiv = document.createElement('div');

let skillsHeader =document.createElement('h4');
let skillsEl1 = document.createElement('p');
let skillsEl2 = document.createElement('p');
let skillsEl3 = document.createElement('p');
let skillsEl4 = document.createElement('p');
let skillsEl5 = document.createElement('p');
let skillsEl6 = document.createElement('p');
let skillsEl7 = document.createElement('p');

skillsHeader.textContent = 'Skills';

skillsEl1.textContent = '•Ability to adapt and overcome in stressful environments';
skillsEl2.textContent = '•Ability to operate and troubleshoot various communication systems, and platforms';
skillsEl3.textContent = '•Effectively communicates in both written, and verbal formats';
skillsEl4.textContent = '•Detail oriented, active participant, and a team player';
skillsEl5.textContent = '•Exceptional time management skills';
skillsEl6.textContent = '•Experience with Microsoft Office, Visual Studio, and VS Code';
skillsEl7.textContent = '•Professional and accountable';

mainContainer.appendChild(skillsHeader);
mainContainer.appendChild(skillsDiv);
skillsDiv.appendChild(skillsEl1);
skillsDiv.appendChild(skillsEl2);
skillsDiv.appendChild(skillsEl3);
skillsDiv.appendChild(skillsEl4);
skillsDiv.appendChild(skillsEl5);
skillsDiv.appendChild(skillsEl6);
skillsDiv.appendChild(skillsEl7);

//Experience
let experienceDiv = document.createElement('div');

let experienceHeader = document.createElement('h4');

let jobTitle1 = document.createElement('h5');
let job1 = document.createElement('h6');
let job1Task = document.createElement('p');

let jobTitle2 = document.createElement('h5');
let job2 = document.createElement('h6');
let job2Task = document.createElement('p');
let job2Task1 = document.createElement('p');

let jobTitle3 = document.createElement('h5');
let job3Task = document.createElement('p');
let job3Task1 = document.createElement('p');

jobTitle1.textContent = 'Commissioned Officer (35D), Washington Army National Guard, May 2020 – Present Joint Base Lewis-McChord, WA';
jobTitle2.textContent = 'Infantryman, US Army, August 2015 - August 2018 Joint Base Elmendorf-Richardson, AK';
jobTitle3.textContent = '7-month deployment to Afghanistan, September 2017 to April 2018';

job1.textContent = 'Platoon Leader. Duties include:';
job1Task.textContent = '•Maintain accountability and readiness of 13 soldiers specializing in various strategic languages.';

job2.textContent = 'Senior Radio Telephone Operator (RTO) for a 40-person platoon sized element. Duties included:';
job2Task.textContent = '•Responsibility for maintaining, employing and troubleshooting all communication systems essential to mission completion.';
job2Task1.textContent = '•Advise and assist senior leaders with different communication systems and serve as a liaison between senior leaders and signal intelligence specialists.';

job3Task.textContent = '•Served primarily as an automatic weapon system operator providing security on combat operations.';
job3Task1.textContent = '•Assisted with maintenance of telecommunication systems, sensitive items, and handling and employing classified information. ';

mainContainer.appendChild(experienceDiv);
experienceDiv.appendChild(jobTitle1);
experienceDiv.appendChild(job1);
experienceDiv.appendChild(job1Task);

experienceDiv.appendChild(jobTitle2);
experienceDiv.appendChild(job2);
experienceDiv.appendChild(job2Task);
experienceDiv.appendChild(job2Task1);

experienceDiv.appendChild(jobTitle3);
experienceDiv.appendChild(job3Task);
experienceDiv.appendChild(job3Task1);