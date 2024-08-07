import { LabIcon, redoIcon, undoIcon } from '@jupyterlab/ui-components';
import { geoJSONIcon, moundIcon, rasterIcon } from './icons';

/**
 * The command IDs.
 */
export namespace CommandIDs {
  export const createNew = 'jupytergis:create-new-jGIS-file';
  export const redo = 'jupytergis:redo';
  export const undo = 'jupytergis:undo';

  // Layers and sources commands
  export const openLayerBrowser = 'jupytergis:openLayerBrowser';
  export const newGeoJSONLayer = 'jupytergis:newGeoJSONLayer';
  export const newVectorTileLayer = 'jupytergis:newVectorTileLayer';
  export const newHillshadeLayer = 'jupytergis:newHillshadeLayer';
  export const newRasterLayer = 'jupytergis:newRasterLayer';

  // Sources only commands
  export const newGeoJSONSource = 'jupytergis:newGeoJSONSource';
  export const newRasterDemSource = 'jupytergis:newRasterDemSource';
  export const removeSource = 'jupytergis:removeSource';
  export const renameSource = 'jupytergis:renameSource';

  // Layers only commands
  export const newVectorLayer = 'jupytergis:newVectorLayer';

  export const renameLayer = 'jupytergis:renameLayer';
  export const removeLayer = 'jupytergis:removeLayer';
  export const renameGroup = 'jupytergis:renameGroup';
  export const removeGroup = 'jupytergis:removeGroup';

  export const moveLayersToGroup = 'jupytergis:moveLayersToGroup';
  export const moveLayerToNewGroup = 'jupytergis:moveLayerToNewGroup';

  export const newTerrain = 'jupytergis:newTerrain';
  export const removeTerrain = 'jupytergis:removeTerrain';
}

interface IRegisteredIcon {
  icon?: LabIcon;
  iconClass?: string;
}

const iconObject = {
  RasterSource: { icon: rasterIcon },
  GeoJSONSource: { icon: geoJSONIcon },
  VectorTileSource: { iconClass: 'fa fa-vector-square' },
  RasterLayer: { icon: rasterIcon },
  [CommandIDs.redo]: { icon: redoIcon },
  [CommandIDs.undo]: { icon: undoIcon },
  [CommandIDs.openLayerBrowser]: { iconClass: 'fa fa-book-open' },
  [CommandIDs.newGeoJSONLayer]: { icon: geoJSONIcon },
  [CommandIDs.newVectorTileLayer]: { iconClass: 'fa fa-vector-square' },
  [CommandIDs.newGeoJSONSource]: { icon: geoJSONIcon },
  [CommandIDs.newVectorLayer]: { iconClass: 'fa fa-vector-square' },
  [CommandIDs.newHillshadeLayer]: { icon: moundIcon }
};

/**
 * The registered icons
 */
export const icons = new Map<string, IRegisteredIcon>(
  Object.entries(iconObject)
);
