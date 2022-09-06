// Do not remove this import. If you do Vite will think your styles are dead
// code and not include them in the build output.
import "../styles/style.scss";
import DogBrowser from "./apps/dogBrowser";
import { moduleName } from "./constants";
import { MyModule } from "./types";

let module: MyModule;

Hooks.once("init", () => {
  console.log(`Initializing ${moduleName}`);

  module = (game as Game).modules.get(moduleName) as MyModule;
  module.dogBrowser = new DogBrowser();
});

Hooks.on("renderActorDirectory", (_: Application, html: JQuery) => {
  const button = $(
    `<button class="cc-sidebar-button" type="button">🐶</button>`
  );
  button.on("click", () => {
    module.dogBrowser.render(true);
  });
  html.find(".directory-header .action-buttons").append(button);
});
