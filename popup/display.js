console.log(window.location.href);

console.log(browser.storage.local);

var stuff;

if (!browser.storage.local.hasOwnProperty("isEnabled")) {
  stuff = browser.storage.local.set({
    isEnabled: true
  })
  console.log("Set isEnabled to true because it didn't exist");

  console.log(browser.storage.local.get("isEnabled"));
}

console.log(browser.storage.local);

class MasterControls {
  constructor() {
    this.eventListeners();

    // $("#master-state").prop("checked", firefox.storage.local.get("isEnabled"));
  }

  /**
   *
   * Initialises event listeners
   *
   **/
  eventListeners() {}

  /**
   *
   * Called when changing states
   *
   **/

  changeState() {}
}

// new MasterControls();