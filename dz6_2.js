const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function SubCompanies(companyName, company) {
    
    if (company.name === companyName) {
        return company;
    }

    
    if (company.clients) {
        for (let client of company.clients) {
            
            const foundCompany = SubCompanies(companyName, client);
            
            if (foundCompany) {
                return foundCompany;
            }
        }
    }

    if (company.partners) {
        for (let partner of company.partners) {
            const foundCompany = SubCompanies(companyName, partner);
            if (foundCompany) {
                return foundCompany;
            }
        }
    }

    return null;
}

const foundCompany = SubCompanies('Клієнт 1.2.3', company);
if (foundCompany) {
    console.log(foundCompany);
} else {
    console.log('Компанію не знайдено');
}


