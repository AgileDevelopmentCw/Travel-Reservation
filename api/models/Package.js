// Define a function to cancel a package
function cancelPackage(package) {
  // Check if the package is already cancelled
  if (package.status === 'cancelled') {
    return "Package is already cancelled.";
  }

  // Cancel the package
  package.status = 'cancelled';
  package.cancelDate = new Date();

  return "Package cancelled successfully.";
}

// Example package object
const packageToCancel = {
  id: 123,
  status: 'pending', 
  
};

// Cancel the package
const result = cancelPackage(packageToCancel);

// Output the result
console.log(result);
console.log(packageToCancel); // Check the updated package details
