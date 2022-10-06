import React, { useState, useEffect } from 'react';
import OlMap from 'ol/map';
import OlView from 'ol/view';
import OlLayerTile from 'ol/layer/tile';
import OlSourceOSM from 'ol/source/osm';
const useMap = () => {
	const [map, setMap] = useState(null);
	useEffect(() => {
		setMap(
			new OlMap({
				target: undefined,
				view: new OlView({
					center: [0, 0],
					zoom: 3,
				}),
				layers: [],
				controls: [],
				overlays: [],
			})
		);
	}, []);
	return [map, setMap];
};

export default useMap;
