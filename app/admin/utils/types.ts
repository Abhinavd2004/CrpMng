import { LatLngTuple } from "leaflet";
export interface plotType {
  plotId: number;
  farmerId: number;
  crop: string;
  location: string;
  plot: LatLngTuple[];
  plotImage: string;
}

export interface farmerType {
  farmerId: number;
  name: string;
  noOfPlots: number;
  farmerImage: string;
}

export interface selectedPlot extends plotType, farmerType {}
