import oc from "open-color";
import { AppState, FlooredNumber } from "./types";
import { getDateTime } from "./utils";
import { t } from "./i18n";

export const DEFAULT_FONT = "20px Virgil";
export const DEFAULT_TEXT_ALIGN = "left";

export const getDefaultAppState = (): AppState => {
  return {
    isLoading: false,
    errorMessage: null,
    draggingElement: null,
    resizingElement: null,
    multiElement: null,
    editingElement: null,
    elementType: "selection",
    elementLocked: false,
    exportBackground: true,
    shouldAddWatermark: false,
    currentItemStrokeColor: oc.black,
    currentItemBackgroundColor: "transparent",
    currentItemFillStyle: "hachure",
    currentItemStrokeWidth: 1,
    currentItemStrokeStyle: "solid",
    currentItemRoughness: 1,
    currentItemOpacity: 100,
    currentItemFont: DEFAULT_FONT,
    currentItemTextAlign: DEFAULT_TEXT_ALIGN,
    viewBackgroundColor: oc.white,
    scrollX: 0 as FlooredNumber,
    scrollY: 0 as FlooredNumber,
    cursorX: 0,
    cursorY: 0,
    cursorButton: "up",
    scrolledOutside: false,
    name: `${t("labels.untitled")}-${getDateTime()}`,
    username: "",
    isCollaborating: false,
    isResizing: false,
    isRotating: false,
    selectionElement: null,
    zoom: 1,
    openMenu: null,
    lastPointerDownWith: "mouse",
    selectedElementIds: {},
    collaborators: new Map(),
    shouldCacheIgnoreZoom: false,
    showShortcutsDialog: false,
    zenModeEnabled: false,
  };
};

export const clearAppStateForLocalStorage = (appState: AppState) => {
  const {
    draggingElement,
    resizingElement,
    multiElement,
    editingElement,
    selectionElement,
    isResizing,
    isRotating,
    collaborators,
    isCollaborating,
    isLoading,
    errorMessage,
    showShortcutsDialog,
    ...exportedState
  } = appState;
  return exportedState;
};

export const cleanAppStateForExport = (appState: AppState) => {
  return {
    viewBackgroundColor: appState.viewBackgroundColor,
  };
};
