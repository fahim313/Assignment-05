//   Donation and History Button functionalitiy

  document.getElementById('history-button').addEventListener('click', function() {
     showSectionById('history-data-section');
    // Change History button to look like Donation button
    document.getElementById('history-button').className = 'inline-block w-full sm:w-auto rounded border border-lime-400 bg-lime-400 px-6 py-3 text-sm sm:text-base font-medium text-black hover:bg-lime-500 hover:border-lime-500 focus:outline-none active:bg-lime-600 text-center';
    
    // Change Donation button to gray
    document.getElementById('donation-button').className = 'inline-block w-full sm:w-auto rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm sm:text-base font-medium text-gray-500 hover:bg-gray-200 hover:border-gray-400 focus:outline-none active:bg-gray-300 text-center';
  });

  document.getElementById('donation-button').addEventListener('click', function() {
      showSectionById('card-Conteinar-section');
    // Change Donation button to original green style
    document.getElementById('donation-button').className = 'inline-block w-full sm:w-auto rounded border border-lime-400 bg-lime-400 px-6 py-3 text-sm sm:text-base font-medium text-black hover:bg-lime-500 hover:border-lime-500 focus:outline-none active:bg-lime-600 text-center';
    
    // Change History button back to gray
    document.getElementById('history-button').className = 'inline-block w-full sm:w-auto rounded border border-gray-300 bg-white px-6 py-3 text-sm sm:text-base font-medium text-gray-500 hover:bg-gray-100 hover:border-gray-400 focus:outline-none active:bg-gray-200 text-center';
  });


    //  Donation For NOakhali

    document.getElementById('add-money-btn')
    .addEventListener('click', function(event) {
        event.preventDefault();
     const donationAmount = parseFloat(document.getElementById('input-amount').value);
    const currentAmountElement = document.getElementById('current-amount');
    const currentAmount = parseFloat(currentAmountElement.innerText);
    
        if (!isNaN(donationAmount) && donationAmount > 0) {
          const newAmount = currentAmount - donationAmount;

          // Update the displayed current amount
          currentAmountElement.innerText = newAmount;

            // Update the donation display button with the new donation amount
            document.getElementById('donated-amount').innerText = donationAmount;

            // Show the modal
            document.getElementById('donationModal').classList.remove('hidden');
        } else {
            alert('Please enter a valid donation amount.');
        }
    });

    // Function to close the modal
    document.getElementById('closeBtn').addEventListener('click', function() {
        // Hide the modal
        document.getElementById('donationModal').classList.add('hidden');
    });




 
    //  donation-Feni 
    document.getElementById('feni-donate-button').addEventListener('click', function (event) {
        event.preventDefault();
        
        const donationAmount = parseFloat(document.getElementById('donate-feni').value);
        const currentAmountElement = document.getElementById('current-amount');
        const currentAmount = parseFloat(currentAmountElement.innerText);

        if (!isNaN(donationAmount) && donationAmount > 0) {
            const newCurrentAmount = currentAmount - donationAmount; 
            const currentDonatedAmountElement = document.getElementById('donated-amount-feni');
            const currentDonatedAmount = parseFloat(currentDonatedAmountElement.innerText);
            const newDonatedAmount = currentDonatedAmount + donationAmount; 

            currentAmountElement.innerText = newCurrentAmount; // Update current amount
            currentDonatedAmountElement.innerText = newDonatedAmount; // Update donated amount

            // Show the modal
            document.getElementById('donationModal').classList.remove('hidden');
        } else {
            alert('Please enter a valid donation amount.');
        }
    });

    // Function to close the modal
    document.getElementById('closeBtn').addEventListener('click', function () {
        // Hide the modal
        document.getElementById('donationModal').classList.add('hidden');
    });


        // donation For Injured people 
        
    document.getElementById('injured-donatin-btn').addEventListener('click', function (event) {
      event.preventDefault();
      

      const donationAmount = parseFloat(document.getElementById('injured-pepole-donatin').value);
      
      const currentAmountElement = document.getElementById('current-amount');
      const currentAmount = parseFloat(currentAmountElement.innerText);

      if (!isNaN(donationAmount) && donationAmount > 0) {
          const newCurrentAmount = currentAmount - donationAmount;
          const currentDonatedAmountElement = document.getElementById('donated-amount-injured');
          const currentDonatedAmount = parseFloat(currentDonatedAmountElement.innerText);
          const newDonatedAmount = currentDonatedAmount + donationAmount; 
          currentAmountElement.innerText = newCurrentAmount; // Update current amount
          currentDonatedAmountElement.innerText = newDonatedAmount; // Update donated amount

          // Show the modal
          document.getElementById('donationModal').classList.remove('hidden');
      } else {
          alert('Please enter a valid donation amount.');
      }
  });

  // Function to close the modal
  document.getElementById('closeBtn').addEventListener('click', function () {
      // Hide the modal
      document.getElementById('donationModal').classList.add('hidden');
  });
