/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://material-ui.com/store/items/soft-ui-pro-dashboard/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// sweetalert2 components
import Swal from "sweetalert2";

// Sweet Alerts page components
import Template from "layouts/pages/sweet-alerts/components/Template";

function WithAttachedFunction() {
  const showAlert = () => {
    const newSwal = Swal.mixin({
      customClass: {
        confirmButton: "button button-success",
        cancelButton: "button button-error",
      },
      buttonsStyling: false,
    });

    newSwal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.value) {
          newSwal.fire("Deleted!", "Your file has been deleted.", "success");
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          newSwal.fire("Cancelled", "Your imaginary file is safe :)", "error");
        }
<<<<<<< HEAD
=======
      })
      .catch((err) => {
        console.log("err..",err);
>>>>>>> 35ae532edee942478cf694e54d3a0bcccbb1cd28
      });
  };

  return (
    <Template
      title='A warning message, with a function attached to the "Confirm" Button...'
      action={showAlert}
    />
  );
}

export default WithAttachedFunction;
