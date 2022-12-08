const incomeSubmitHandler = async (event) => {
    event.preventDefault();
    const amount = parseInt(document.querySelector('#incomeInput').value.trim());
console.log(amount);
    if (amount) {
        const response = await fetch('/api/income/', {
            method: 'POST',
            body: JSON.stringify({ amount }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.replace('/income');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.income-form')
    .addEventListener('submit', incomeSubmitHandler);



