async function loadCompanyData() {

const response = await fetch('assets/data/company.json');
const data = await response.json();

document.getElementById('companyName').textContent =
data.company;

document.getElementById('tagline').textContent =
data.tagline;

document.getElementById('aboutText').textContent =
data.about;

document.getElementById('vision').textContent =
data.vision;

document.getElementById('email').textContent =
data.contact.email;

document.getElementById('phone').textContent =
data.contact.phone;

document.getElementById('address').textContent =
data.contact.address;

document.getElementById('year').textContent =
new Date().getFullYear();

document.getElementById('waButton').href =
`https://wa.me/${data.contact.whatsapp}`;

const missionList =
document.getElementById('mission');

data.mission.forEach(item=>{
const li = document.createElement('li');
li.textContent = item;
missionList.appendChild(li);
});

const serviceContainer =
document.getElementById('servicesContainer');

data.services.forEach(service=>{

serviceContainer.innerHTML += `
<div class="col-lg-4 mb-4">
<div class="card border-0 shadow service-card h-100">
<div class="card-body">
<h4>${service.title}</h4>
<p>${service.description}</p>
</div>
</div>
</div>
`;

});

const portfolioContainer =
document.getElementById('portfolioContainer');

data.portfolio.forEach(project=>{

portfolioContainer.innerHTML += `
<div class="col-md-3 mb-4">
<div class="portfolio-card">
${project}
</div>
</div>
`;

});

}

loadCompanyData();