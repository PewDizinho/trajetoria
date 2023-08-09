const carsInfo = [
    {
        nome: "",
        ano: "",
        kmporlitro: ""
    },
    {
        nome: "Audi A3",
        ano: 2022,
        kmporlitro: 13.4
    },
    {
        nome: "Audi Q3",
        ano: 2022,
        kmporlitro: 11.2
    },
    {
        nome: "BMW 3 Series",
        ano: 2021,
        kmporlitro: 12.9
    },
    {
        nome: "BMW X1",
        ano: 2021,
        kmporlitro: 12.0
    },
    {
        nome: "BMW X3",
        ano: 2020,
        kmporlitro: 12.1
    },
    {
        nome: "Chevrolet Camaro",
        ano: 2021,
        kmporlitro: 8.1
    },
    {
        nome: "Chevrolet Colorado",
        ano: 2022,
        kmporlitro: 8.2
    },
    {
        nome: "Chevrolet Equinox",
        ano: 2021,
        kmporlitro: 10.9
    },
    {
        nome: "Chevrolet Onix",
        ano: 2020,
        kmporlitro: 14.5
    },
    {
        nome: "Chevrolet Silverado",
        ano: 2021,
        kmporlitro: 7.1
    },
    {
        nome: "Chevrolet Tahoe",
        ano: 2020,
        kmporlitro: 6.6
    },
    {
        nome: "Chevrolet Traverse",
        ano: 2022,
        kmporlitro: 9.5
    },
    {
        nome: "Dodge Challenger",
        ano: 2020,
        kmporlitro: 6.9
    },
    {
        nome: "Ford Escape",
        ano: 2022,
        kmporlitro: 11.4
    },
    {
        nome: "Ford F-150",
        ano: 2022,
        kmporlitro: 6.4
    },
    {
        nome: "Ford Mustang",
        ano: 2022,
        kmporlitro: 7.5
    },
    {
        nome: "Ford Ranger",
        ano: 2021,
        kmporlitro: 9.0
    },
    {
        nome: "Ford Transit",
        ano: 2020,
        kmporlitro: 5.8
    },
    {
        nome: "GMC Sierra",
        ano: 2020,
        kmporlitro: 7.4
    },
    {
        nome: "Honda Accord",
        ano: 2022,
        kmporlitro: 12.8
    },
    {
        nome: "Honda Civic",
        ano: 2020,
        kmporlitro: 13.8
    },
    {
        nome: "Honda CR-V",
        ano: 2022,
        kmporlitro: 13.1
    },
    {
        nome: "Hyundai Palisade",
        ano: 2020,
        kmporlitro: 11.1
    },
    {
        nome: "Hyundai Santa Fe",
        ano: 2021,
        kmporlitro: 10.3
    },
    {
        nome: "Hyundai Sonata",
        ano: 2022,
        kmporlitro: 11.6
    },
    {
        nome: "Hyundai Tucson",
        ano: 2021,
        kmporlitro: 11.9
    },
    {
        nome: "Kia Seltos",
        ano: 2020,
        kmporlitro: 10.8
    },
    {
        nome: "Kia Sportage",
        ano: 2020,
        kmporlitro: 10.6
    },
    {
        nome: "Kia Telluride",
        ano: 2021,
        kmporlitro: 10.7
    },
    {
        nome: "Land Rover Defender",
        ano: 2020,
        kmporlitro: 7.9
    },
    {
        nome: "Land Rover Discovery",
        ano: 2021,
        kmporlitro: 9.2
    },
    {
        nome: "Land Rover Range Rover",
        ano: 2020,
        kmporlitro: 9.7
    },
    {
        nome: "Lexus ES",
        ano: 2022,
        kmporlitro: 11.3
    },
    {
        nome: "Lexus RX",
        ano: 2021,
        kmporlitro: 10.5
    },
    {
        nome: "Mazda CX-30",
        ano: 2022,
        kmporlitro: 10.4
    },
    {
        nome: "Mazda CX-5",
        ano: 2022,
        kmporlitro: 10.3
    },
    {
        nome: "Mazda CX-9",
        ano: 2021,
        kmporlitro: 9.4
    },
    {
        nome: "Mercedes-Benz C-Class",
        ano: 2020,
        kmporlitro: 11.9
    },
    {
        nome: "Mercedes-Benz GLA",
        ano: 2020,
        kmporlitro: 11.5
    },
    {
        nome: "Mercedes-Benz GLC",
        ano: 2022,
        kmporlitro: 11.6
    },
    {
        nome: "Mitsubishi Outlander",
        ano: 2018,
        kmporlitro: 9.6
    },
    {
        nome: "Nissan Frontier",
        ano: 2021,
        kmporlitro: 8.8
    },
    {
        nome: "Nissan Murano",
        ano: 2022,
        kmporlitro: 11.2
    },
    {
        nome: "Nissan Rogue",
        ano: 2021,
        kmporlitro: 11.7
    },
    {
        nome: "Ram 1500",
        ano: 2020,
        kmporlitro: 6.9
    },
    {
        nome: "Subaru Crosstrek",
        ano: 2021,
        kmporlitro: 9.9
    },
    {
        nome: "Subaru Forester",
        ano: 2020,
        kmporlitro: 10.2
    },
    {
        nome: "Subaru Impreza",
        ano: 2020,
        kmporlitro: 9.8
    },
    {
        nome: "Toyota 4Runner",
        ano: 2022,
        kmporlitro: 8.5
    },
    {
        nome: "Toyota Camry",
        ano: 2021,
        kmporlitro: 12.3
    },
    {
        nome: "Toyota Corolla",
        ano: 2022,
        kmporlitro: 15.2
    },
    {
        nome: "Toyota Highlander",
        ano: 2020,
        kmporlitro: 12.6
    },
    {
        nome: "Toyota RAV4",
        ano: 2022,
        kmporlitro: 12.2
    },
    {
        nome: "Toyota Tacoma",
        ano: 2022,
        kmporlitro: 9.3
    },
    {
        nome: "Volkswagen Atlas",
        ano: 2021,
        kmporlitro: 9.8
    },
    {
        nome: "Volkswagen Golf",
        ano: 2022,
        kmporlitro: 10.9
    },
    {
        nome: "Volkswagen Jetta",
        ano: 2021,
        kmporlitro: 11.7
    },
    {
        nome: "Volkswagen Passat",
        ano: 2020,
        kmporlitro: 10.5
    },
    {
        nome: "Volkswagen Tiguan",
        ano: 2022,
        kmporlitro: 11.3
    }
];


const carForm = document.getElementById("carForm");

for (var i = 1; i < carsInfo.length; i++) {
    var newOption = document.createElement("option");
    newOption.value = i;
    newOption.textContent = carsInfo[i].nome + " - " + carsInfo[i].ano

    carForm.add(newOption);
}

carForm.addEventListener("change", (event) => {


    let selectedCar = carsInfo[event.target.value];

    document.getElementById("carName").innerText = "Nome: " + selectedCar.nome;
    document.getElementById("carYear").innerText = "Ano: " + selectedCar.ano;
    document.getElementById("carKml").innerText = "Km/L: " + selectedCar.kmporlitro;
});