console.log(window.location.href);

console.log(browser.storage.local);

if (!browser.storage.local.hasOwnProperty("isEnabled")) {
  browser.storage.local.set({isEnabled: true});
  console.log("Set isEnabled to true because it didn't exist");

  console.log(browser.storage.local.get("isEnabled"));
}

console.log(browser.storage.local);

class MasterControls {
  constructor() {
    this.eventListeners();

    // $("#master-state").prop("checked", browser.storage.local.get("isEnabled"));
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
