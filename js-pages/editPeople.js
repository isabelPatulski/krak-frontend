import { SERVER_URL } from "../settings";

this.Edit = function (item) {
    const editPerson = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.countries[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;

    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var country = el.value;

      if (country) {
        // Edit value
        self.countries.splice(item, 1, country.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };

  this.Delete = function (item) {
    // Delete the current row
    this.countries.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };