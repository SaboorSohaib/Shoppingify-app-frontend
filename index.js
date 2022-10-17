const servicesSection = document.querySelector('.services');

const ourServices = [
    {
        Image: './images/web.png',
        Service: 'Web Application',
        Description: 'We have experienced developer they can work remotely',
    },
    {
        Image: './images/desktop.png',
        Service: 'Desktop Application',
        Description: 'We have experienced developer they can work remotely',
    },
    {
        Image: './images/mobile.png',
        Service: 'Mobile Application',
        Description: 'We have experienced developer they can work remotely',
    }
]
function serviceDetalis(ourServices){
    let services = '';
    ourServices.forEach((task) => {
        services += `
        <div class="cards">
          <div class="mycards">
          <img src="${task.Image}">
          <h2>${task.Service}</h2>
          <p>${task.Description}</p>
          </div>
        </div>
        `
    }); 
    servicesSection.innerHTML = services;
}
serviceDetalis(ourServices);