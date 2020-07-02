import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from "@jupyterlab/application";

import { IThemeManager } from "@jupyterlab/apputils";

/**
 * A plugin for DavidZhang73/jupyterlab-atom-one-dark-theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: "@DavidZhang73/jupyterlab-atom-one-dark-theme:plugin",
  requires: [IThemeManager],
  activate: function (app: JupyterFrontEnd, manager: IThemeManager) {
    const style = "@DavidZhang73/jupyterlab-atom-one-dark-theme/index.css";

    manager.register({
      name: "Atom One Dark",
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined),
    });
  },
  autoStart: true,
};

export default plugin;
