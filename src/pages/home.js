import React from 'react';
import './home.css';
import Select from 'react-select';
import { useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';



const trans_opt = [
    { label:  'University of California, Berkeley, Computer Science, Lower Division B.A. (Demo)', value: 'University of California, Berkeley, Computer Science, Lower Division B.A. (Demo)' }, 
    { label: 'University of California, Santa Cruz, Computer Science B.A. (Demo)' , value: 'University of California, Santa Cruz, Computer Science B.A. (Demo)' }, 
    { label: 'University of California, Santa Barbara, Computer Science, B.S. (Demo)' , value: 'University of California, Santa Barbara, Computer Science, B.S. (Demo)' }, 
    { label: 'University of California, Berkeley, Computer Science, Lower Division B.A.' , value: 'University of California, Berkeley, Computer Science, Lower Division B.A.' }, 
    { label: 'University of California, Berkeley, Electrical Engineering & Computer Sciences, Lower Division B.S.' , value: 'University of California, Berkeley, Electrical Engineering & Computer Sciences, Lower Division B.S.' } ,
    { label: 'University of California, Davis, Computer Engineering B.S.' , value: 'University of California, Davis, Computer Engineering B.S.' } ,
    { label: 'University of California, Davis, Computer Science & Engineering B.S.' , value: 'University of California, Davis, Computer Science & Engineering B.S.' } ,
    { label: 'University of California, Davis, Computer Science B.S.' , value: 'University of California, Davis, Computer Science B.S.' } ,
    { label: 'University of California, Irvine, Computer Engineering, B.S.' , value: 'University of California, Irvine, Computer Engineering, B.S.' } ,
    { label: 'University of California, Irvine, Computer Science and Engineering, B.S.' , value: 'University of California, Irvine, Computer Science and Engineering, B.S.' } ,
    { label: 'University of California, Irvine, Computer Science, B.S.' , value: 'University of California, Irvine, Computer Science, B.S.' } ,
    { label: 'University of California, Los Angeles, Computer Engineering/B.S.' , value: 'University of California, Los Angeles, Computer Engineering/B.S.' } ,
    { label: 'University of California, Los Angeles, Computer Science and Engineering/B.S.' , value: 'University of California, Los Angeles, Computer Science and Engineering/B.S.' } ,
    { label: 'University of California, Los Angeles, Computer Science/B.S.' , value: 'University of California, Los Angeles, Computer Science/B.S.' } ,
    { label: 'University of California, Los Angeles, Linguistics and Computer Science/B.A.' , value: 'University of California, Los Angeles, Linguistics and Computer Science/B.A.' } ,
    { label: 'University of California, Merced, Applied Mathematical Sciences, Computer Science Emphasis, B.S.' , value: 'University of California, Merced, Applied Mathematical Sciences, Computer Science Emphasis, B.S.' } ,
    { label: 'University of California, Merced, Computer Science and Engineering, B.S.' , value: 'University of California, Merced, Computer Science and Engineering, B.S.' } ,
    { label: 'University of California, Riverside, Computer Engineering, B.S.' , value: 'University of California, Riverside, Computer Engineering, B.S.' } ,
    { label: 'University of California, Riverside, Computer Science with Business Applications B.S.' , value: 'University of California, Riverside, Computer Science with Business Applications B.S.' } ,
    { label: 'University of California, Riverside, Computer Science, B.S.' , value: 'University of California, Riverside, Computer Science, B.S.' } ,
    { label: 'University of California, San Diego, Art: Interdisciplinary Computing in the Arts Major (ICAM) B.A. (Visual Arts)' , value: 'University of California, San Diego, Art: Interdisciplinary Computing in the Arts Major (ICAM) B.A. (Visual Arts)' } ,
    { label: 'University of California, San Diego, CSE: Computer Engineering B.S.' , value: 'University of California, San Diego, CSE: Computer Engineering B.S.' } ,
    { label: 'University of California, San Diego, CSE: Computer Science B.S.' , value: 'University of California, San Diego, CSE: Computer Science B.S.' } ,
    { label: 'University of California, San Diego, CSE: Computer Science with a Specialization in Bioinformatics B.S.' , value: 'University of California, San Diego, CSE: Computer Science with a Specialization in Bioinformatics B.S.' } ,
    { label: 'University of California, San Diego, ECE: Computer Engineering B.S.' , value: 'University of California, San Diego, ECE: Computer Engineering B.S.' } ,
    { label: 'University of California, San Diego, Mathematics/Computer Science B.S.' , value: 'University of California, San Diego, Mathematics/Computer Science B.S.' } ,
    { label: 'University of California, San Diego, Music: Interdisciplinary Computing in the Arts Major (ICAM) B.A.' , value: 'University of California, San Diego, Music: Interdisciplinary Computing in the Arts Major (ICAM) B.A.' } ,
    { label: 'University of California, Santa Barbara, Computer Engineering, B.S.' , value: 'University of California, Santa Barbara, Computer Engineering, B.S.' }, 
    { label: 'University of California, Santa Barbara, Computer Science, B.S.' , value: 'University of California, Santa Barbara, Computer Science, B.S.' } ,
    { label: 'University of California, Santa Barbara, Creative Studies - Computing, B.S.' , value: 'University of California, Santa Barbara, Creative Studies - Computing, B.S.' } ,
    { label: 'University of California, Santa Cruz, Computer Engineering B.S.' , value: 'University of California, Santa Cruz, Computer Engineering B.S.' } ,
    { label: 'University of California, Santa Cruz, Computer Science B.A.' , value: 'University of California, Santa Cruz, Computer Science B.A.' } ,
    { label: 'University of California, Santa Cruz, Computer Science B.S.' , value: 'University of California, Santa Cruz, Computer Science B.S.' } ,
    { label: 'University of California, Santa Cruz, Computer Science B.S.' , value: 'University of California, Santa Cruz, Computer Science B.S.' } ,
    { label: 'University of California, Santa Cruz, Computer Science: Computer Game Design B.S.', value: 'University of California, Santa Cruz, Computer Science: Computer Game Design B.S.' } ,
    ]

    




  const schools_opt = [
      { label: 'Laney College',  value: 'Laney College'}
  ]

  
  const trans_options = (opt) => {
    const selectedValues = opt.map((option) => option.value);
    localStorage.setItem('trans_options', JSON.stringify(selectedValues));
  };

  const school_options = (opt) => {
    const schools = opt.map((option) => option.value);
    localStorage.setItem('school_select', JSON.stringify(schools));
  }


  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#282d30",
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#f58847" : "#f58847",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "white" : "white"
      }
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0
    }),
    menuList: base => ({
      ...base,
      // kill the white space on first and last option
      padding: 0
    })
  };

  
//Task create an array of strings from the first row, I.e: schools

const Home = () => {
  
  const Navigate = useNavigate();

  const Build_direct = () => {
    let input_check1 = JSON.parse(localStorage.getItem('school_select'));
    let input_check2 = JSON.parse(localStorage.getItem('trans_options'));

    if(input_check1 && input_check2){
      Navigate('/build');      
    }
    else{
      alert("Select: Current school and Transfers");
    }
    
  }


  const Buttons = () =>{
    return(
    <div className = "row">   
      <div className='col'>
      <br></br>
      <button type = "button" className = 'btn btn-secondary' onClick={Build_direct}>Build Your Transfer Plan</button>
        <Routes>
          <Route path = '/sort_build'/>
        </Routes>
      </div>
    </div>
    )
  }

    useEffect(() => {
        const text1 = "Choose Your Schools.";
        const text2 = "Build A Plan!";
        const typingSpeed = 50; // in milliseconds per character

        let textElement = document.getElementById("word_animation");
        let currentText = text1;
        let currentIndex = 0;
        let intervalId = null;

        function startTyping() {
          intervalId = setInterval(typeLetter, typingSpeed);
        }

        function typeLetter() {
          textElement.textContent = currentText.slice(0, currentIndex + 1);
          currentIndex++;
          if (currentIndex >= currentText.length) {
            clearInterval(intervalId);
            setTimeout(changeText, 6000);
          }
        }

        function changeText() {
          currentIndex = 0;
          currentText = currentText === text1 ? text2 : text1;
          startTyping();
        }
        


        // Define your functions here
        function get_csv() {

          
          let url = "https://raw.githubusercontent.com/KChun510/Pandas_CSV_School_Data/main/UC%20and%20CSU%20-%20UC-PDF.csv";
          let multi_arr = [];
          fetch(url)
          .then(response => response.text())
          .then(data => { //Http Fetch request for csv data, one long string. object "data"
              let rows = data.split("\n"); //Split string csv, into array
              let cells = rows[0].split(',"');//Split into cells, line by line
              localStorage.setItem('schools_str',cells); //Meant for export python script, for labeleing
              multi_arr.push(cells);
              var len = cells.length;
              for (let i = 1; i < rows.length - 1; i++) {
                  //let cells = rows[i].split("","");//Split into cells, line by line
                  let cells = rows[i].split(",");//Split into cells, line by line
                  for(var x = 0; x < len; x++){
                      if(cells[x] == ','){
                          cells.splice(x, 1);
                      }
                  }
                  multi_arr.push(cells) 
              }
    
              let class_arr = [];
              for(let key = 1; key < multi_arr[0].length; key++){
                  for(let row = 1; row < 71; row++ ){
                      class_arr.push(multi_arr[row][key]); //Adding classes into tmp array
                  }
                  let school = multi_arr[0][key].replace('"', '');
                  localStorage.setItem(school , class_arr); // School name is key and classes array is the value
                  class_arr = [];
              }
          })
          .catch(error => console.log(error));
        }
        get_csv(); 
        startTyping();
      }, []);
	return (
		<div className="App">
            <div className='container' id = "search_container">
                <div className = 'row'>
                      <div className='col'></div>
                      <div className='col-6' id = "ani_box">
                        <h1 id = "word_animation" >ED PLAN</h1>
                      </div>
                      <div className='col'></div>
                    </div>
                <div className='row'>
                    <div className='col'>
                        <h5 id = "Search_txt">Current School: </h5>
                    </div>
                    <div className = "col-6" id = "search_box"> 
                    <Select id = "search_color"
                        options={schools_opt}
                        isMulti
                        onChange={school_options}
                        styles = {customStyles}
                        placeholder = ""
                        
                    />
                    </div>
                    <div className='col'></div>
                </div>
                <div className='row'>
                    <div className = 'col'>
                        <h5 id = "Search_txt">Transfer schools: </h5>
                    </div>
                    <div className='col-6' id = "search_box">
                        <Select id = "search_color"
                            options={trans_opt}
                            isMulti
                            onChange={trans_options}
                            styles = {customStyles}
                            placeholder = ""
                        />
                    </div>
                    <div className = "col"></div>
                </div>
                <Buttons />
            </div>
            <script src ='words.js' ></script>
        </div>
	);
};

export default Home;