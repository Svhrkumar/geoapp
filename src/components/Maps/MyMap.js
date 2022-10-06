import React, {
	useCallback,
	useEffect,
	useMemo,
	useState,
	useRef,
} from 'react';
import OlMap from 'ol/map';
import OlView from 'ol/view';
import OlLayerTile from 'ol/layer/tile';
import OlSourceOSM from 'ol/source/osm';
import './maps.css';

function OpenLayer(props) {
	const [map, setMap] = useState();
	const [zoom, setZoom] = useState(4);
	const mapElement = useRef();
	console.log(OlView);
	useEffect(() => {
		const initialMap = new OlMap({
			target: mapElement.current,
			layers: [
				new OlLayerTile({
					source: new OlSourceOSM(),
				}),
			],
			view: new OlView({
				center: [72.585717, 23.021245],
				zoom: zoom,
			}),
			controls: [],
		});
		setMap(initialMap);
	}, []);

	useEffect(() => {
		map.getView.fitcenter();
	}, []);
	return (
		<div>
			<button className='.ol-zoom-in'>Zoomi In</button>
			<div ref={mapElement} className='map-container' />
		</div>
	);
}

export default OpenLayer;
