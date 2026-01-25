function submitData () {
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked');
    let interstDOMs = document.querySelector('input[name=interest]:checked');
    let descriptionDOM = document.querySelector('textarea[name=description]');
    let interest = ''

    for (let i = 0; i < interstDOMs.length; i++) {
        interest += interstDOMs[i].value
        if (i != interstDOMs.length - 1) {
            interest += ','
        }
    }

    let userData ={
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        description: descriptionDOM.value,
        interst: interest
    }
    console.log('submitData', userData);
}