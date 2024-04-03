

// import "./profile.css";
// import { useState } from "react";

// function Profile() {
//   let[theme,setTheme] = useState({
//     bgColor: "White",
//     textColor:"black",
//     title:"Change into DarkMode",
//   });
//   let[user,setUser] = useState({

// image:"https://cdn9.dissolve.com/p/D430_49_193/D430_49_193_1200.jpg",
// name:"Raj Verma",
// email:"raj@gmail.com",
// city:"Pune",


//   })
//   // let [image, setImage] = useState(
//   //   "https://cdn9.dissolve.com/p/D430_49_193/D430_49_193_1200.jpg"
//   // );
//   // let [name, setName] = useState("Raj Verma");
//   // let [email, setEmail] = useState("raj@gmail.com");
//   // let [city, setCity] = useState("Pune");

//   function changeDataToSonal() 
//   {
//     // setImage(
//     //   "https://i.pinimg.com/originals/e6/78/4b/e6784b9cd722d02e014d7e60ebe25e39.jpg"
//     // );
//     // setName("Sonal Patel");
//     // setCity("Surat");
//     // setEmail("sonal@gmail.com");
//     setUser({
//       image:"https://i.pinimg.com/originals/e6/78/4b/e6784b9cd722d02e014d7e60ebe25e39.jpg",
//       name:"Sonal Patel",
//       email:"sonal@gmail.com",
//       city:"Surat",

//   })
//  }

//   function changeDataToRaj() {
//     // setImage("https://cdn9.dissolve.com/p/D430_49_193/D430_49_193_1200.jpg");
//     // setName("Raj Verma");
//     // setCity("Pune");
//     // setEmail("raj@gmail.com");

//     setUser({
//       image:"https://cdn9.dissolve.com/p/D430_49_193/D430_49_193_1200.jpg",
//       name:"Raj Verma",
//       email:"raj@gmail.com",
//       city:"Pune",

//     });
//   }
//     function changeTheme(event){
//       if(event.target.cheked) {  
//           setTheme({
//           bgColor: "black",
//            textColor:"white",
//            title: "Uncheck to switch Light Theme",
//            });
//           }
//            else{
//             setTheme
//             ({
//             bgColor: "white",
//              textColor:"black",
//              title: "Check to switch Dark Theme",
//              });

//            }
    
//     }
//       return (
//     <div id="flexContainer">
//       <div className="left">
//         <img src={user.image} width="100%" height="100%" alt="user image" />
//       </div>

//       <div className="right" style={{backgroundColor:theme.bgColor,color:theme.textColor}}>
//         <dl>
//           <dt>
//             <b>User Name</b>
//           </dt>
//           <dd>{user.name}</dd>
//           <dt>
//             <b>User City</b>
//           </dt>
//           <dd>{user.city}</dd>
//           <dt>
//             <b>Email Id</b>
//           </dt>
//           <dd>{user.email}</dd>
//           <dt>
//             <b>Description</b>
//           </dt>
//           <dd>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
//             nobis perspiciatis veniam accusantium? Harum, adipisci explicabo.
//             Voluptate atque, consequatur a officia hic nisi iusto, explicabo
//             delectus ad laborum, magni impedit?
//           </dd>
//         </dl>
//         {/* <button onClick={changeDataToRaj} >Raj Verma</button>&nbsp;&nbsp;
//         <button onClick={changeDataToSonal}>Sonal Patel</button> */}

//         <input type="radio" name="user"     defaultChecked onClick={changeDataToRaj}/>
//         Raj Verma
//         <input type="radio" name="user" onClick={changeDataToSonal}/>
//         Sonal Patel
//         <br/>
//         <br/>
//         <div>
//           <input type="checkbox" onChange={changeTheme}/>
//           <label>{theme.title}</label>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default Profile;
import "./profile.css";
import { useState } from "react";

function Profile() {
  let [theme, setTheme] = useState({
    bgColor: "white",
    textColor: "black",
    title: "Check to switch Dark Theme",
  });
  let [user, setUser] = useState({
    image: "https://cdn9.dissolve.com/p/D430_49_193/D430_49_193_1200.jpg",
    name: "Raj Verma",
    email: "rajverma@gmail.com",
    city: "Banglore",
  });

  function changeDataToSonal() {
    setUser({
      image:
        "https://th.bing.com/th/id/OIP.1B8x7MHo9IB90YNCkKRXDgHaJQ?rs=1&pid=ImgDetMain",
      name: "Sonal Patel",
      email: "sonalpatel@gmail.com",
      city: "Mumbai",
    });
  }

  function changeDataToRaj() {
    setUser({
      image: "https://cdn9.dissolve.com/p/D430_49_193/D430_49_193_1200.jpg",
      name: "Raj Verma",
      email: "rajverma@gmail.com",
      city: "Banglore",
    });
  }

  function changeTheme(event) {
    if (event.target.checked) {
      setTheme({
        bgColor: "black",
        textColor: "white",
        title: "Uncheck to switch Light Theme",
      });
    } else {
      setTheme({
        bgColor: "white",
        textColor: "black",
        title: "Check to switch Dark Theme",
      });
    }
  }
  return (
    <div id="flexContainer">
      <div className="left">
        <img src={user.image} width="100%" height="100%" alt="user image" />
      </div>

      <div
        className="right"
        style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
      >
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd>{user.name}</dd>
          <dt>
            <b>User City</b>
          </dt>
          <dd>{user.city}</dd>
          <dt>
            <b>Email Id</b>
          </dt>
          <dd>{user.email}</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nobis perspiciatis veniam accusantium? Harum, adipisci explicabo.
            Voluptate atque, consequatur a officia hic nisi iusto, explicabo
            delectus ad laborum, magni impedit?
          </dd>
        </dl>
        <input
          type="radio"
          name="user"
          defaultChecked
          onClick={changeDataToRaj}
        />
        Raj Verma
        <input type="radio" name="user" onClick={changeDataToSonal} />
        Sonal Patel
        <br />
        <br />
        <div>
          <input type="checkbox" onChange={changeTheme} />
          <label>{theme.title}</label>
        </div>
      </div>
    </div>
  );
}

export default Profile;