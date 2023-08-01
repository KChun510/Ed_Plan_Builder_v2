import './build.css';
import React from "react";
import { useEffect } from 'react';



const Build  = () => {
	function sort() {
		let user_int = JSON.parse(localStorage.getItem('trans_options'));
		let all_class_dic = {};
		let unique_class = {};
		let non_artic = {};
		let overlap = {"MATH" : [] , "CIS" : [], "PHYS" : [], "ENGL" : [], "ART" : []}
		if(user_int){
			//Figure out getting desired output, theres somehting wrong with the sort...
			console.log(user_int);
			for(let i = 0; i < user_int.length; i++){
				non_artic[user_int[i]] = [];
				all_class_dic[user_int[i]] = localStorage.getItem(user_int[i]).split(","); 
				unique_class[user_int[i]] = [];
				
			}
	
			const len = all_class_dic[user_int[0]].length - 1
			for(let index = 0; index < user_int.length; index++){
				for(const classes in all_class_dic[user_int[index]].slice(0,len)){ //classes is just a index number
					let check = index + 1;
					
					while(check < user_int.length){
						if(all_class_dic[user_int[check]].includes(all_class_dic[user_int[index]][classes]) === true && all_class_dic[user_int[index]][classes] != "None"){
							check = user_int.length;
							for(let key in overlap){
								if (key[0] == all_class_dic[user_int[index]][classes][0] && overlap[key].includes(all_class_dic[user_int[index]][classes]) === false){
									overlap[key].push(all_class_dic[user_int[index]][classes]);
								}
							check++;
							}
						}
						else if (all_class_dic[user_int[index]][classes] != "None"){
							if(unique_class[user_int[index]].includes(all_class_dic[user_int[index]][classes]) === false){
								unique_class[user_int[index]].push(all_class_dic[user_int[index]][classes]);
							}
							check++;
						}
						else{
							check++;
						}
					}
				}
			}
	
			for(let index = user_int.length -1; index >= 0; index--){
				for(const classes in all_class_dic[user_int[index]].slice(0,len)){ //classes is just a index number
					let check = index - 1;
					
					while(check >= 0){
						if(all_class_dic[user_int[check]].includes(all_class_dic[user_int[index]][classes]) === true && all_class_dic[user_int[index]][classes] != "None"){
							check = user_int.length;
							for(let key in overlap){
								if (key[0] == all_class_dic[user_int[index]][classes][0] && overlap[key].includes(all_class_dic[user_int[index]][classes]) === false){
									overlap[key].push(all_class_dic[user_int[index]][classes]);
								}
							check--;
							}
						}
						else if (all_class_dic[user_int[index]][classes] != "None"){
							if(unique_class[user_int[index]].includes(all_class_dic[user_int[index]][classes]) === false){
								unique_class[user_int[index]].push(all_class_dic[user_int[index]][classes]);
							}
							check--;
						}
						else{
							check--;
						}
					}
				}
			}


			for(let key in all_class_dic){
				if(all_class_dic[key][60] == "None"){
					continue
				}
				else{
					for(let i = 60; i < all_class_dic[key].length - 1; i++){ //Need to loop starting at 60
						if(all_class_dic[key][i] != "None"){
							non_artic[key].push(all_class_dic[key][i]);
							
						}
					}
				}
			}


			localStorage.setItem("Non_artic", JSON.stringify(non_artic));
			localStorage.setItem("Unique Classes",JSON.stringify(unique_class));
			localStorage.setItem("Overlap",JSON.stringify(overlap) );
			localStorage.setItem("all class dic",JSON.stringify(all_class_dic));
			
			console.log(non_artic);
			console.log("Unique Classes");
			console.log(unique_class);
			console.log("Overlap");
			console.log(overlap);
			console.log("all class dic");
			console.log(all_class_dic);
		}
		else{
			console.log('No school selection made.')
		}
					

	}
	sort();


	const user_selections = () => {
		let elem = document.getElementById('class_selections');
		let user_choice = JSON.parse(localStorage.getItem('trans_options'));
		for(let i = 0; i < user_choice.length; i++ ){
			elem.innerHTML += '- ' + user_choice[i] + '<br />';
		}
	};
	const overlap_write = () =>{
		let elem = document.getElementById('overlapping');
		let overlap_classes = JSON.parse(localStorage.getItem('Overlap'));

		for(let key in overlap_classes){
			if(overlap_classes[key].length >= 1){
				elem.innerHTML += "<b>"+ key +"<b/> :" ;
				for(let i = 0; i < overlap_classes[key].length; i++){
					elem.innerHTML += " " +overlap_classes[key][i] + ',';
				}
				elem.innerHTML += '<br/>'
			}
		}
	};

	const Unique_write = () => {
		let elem = document.getElementById("Unique-Classes"); 
		let unique_class = JSON.parse(localStorage.getItem('Unique Classes'))
		for(let key in unique_class){
			if(unique_class[key].length > 0){
				elem.innerHTML += "<u>" + key + "</u>"+ '</br>' ;
				for (let i = 0; i < unique_class[key].length; i++){
					elem.innerHTML += "- " + unique_class[key][i] + '</br>';
				}
			}
		}
	}

	const non_artic_class = () => {
		let elem = document.getElementById("non-artic");
		let non_artic = JSON.parse(localStorage.getItem("Non_artic"));
		for(let key in non_artic){
			if(non_artic[key].length > 0){
				elem.innerHTML += "<u>" + key + ": " + "</u>" + "</br>";
				for(let classes in non_artic[key]){
					elem.innerHTML += "- " + non_artic[key][classes] + "<br/>";
				}
			}
		}
	}


	const transcipts = () => {
		let elem = document.getElementById("transcipts");
		let trans = JSON.parse(localStorage.getItem("all class dic"));
		for(let key in trans){
			elem.innerHTML += "<b>To: </b>" + key + " ";
			let trans_link = trans[key][69].split('//');
			console.log(trans_link[1]);
			console.log('https://'+ trans_link[1]);
			elem.innerHTML += "  " + "<b>Link: </b>" + "<a href = https://" + trans_link[1] + " target = '_blank'>" + trans[key][69] + "</a>" + "</br>";
		}
	}

	let school_choice = JSON.parse(localStorage.getItem('school_select')); //This var is going to be updated from the home page selection


	useEffect(() => { //Function call after sort and page rendered, needed for writing to the page
		user_selections();
		overlap_write();
		Unique_write();
		non_artic_class();
		transcipts();

		;}, [user_selections, overlap_write, Unique_write, non_artic_class,transcipts]);

	return(
		<div className = "container" id = "Ed_plan_container">
			<div className="d-flex justify-content-center">
				<h1 id = "build_header"> Ed - Plan </h1>
			</div>
			<h5 id = "build_header"><b>From {school_choice} To: </b></h5>
			<div className="row" id = "build_screen">
				<div id = "class_selections" ></div>
			</div>
			<br></br>
			<h5 id = "build_header"><b>Overlapping Classes by Subjet (Found in multiple selections): </b></h5> 
			<div className="row" id = "build_screen">
				<div id = "overlapping"></div>
				<br></br>
				<br></br>
				<small className='d-flex justify-content-center'> Your must takes, class credits applied to all selections</small>
			</div>
			<br></br>
			<h5 id = "build_header"><b>Non-Overlapping by school (Unique classes): </b></h5>
			<div className = "row" id = "build_screen">
				<div id = "Unique-Classes"></div>
				<br></br>
				<br></br>
				<small className='d-flex justify-content-center'> Classes only accepeted by a single school</small>
			</div>
			<br></br>
			<h5 id = "build_header"><b>Non-Articulated Classes: </b></h5>
			<div className = "row" id = "build_screen">
				<div id = "non-artic"></div>
				<br></br>
				<br></br>
				<small className='d-flex justify-content-center'>Classes not offered by {school_choice}</small>
			</div>
			<br></br>
			<h5 id = "build_header"><b> Official Transfer agreements from {school_choice}:  </b></h5>
			<div className = "row" id = "build_screen">
				<div id = "transcipts"></div>
			</div>
		</div>
	);
};

export default Build;
