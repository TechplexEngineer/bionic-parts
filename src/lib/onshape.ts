
import OnshapeApi from '$lib/OnshapeAPI';

const Onshape = new OnshapeApi({
	accessKey: import.meta.env.VITE_ONSHAPE_ACCESS_KEY,
	secretKey: import.meta.env.VITE_ONSHAPE_SECRET_KEY,
	debug: false
});
export default Onshape;