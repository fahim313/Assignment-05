//   Donation and History Button functionalitiy

  document.getElementById('history-button').addEventListener('click', function() {
    // Change History button to look like Donation button
    document.getElementById('history-button').className = 'inline-block w-full sm:w-auto rounded border border-lime-400 bg-lime-400 px-6 py-3 text-sm sm:text-base font-medium text-black hover:bg-lime-500 hover:border-lime-500 focus:outline-none active:bg-lime-600 text-center';
    
    // Change Donation button to gray
    document.getElementById('donation-button').className = 'inline-block w-full sm:w-auto rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm sm:text-base font-medium text-gray-500 hover:bg-gray-200 hover:border-gray-400 focus:outline-none active:bg-gray-300 text-center';
  });

  document.getElementById('donation-button').addEventListener('click', function() {
    // Change Donation button to original green style
    document.getElementById('donation-button').className = 'inline-block w-full sm:w-auto rounded border border-lime-400 bg-lime-400 px-6 py-3 text-sm sm:text-base font-medium text-black hover:bg-lime-500 hover:border-lime-500 focus:outline-none active:bg-lime-600 text-center';
    
    // Change History button back to gray
    document.getElementById('history-button').className = 'inline-block w-full sm:w-auto rounded border border-gray-300 bg-white px-6 py-3 text-sm sm:text-base font-medium text-gray-500 hover:bg-gray-100 hover:border-gray-400 focus:outline-none active:bg-gray-200 text-center';
  });

