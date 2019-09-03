document.querySelector(".menu-btn").addEventListener("click", function () {             //eventListener added for clicking the menu button
    
    document
        .querySelectorAll('*[class^="menu"]')                                  //select all classes that start with menu
        .forEach(item => item.classList.toggle("show"));                      //for each menu item, toggle it to show
        
        let divBranding = document.querySelector(".portrait");               //find the branding div class portrait 
        divBranding.innerHTML = "";                                         //clear whatever was in the branding div
})

document.addEventListener("DOMContentLoaded", function () {                 //listener for making the contact info populate in the branding div
    let divBranding = document.querySelector(".subMenu");                  //select the portrait class and sets it to the div variable

    document.querySelector(".contact").addEventListener("click", function () {      //listen for when the .contact class is clicked
        divBranding.innerHTML = "";                                                 //clear what was previously in the branding div               
        let divContact = document.createElement('div');                             //create a new div
        divContact.id = "divContact";                                               //assign ID for new div 
        divContact.innerHTML = "<div>Email: <a href=\"mailto: harmonryan92@gmail.com\">Harmonryan92@gmail.com</a></div> <div>Phone: (682) 583-6362</div>" //sets innerHTML to divs for phone and email. email has embedded link for sending email
        divBranding.appendChild(divContact);        //add our divContact values to the divBranding variable, which makes the text appear
    })
})

document.addEventListener("DOMContentLoaded", function () {             //function for making the resume populate when clicked                
    let divBranding = document.querySelector(".subMenu");              //finds the branding div by its class (portrait)             

    document.querySelector(".resume").addEventListener("click", function () {   //eventListener for clicking on the resume link
        divBranding.innerHTML = "";                                             //clear whatever was previously in the branding div
        let divResume = document.createElement('div');                          //creates a new div for the resume                            
        divResume.id = "divResume";                                             //assigns id to div                   
        divResume.innerHTML = "<iframe src=\"files/resume.pdf\" width=\"825px\" height=\"900px\"></iframe>" //innerHTML of new div sit to an Iframe containing the resume PDF, located in the dist/files folder
        divBranding.appendChild(divResume);                             //add new div to branding div      
    })
})
