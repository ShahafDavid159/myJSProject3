
let users = [
  {
      firstname: "adiel",
      lastname: "mendelson",
      email: "adiel@gmail.com",
      homeaddress: "hadekel 32 tirat carmel",
      phonenum: "054-4777627"
  },
  {
    firstname: "liel",
    lastname: "levi",
    email: "lielb07@gmail",
    homeaddress: "hduchifat 15 tszeelim",
    phonenum: "050-6449512"
  },
  {
      firstname: "max",
      lastname: "cohen",
      email: "maxc23@gnail.com",
      homeaddress: "narkisio 8",
      phonenum: "052-4630548"
  },
  {
    firstname: "ben",
    lastname: "shaikin",
    email: "bens@gmail.com",
    homeaddress: "carmel",
    phonenum: "053-5533553"
}
  ]
  const liText=`<li id="categories">
  <span class="pic"></span>
  <span class="fname">First name</span>
  <span class="lname">Last name</span>
  <span class="mail">Email address</span>
  <span class="home">Home address</span>
  <span class="phonenum">Phone number</span>
  <span class="btnDelet"><button class="btnD" type="button" onclick="deleteAll()">Delete All</button></span>
  <span class="btnEdit"></span>
  </li>`

  let ul=document.querySelector('ul');
  function showusers(){
    
    ul.textContent=" ";
    ul.innerHTML=liText;
    const newList = users.forEach((elem, ind) =>{
        const item = document.createElement('li')
        item.className="item"
        item.innerHTML=
        `<span class="pic"><img src="images/user.png" alt="user" title="user"></span>
          <span class="fname">${elem.firstname}</span>
          <span class="lname">${elem.lastname}</span>
          <span class="mail">${elem.email}</span>
          <span class="home">${elem.homeaddress}</span>
          <span class="phonenum">${elem.phonenum}</span>
          <span class="btnDelet"><button class="btnD" type="button" id="delete" onclick="deleteUser(${ind})">Delete</button></span>
          <span class="btnEdit"><button class="btnE" type="button" id="edit" onclick="editUser(${ind})" >edit</button></span>`
        
        ul.append(item);
    })


  }

  showusers();

   function openForm() {
  
   document.getElementById("wrapper").style.display = "block";
   document.getElementById('change').onclick=function(){
    let person={
      name:document.getElementById('firsName').value,
      lastName:document.getElementById('lastName').value,
      mail:document.getElementById('Email').value,
      homeAddress:document.getElementById('homeAddress').value,
      phoneNum:document.getElementById('phone').value
 
    };

    users.push(person);
    console.log(person);

    let li= document.createElement('li');
    li.onmouseover = function(){
      li.style.backgroundColor='rgba(60, 91, 111,0.8)';
    };
    
    li.onmouseout = function(){
      li.style.backgroundColor='#153448';
    };
    li.onclick=function(event){
      
      if (event.target === document.getElementById('delete')) {
        console.log("adiel");
        this.remove();
      }
      
    }
    
    li.innerHTML=`<span class="pic"><img src="images/user.png" alt="user" title="user"></span>
          <span class="fname">${person.name}</span>
          <span class="lname">${person.lastName}</span>
          <span class="mail">${person.mail}</span>
          <span class="home">${person.homeAddress}</span>
          <span class="phonenum">${person.phoneNum}</span>
          <span class="btnDelet"><button class="btnD" type="button" id="delete" >Delete</button></span>
          <span class="btnEdit"><button class="btnE" type="button" id="edit" >edit</button></span>`

    let cont=document.querySelector('ul')
    
    document.getElementById("wrapper").style.display = "none";
    cont.append(li);
   
    
    
}

     
    
}

  

  function closeForm() {
    document.getElementById("wrapper").style.display = "none";
    
  }
  
  function closeModal(event) {
    if (event.target === document.getElementById('wrapper') || event.target === document.getElementById('closeBtn')) {
        document.getElementById('wrapper').style.display = 'none';
    }
  }

  

  function deleteAll(){
    let ans=confirm("are you sure you want to delet")
    if(ans){
      users.length=0;console.log(users);
    
    ul.innerHTML="<span>no users<span>";
    ul.style.textAlign='center';
    }
    
    
  }

  function hover(event){
    event.style.backgroundColor='rgba(60, 91, 111,0.8)';

  }
  function back(event){
      event.style.backgroundColor='#153448';
  }
    
  function add(){


    let person={
      firstname:document.getElementById('firsName').value,
      lastname:document.getElementById('lastName').value,
      email:document.getElementById('Email').value,
      homeaddress:document.getElementById('homeAddress').value,
      phonenum:document.getElementById('phone').value
 
    };

    users.push(person);
    
    
    ul.innerHTML=liText;
    showusers();

    document.getElementById("wrapper").style.display = "none";
  }


  function deleteUser(ind){
    let ans=confirm(`are you sure you want to delet user num ${users[ind].firstname} ?`)
    if(ans){
      console.log(ind);
        users.splice(ind,1);

        
        if(users.length===0){
          ul.innerHTML="<span>no users<span>";
          ul.style.textAlign='center';
        }
        else{
          ul.innerHTML=liText;
        showusers();
        }
      
    }
  }
 
function editUser(ind){

    document.getElementById('firsName').value=users[ind].firstname;
    document.getElementById('lastName').value=users[ind].lastname;
    document.getElementById('Email').value=users[ind].email;
    document.getElementById('homeAddress').value=users[ind].homeaddress;
    document.getElementById('phone').value=users[ind].phonenum;
    document.getElementById("wrapper").style.display = "block";
    
    document.getElementById('change').onclick=function(){
      console.log("adiel");
      users[ind].firstname=document.getElementById('firsName').value;
      users[ind].lastname=document.getElementById('lastName').value;
      users[ind].email=document.getElementById('Email').value;
      users[ind].homeaddress=document.getElementById('homeAddress').value;
      users[ind].phonenum=document.getElementById('phone').value;
      
      
        document.getElementById("wrapper").style.display = "none";
        ul.textContent=" ";
        ul.innerHTML=liText;
        showusers();
      

    }
  }
   


  /*function add(){
    let person={
      name:document.getElementById('firsName').value,
      lastName:document.getElementById('lastName').value,
      mail:document.getElementById('Email').value,
      homeAddress:document.getElementById('homeAddress').value,
      phoneNum:document.getElementById('phone').value
 
    };

    users.push(person);
    console.log(person);

    let li= document.createElement('li');
    li.onmouseover = function(){
      li.style.backgroundColor='rgba(60, 91, 111,0.8)';
    };
    
    li.onmouseout = function(){
      li.style.backgroundColor='#153448';
    };
    li.onclick=function(event){
      
      if (event.target === document.getElementById('delete')) {
        console.log("adiel");
        this.remove();
      }
      
    }
    
    li.innerHTML=`<span class="pic"><img src="images/user.png" alt="user" title="user"></span>
          <span class="fname">${person.name}</span>
          <span class="lname">${person.lastName}</span>
          <span class="mail">${person.mail}</span>
          <span class="home">${person.homeAddress}</span>
          <span class="phonenum">${person.phoneNum}</span>
          <span class="btnDelet"><button class="btnD" type="button" id="delete" >Delete</button></span>
          <span class="btnEdit"><button class="btnE" type="button" id="edit" >edit</button></span>`

    let cont=document.getElementById('contacts');
    
    document.getElementById("wrapper").style.display = "none";
    cont.append(li);
   
    
    }*/


 


  

 

 

  