const servicesSection = document.querySelector('.services');

const ourServices = [
    {
        Image: './images/web.png',
        Service: 'Web Application',
        Description: 'We have experienced developer they can work remotely',
        button: 'Learn More!',
    },
    {
        Image: './images/desktop.png',
        Service: 'Desktop Application',
        Description: 'We have experienced developer they can work remotely',
        button: 'Learn More!',
    },
    {
        Image: './images/mobile.png',
        Service: 'Mobile Application',
        Description: 'We have experienced developer they can work remotely',
        button: 'Learn More!',
    }
]
function serviceDetalis(ourServices){
    // const serviceTitle = document.createElement('h2');
    // serviceTitle.innerText('Our Services');
    // services.appendchild(serviceTitle);
    let services = '';
    ourServices.forEach((task) => {
        services += `
          <div class="mycards">
          <img src="${task.Image}">
          <h2 class="card-title">${task.Service}</h2>
          <p class="card-description">${task.Description}</p>
          <button class="card-btn">${task.button}</button>
          </div>
        `
    }); 
    servicesSection.innerHTML = services;
}
serviceDetalis(ourServices);