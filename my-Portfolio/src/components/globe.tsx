import Globe, { GlobeMethods } from "react-globe.gl";
import { useRef, useState, useEffect } from 'react';
import country from "../datasets/dataset.json"
import { useLocaleStore } from "../store/useLocaleStore";

export interface CountriesProp {
  type: string;
  features?: (FeaturesEntity)[] | null;
  bbox?: (number)[] | null;
}
export interface FeaturesEntity {
  type: string;
  properties: Properties;
  bbox?: (number)[] | null;
  geometry: Geometry;
}
export interface Properties {
  scalerank: number;
  featurecla: string;
  LABELRANK: number;
  SOVEREIGNT: string;
  SOV_A3: string;
  ADM0_DIF: number;
  LEVEL: number;
  TYPE: string;
  ADMIN: string;
  ADM0_A3: string;
  GEOU_DIF: number;
  GEOUNIT: string;
  GU_A3: string;
  SU_DIF: number;
  SUBUNIT: string;
  SU_A3: string;
  BRK_DIFF: number;
  NAME: string;
  NAME_LONG: string;
  BRK_A3: string;
  BRK_NAME: string;
  BRK_GROUP?: null;
  ABBREV: string;
  POSTAL: string;
  FORMAL_EN?: string | null;
  FORMAL_FR?: string | null;
  NAME_CIAWF?: string | null;
  NOTE_ADM0?: string | null;
  NOTE_BRK?: string | null;
  NAME_SORT: string;
  NAME_ALT?: string | null;
  MAPCOLOR7: number;
  MAPCOLOR8: number;
  MAPCOLOR9: number;
  MAPCOLOR13: number;
  POP_EST: number;
  POP_RANK: number;
  GDP_MD_EST: number;
  POP_YEAR: number;
  LASTCENSUS: number;
  GDP_YEAR: number;
  ECONOMY: string;
  INCOME_GRP: string;
  WIKIPEDIA: number;
  FIPS_10_: string;
  ISO_A2: string;
  ISO_A3: string;
  ISO_A3_EH: string;
  ISO_N3: string;
  UN_A3: string;
  WB_A2: string;
  WB_A3: string;
  WOE_ID: number;
  WOE_ID_EH: number;
  WOE_NOTE: string;
  ADM0_A3_IS: string;
  ADM0_A3_US: string;
  ADM0_A3_UN: number;
  ADM0_A3_WB: number;
  CONTINENT: string;
  REGION_UN: string;
  SUBREGION: string;
  REGION_WB: string;
  NAME_LEN: number;
  LONG_LEN: number;
  ABBREV_LEN: number;
  TINY: number;
  HOMEPART: number;
  MIN_ZOOM: number;
  MIN_LABEL: number;
  MAX_LABEL: number;
}
export interface Geometry {
  type: string;
  coordinates?: (((number | (number)[] | null)[] | null)[] | null)[] | null;
}
type DimensionProp = {
  width: number,
  height: number
}
export default function World({ width, height }: DimensionProp) {
  const globeRef = useRef<GlobeMethods>();

  const [countries, setCountries] = useState<CountriesProp>();
  const [hoverD, setHoverD] = useState({
    curr: {},
    prev: {}
  });

  useEffect(() => {
    return setCountries(country);
  }, [])
  const { updateLocale } = useLocaleStore()
  return (
    <Globe
      ref={globeRef}
      width={width}
      height={height}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      lineHoverPrecision={0}
      polygonsData={
        (countries && countries.features) ? countries!.features!.filter(d => d.properties.ISO_A2 !== 'AQ') : []}
      polygonAltitude={(d: FeaturesEntity) => d === hoverD.curr ? 0.5 : 0.06}
      polygonCapColor={(d: FeaturesEntity) => d === hoverD.curr ? '#f1781b' : '#2ba4fb'}
      polygonSideColor={() => 'rgba(65, 65, 65, 0.15)'}
      polygonStrokeColor={() => '#ffffff'}
      polygonLabel={({ properties }: FeaturesEntity) =>
        `<b>${properties.ADMIN} (${properties.ISO_A2}):</b> <br />`
      }
      onPolygonHover={(a, b) => {
        setHoverD({
          curr: a as object,
          prev: b as object,
        })
      }}
      polygonsTransitionDuration={300}
    />
  )

}